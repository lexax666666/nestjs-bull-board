import { Test } from '@nestjs/testing';
import { sql } from 'drizzle-orm';
import { DRIZZLE } from '../../src/drizzle/drizzle.constants';
import { DrizzleModule } from '../../src/drizzle/drizzle.module';
import type { DrizzleDB } from '../../src/drizzle/drizzle.provider';
import {
  setupTestDatabase,
  teardownTestDatabase,
  type TestContext,
} from './test-helpers';

describe('Drizzle Integration', () => {
  let ctx: TestContext;

  beforeAll(async () => {
    ctx = await setupTestDatabase();
  }, 120_000);

  afterAll(async () => {
    if (ctx) {
      await teardownTestDatabase(ctx);
    }
  });

  it('should inject Drizzle instance via NestJS module', async () => {
    process.env.DATABASE_URL = ctx.connectionString;
    process.env.DATABASE_SSL = 'false';

    const module = await Test.createTestingModule({
      imports: [DrizzleModule],
    }).compile();

    const db = module.get<DrizzleDB>(DRIZZLE);
    expect(db).toBeDefined();

    await module.close();
  });

  it('should execute raw SQL', async () => {
    const result = await ctx.db.execute(sql`SELECT 1 + 1 AS sum`);
    expect(result).toBeDefined();
    expect(result[0].sum).toBe(2);
  });

  it('should have public schema tables', async () => {
    const result = await ctx.db.execute(sql`
      SELECT table_name FROM information_schema.tables
      WHERE table_schema = 'public'
      ORDER BY table_name
    `);

    const tableNames = result.map((r: any) => r.table_name);

    // Verify key public tables exist
    expect(tableNames).toContain('user');
    expect(tableNames).toContain('address');
    expect(tableNames).toContain('fba_batch');
    expect(tableNames).toContain('fba_pallet');
    expect(tableNames).toContain('supplier');
    expect(tableNames).toContain('setting');
    expect(tableNames).toContain('log');
    expect(tableNames).toContain('feedback_campaigns');

    // Should have 35 public tables
    expect(tableNames.length).toBe(35);
  });

  it('should have amazon schema tables', async () => {
    const result = await ctx.db.execute(sql`
      SELECT table_name FROM information_schema.tables
      WHERE table_schema = 'amazon'
      ORDER BY table_name
    `);

    const tableNames = result.map((r: any) => r.table_name);

    // Verify key amazon tables exist
    expect(tableNames).toContain('listing');
    expect(tableNames).toContain('catalog');
    expect(tableNames).toContain('fba_shipment');
    expect(tableNames).toContain('fba_item');
    expect(tableNames).toContain('fba_box');
    expect(tableNames).toContain('amz_orders');
    expect(tableNames).toContain('amz_transactions');
    expect(tableNames).toContain('amz_order_items');

    // Should have 20 amazon tables
    expect(tableNames.length).toBe(20);
  });

  it('should have listing_update table with no primary key', async () => {
    const result = await ctx.db.execute(sql`
      SELECT constraint_type
      FROM information_schema.table_constraints
      WHERE table_schema = 'amazon'
        AND table_name = 'listing_update'
        AND constraint_type = 'PRIMARY KEY'
    `);

    expect(result.length).toBe(0);
  });
});
