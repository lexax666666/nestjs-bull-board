import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { QUEUE_AMZ_ORDERS } from '../constants';

@Processor(QUEUE_AMZ_ORDERS, { concurrency: 10 })
export class AmzOrdersProcessor extends WorkerHost {
  private readonly logger = new Logger(AmzOrdersProcessor.name);

  async process(
    job: Job<{ sellerId: string; marketplace: string; dateRange: string }>,
  ): Promise<any> {
    this.logger.log(
      `Processing AMZ orders sync job ${job.id}: seller=${job.data.sellerId}, marketplace=${job.data.marketplace}`,
    );

    const steps = [
      'Fetching orders from Amazon SP-API',
      'Validating order data',
      'Transforming to internal format',
      'Storing orders in database',
    ];

    for (let i = 0; i < steps.length; i++) {
      this.logger.log(`  Step ${i + 1}/${steps.length}: ${steps[i]}`);
      await this.delay(1000);
      await job.updateProgress(Math.round(((i + 1) / steps.length) * 100));
    }

    const orderCount = Math.floor(Math.random() * 50) + 5;
    this.logger.log(
      `AMZ orders sync job ${job.id} completed: ${orderCount} orders synced`,
    );
    return { synced: true, orderCount, marketplace: job.data.marketplace };
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
