import { Test, TestingModule } from '@nestjs/testing';
import { QueuesController } from './queues.controller';
import { QueuesService } from './queues.service';

describe('QueuesController', () => {
  let controller: QueuesController;
  let service: QueuesService;

  const mockQueuesService = {
    addAmzOrdersSyncJob: jest.fn(),
    addAmzTransactionsSyncJob: jest.fn(),
    addCreateEmailsJob: jest.fn(),
    addSendEmailsJob: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QueuesController],
      providers: [{ provide: QueuesService, useValue: mockQueuesService }],
    }).compile();

    controller = module.get<QueuesController>(QueuesController);
    service = module.get<QueuesService>(QueuesService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('triggerAmzOrdersSync', () => {
    it('should call addAmzOrdersSyncJob with correct data', async () => {
      const data = {
        sellerId: 'seller-1',
        marketplace: 'US',
        dateRange: '2024-01-01/2024-01-31',
      };
      const expected = { jobId: '1', queue: 'amz_orders' };
      mockQueuesService.addAmzOrdersSyncJob.mockResolvedValue(expected);

      const result = await controller.triggerAmzOrdersSync(data);

      expect(service.addAmzOrdersSyncJob).toHaveBeenCalledWith(data);
      expect(result).toEqual(expected);
    });
  });

  describe('triggerAmzTransactionsSync', () => {
    it('should call addAmzTransactionsSyncJob with correct data', async () => {
      const data = {
        sellerId: 'seller-2',
        marketplace: 'EU',
        dateRange: '2024-02-01/2024-02-28',
      };
      const expected = { jobId: '2', queue: 'amz_transactions' };
      mockQueuesService.addAmzTransactionsSyncJob.mockResolvedValue(expected);

      const result = await controller.triggerAmzTransactionsSync(data);

      expect(service.addAmzTransactionsSyncJob).toHaveBeenCalledWith(data);
      expect(result).toEqual(expected);
    });
  });

  describe('triggerCreateEmails', () => {
    it('should call addCreateEmailsJob with correct data', async () => {
      const data = {
        userId: 'user-1',
        templateId: 'welcome-template',
        recipients: ['a@test.com', 'b@test.com'],
      };
      const expected = { jobId: '3', queue: 'emails' };
      mockQueuesService.addCreateEmailsJob.mockResolvedValue(expected);

      const result = await controller.triggerCreateEmails(data);

      expect(service.addCreateEmailsJob).toHaveBeenCalledWith(data);
      expect(result).toEqual(expected);
    });
  });

  describe('triggerSendEmails', () => {
    it('should call addSendEmailsJob with correct data', async () => {
      const data = {
        userId: 'user-1',
        emailIds: ['email-1', 'email-2'],
      };
      const expected = { jobId: '4', queue: 'emails' };
      mockQueuesService.addSendEmailsJob.mockResolvedValue(expected);

      const result = await controller.triggerSendEmails(data);

      expect(service.addSendEmailsJob).toHaveBeenCalledWith(data);
      expect(result).toEqual(expected);
    });
  });
});
