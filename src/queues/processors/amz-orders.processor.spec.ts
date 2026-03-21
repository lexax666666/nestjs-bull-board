import { AmzOrdersProcessor } from './amz-orders.processor';

describe('AmzOrdersProcessor', () => {
  let processor: AmzOrdersProcessor;

  beforeEach(() => {
    jest.useFakeTimers();
    processor = new AmzOrdersProcessor();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  const createMockJob = (data: any) => ({
    id: 'test-job-id',
    name: 'sync-orders',
    data,
    updateProgress: jest.fn(),
  });

  it('should be defined', () => {
    expect(processor).toBeDefined();
  });

  it('should process an orders sync job and return result', async () => {
    const job = createMockJob({
      sellerId: 'seller-1',
      marketplace: 'US',
      dateRange: '2024-01',
    });

    const processPromise = processor.process(job as any);
    await jest.runAllTimersAsync();
    const result = await processPromise;

    expect(result).toHaveProperty('synced', true);
    expect(result).toHaveProperty('marketplace', 'US');
    expect(typeof result.orderCount).toBe('number');
    expect(result.orderCount).toBeGreaterThanOrEqual(5);
    expect(job.updateProgress).toHaveBeenCalledTimes(4);
    expect(job.updateProgress).toHaveBeenLastCalledWith(100);
  });
});
