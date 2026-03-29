import { Test } from '@nestjs/testing';
import { DrizzleModule } from './drizzle.module';
import { DRIZZLE } from './drizzle.constants';

describe('DrizzleModule', () => {
  it('should throw if DATABASE_URL is not set', async () => {
    const original = process.env.DATABASE_URL;
    delete process.env.DATABASE_URL;

    try {
      await expect(
        Test.createTestingModule({
          imports: [DrizzleModule],
        }).compile(),
      ).rejects.toThrow('DATABASE_URL environment variable is not set');
    } finally {
      if (original !== undefined) {
        process.env.DATABASE_URL = original;
      }
    }
  });

  it('should provide DRIZZLE token when DATABASE_URL is set', async () => {
    const original = process.env.DATABASE_URL;
    process.env.DATABASE_URL = 'postgresql://test:test@localhost:5432/test';
    process.env.DATABASE_SSL = 'false';

    try {
      const module = await Test.createTestingModule({
        imports: [DrizzleModule],
      }).compile();

      const db: unknown = module.get(DRIZZLE);
      expect(db).toBeDefined();

      await module.close();
    } finally {
      if (original !== undefined) {
        process.env.DATABASE_URL = original;
      } else {
        delete process.env.DATABASE_URL;
      }
    }
  });
});
