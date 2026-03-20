import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { QUEUE_AMZ_TRANSACTIONS } from '../constants';

@Processor(QUEUE_AMZ_TRANSACTIONS, { concurrency: 3000 })
export class AmzTransactionsProcessor extends WorkerHost {
  private readonly logger = new Logger(AmzTransactionsProcessor.name);

  async process(
    job: Job<{ sellerId: string; marketplace: string; dateRange: string }>,
  ): Promise<any> {
    this.logger.log(
      `Processing AMZ transactions sync job ${job.id}: seller=${job.data.sellerId}, marketplace=${job.data.marketplace}`,
    );

    const steps = [
      'Fetching transactions from Amazon SP-API',
      'Reconciling with existing records',
      'Categorizing transaction types',
      'Storing transactions in database',
      'Generating financial summary',
    ];

    for (let i = 0; i < steps.length; i++) {
      this.logger.log(`  Step ${i + 1}/${steps.length}: ${steps[i]}`);
      await this.delay(10000);
      await job.updateProgress(Math.round(((i + 1) / steps.length) * 100));
    }

    const txCount = Math.floor(Math.random() * 200) + 20;
    const totalAmount = (Math.random() * 10000 + 500).toFixed(2);
    this.logger.log(
      `AMZ transactions sync job ${job.id} completed: ${txCount} transactions, $${totalAmount} total`,
    );
    return {
      synced: true,
      transactionCount: txCount,
      totalAmount,
      marketplace: job.data.marketplace,
    };
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
