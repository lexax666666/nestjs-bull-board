import { Test, TestingModule } from '@nestjs/testing';
import { getQueueToken } from '@nestjs/bullmq';
import { QueuesService } from './queues.service';
import {
  QUEUE_AMZ_ORDERS,
  QUEUE_AMZ_TRANSACTIONS,
  QUEUE_EMAILS,
} from './constants';

describe('QueuesService', () => {
  let service: QueuesService;

  const mockAmzOrdersQueue = {
    add: jest.fn(),
  };
  const mockAmzTransactionsQueue = {
    add: jest.fn(),
  };
  const mockEmailsQueue = {
    add: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        QueuesService,
        { provide: getQueueToken(QUEUE_AMZ_ORDERS), useValue: mockAmzOrdersQueue },
        { provide: getQueueToken(QUEUE_AMZ_TRANSACTIONS), useValue: mockAmzTransactionsQueue },
        { provide: getQueueToken(QUEUE_EMAILS), useValue: mockEmailsQueue },
      ],
    }).compile();

    service = module.get<QueuesService>(QueuesService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('addAmzOrdersSyncJob', () => {
    it('should add a sync-orders job to the amz_orders queue', async () => {
      const data = { sellerId: 's1', marketplace: 'US', dateRange: '2024-01' };
      mockAmzOrdersQueue.add.mockResolvedValue({ id: 'job-1' });

      const result = await service.addAmzOrdersSyncJob(data);

      expect(mockAmzOrdersQueue.add).toHaveBeenCalledWith('sync-orders', data, {
        attempts: 3,
        backoff: { type: 'exponential', delay: 1000 },
      });
      expect(result).toEqual({ jobId: 'job-1', queue: QUEUE_AMZ_ORDERS });
    });
  });

  describe('addAmzTransactionsSyncJob', () => {
    it('should add a sync-transactions job to the amz_transactions queue', async () => {
      const data = { sellerId: 's2', marketplace: 'EU', dateRange: '2024-02' };
      mockAmzTransactionsQueue.add.mockResolvedValue({ id: 'job-2' });

      const result = await service.addAmzTransactionsSyncJob(data);

      expect(mockAmzTransactionsQueue.add).toHaveBeenCalledWith(
        'sync-transactions',
        data,
        { attempts: 2, backoff: { type: 'exponential', delay: 1000 } },
      );
      expect(result).toEqual({ jobId: 'job-2', queue: QUEUE_AMZ_TRANSACTIONS });
    });
  });

  describe('addCreateEmailsJob', () => {
    it('should add a create-emails job to the emails queue', async () => {
      const data = {
        userId: 'user-1',
        templateId: 'welcome',
        recipients: ['a@test.com'],
      };
      mockEmailsQueue.add.mockResolvedValue({ id: 'job-3' });

      const result = await service.addCreateEmailsJob(data);

      expect(mockEmailsQueue.add).toHaveBeenCalledWith('create-emails', data, {
        attempts: 3,
        backoff: { type: 'exponential', delay: 1000 },
      });
      expect(result).toEqual({ jobId: 'job-3', queue: QUEUE_EMAILS });
    });
  });

  describe('addSendEmailsJob', () => {
    it('should add a send-emails job to the emails queue', async () => {
      const data = { userId: 'user-1', emailIds: ['e1', 'e2'] };
      mockEmailsQueue.add.mockResolvedValue({ id: 'job-4' });

      const result = await service.addSendEmailsJob(data);

      expect(mockEmailsQueue.add).toHaveBeenCalledWith('send-emails', data, {
        attempts: 3,
        backoff: { type: 'exponential', delay: 1000 },
      });
      expect(result).toEqual({ jobId: 'job-4', queue: QUEUE_EMAILS });
    });
  });
});
