import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import {
  QUEUE_AMZ_ORDERS,
  QUEUE_AMZ_TRANSACTIONS,
  QUEUE_EMAILS,
} from './constants';

@Injectable()
export class QueuesService {
  constructor(
    @InjectQueue(QUEUE_AMZ_ORDERS) private readonly amzOrdersQueue: Queue,
    @InjectQueue(QUEUE_AMZ_TRANSACTIONS)
    private readonly amzTransactionsQueue: Queue,
    @InjectQueue(QUEUE_EMAILS) private readonly emailsQueue: Queue,
  ) {}

  async addAmzOrdersSyncJob(data: {
    sellerId: string;
    marketplace: string;
    dateRange: string;
  }) {
    const job = await this.amzOrdersQueue.add('sync-orders', data, {
      attempts: 3,
      backoff: { type: 'exponential', delay: 1000 },
    });
    return { jobId: job.id, queue: QUEUE_AMZ_ORDERS };
  }

  async addAmzTransactionsSyncJob(data: {
    sellerId: string;
    marketplace: string;
    dateRange: string;
  }) {
    const job = await this.amzTransactionsQueue.add('sync-transactions', data, {
      attempts: 2,
      backoff: { type: 'exponential', delay: 1000 },
    });
    return { jobId: job.id, queue: QUEUE_AMZ_TRANSACTIONS };
  }

  async addCreateEmailsJob(data: {
    userId: string;
    templateId: string;
    recipients: string[];
  }) {
    const job = await this.emailsQueue.add('create-emails', data, {
      attempts: 3,
      backoff: { type: 'exponential', delay: 1000 },
    });
    return { jobId: job.id, queue: QUEUE_EMAILS };
  }

  async addSendEmailsJob(data: { userId: string; emailIds: string[] }) {
    const job = await this.emailsQueue.add('send-emails', data, {
      attempts: 3,
      backoff: { type: 'exponential', delay: 1000 },
    });
    return { jobId: job.id, queue: QUEUE_EMAILS };
  }
}
