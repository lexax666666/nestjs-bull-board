import { AmzTransactionsProcessor } from './amz-transactions.processor';

describe('AmzTransactionsProcessor', () => {
  let processor: AmzTransactionsProcessor;

  beforeEach(() => {
    jest.useFakeTimers();
    processor = new AmzTransactionsProcessor();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  const createMockJob = (data: any) => ({
    id: 'test-job-id',
    name: 'sync-transactions',
    data,
    updateProgress: jest.fn(),
  });

  it('should be defined', () => {
    expect(processor).toBeDefined();
  });

  it('should process a transactions sync job and return result', async () => {
    const job = createMockJob({
      sellerId: 'seller-2',
      marketplace: 'EU',
      dateRange: '2024-02',
    });

    const processPromise = processor.process(job as any);
    await jest.runAllTimersAsync();
    const result = await processPromise;

    expect(result).toHaveProperty('synced', true);
    expect(result).toHaveProperty('marketplace', 'EU');
    expect(typeof result.transactionCount).toBe('number');
    expect(result.transactionCount).toBeGreaterThanOrEqual(20);
    expect(typeof result.totalAmount).toBe('string');
    expect(job.updateProgress).toHaveBeenCalledTimes(5);
    expect(job.updateProgress).toHaveBeenLastCalledWith(100);
  });
});
