import { PostgreSqlContainer, StartedPostgreSqlContainer } from '@testcontainers/postgresql';
import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as schema from '../../src/drizzle/schema/index';

export type TestContext = {
  container: StartedPostgreSqlContainer;
  db: ReturnType<typeof drizzle<typeof schema>>;
  client: ReturnType<typeof postgres>;
  connectionString: string;
};

export async function setupTestDatabase(): Promise<TestContext> {
  const container = await new PostgreSqlContainer('postgres:16-alpine').start();

  const connectionString = container.getConnectionUri();
  const client = postgres(connectionString);

  // Read and apply the migration SQL
  const migrationPath = path.join(__dirname, '../../drizzle/0000_serious_komodo.sql');
  let migrationSql = fs.readFileSync(migrationPath, 'utf-8');

  // The generated migration is commented out — uncomment it
  migrationSql = migrationSql
    .replace(/^\/\*\n/, '')
    .replace(/\n\*\/\s*$/, '');

  // Split by statement-breakpoint and execute each
  const statements = migrationSql
    .split('--> statement-breakpoint')
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  for (const statement of statements) {
    await client.unsafe(statement);
  }

  const db = drizzle(client, { schema });

  return { container, db, client, connectionString };
}

export async function teardownTestDatabase(ctx: TestContext): Promise<void> {
  await ctx.client.end();
  await ctx.container.stop();
}
