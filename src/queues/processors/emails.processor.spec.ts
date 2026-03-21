import { EmailsProcessor } from './emails.processor';

describe('EmailsProcessor', () => {
  let processor: EmailsProcessor;

  beforeEach(() => {
    jest.useFakeTimers();
    processor = new EmailsProcessor();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  const createMockJob = (name: string, data: any) => ({
    id: 'test-job-id',
    name,
    data,
    updateProgress: jest.fn(),
  });

  it('should be defined', () => {
    expect(processor).toBeDefined();
  });

  describe('create-emails job', () => {
    it('should process create-emails and return created count', async () => {
      const job = createMockJob('create-emails', {
        userId: 'user-1',
        templateId: 'welcome',
        recipients: ['a@test.com', 'b@test.com', 'c@test.com'],
      });

      const processPromise = processor.process(job as any);
      await jest.runAllTimersAsync();
      const result = await processPromise;

      expect(result).toEqual({
        created: true,
        emailCount: 3,
        userId: 'user-1',
      });
      expect(job.updateProgress).toHaveBeenCalledTimes(4);
      expect(job.updateProgress).toHaveBeenLastCalledWith(100);
    });
  });

  describe('send-emails job', () => {
    it('should process send-emails and return sent count', async () => {
      const job = createMockJob('send-emails', {
        userId: 'user-2',
        emailIds: ['e1', 'e2'],
      });

      const processPromise = processor.process(job as any);
      await jest.runAllTimersAsync();
      const result = await processPromise;

      expect(result).toEqual({
        sent: true,
        sentCount: 2,
        userId: 'user-2',
      });
      expect(job.updateProgress).toHaveBeenCalledTimes(4);
      expect(job.updateProgress).toHaveBeenLastCalledWith(100);
    });
  });

  describe('unknown job', () => {
    it('should throw for unknown job names', async () => {
      const job = createMockJob('unknown-job', {});

      await expect(processor.process(job as any)).rejects.toThrow(
        'Unknown job name: unknown-job',
      );
    });
  });
});
