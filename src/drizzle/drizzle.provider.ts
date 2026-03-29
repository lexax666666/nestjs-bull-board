import { type Provider } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { DRIZZLE } from './drizzle.constants';
import * as schema from './schema/index';

export type DrizzleDB = ReturnType<typeof drizzle<typeof schema>>;

export const drizzleProvider: Provider = {
  provide: DRIZZLE,
  useFactory: () => {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error('DATABASE_URL environment variable is not set');
    }

    const client = postgres(connectionString, {
      ssl: process.env.DATABASE_SSL === 'false' ? false : 'require',
    });

    return drizzle(client, { schema });
  },
};
