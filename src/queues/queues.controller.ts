import { Controller, Post, Body } from '@nestjs/common';
import { QueuesService } from './queues.service';

@Controller('jobs')
export class QueuesController {
  constructor(private readonly queuesService: QueuesService) {}

  @Post('amz-orders')
  async triggerAmzOrdersSync(
    @Body() data: { sellerId: string; marketplace: string; dateRange: string },
  ) {
    return this.queuesService.addAmzOrdersSyncJob(data);
  }

  @Post('amz-transactions')
  async triggerAmzTransactionsSync(
    @Body() data: { sellerId: string; marketplace: string; dateRange: string },
  ) {
    return this.queuesService.addAmzTransactionsSyncJob(data);
  }
}
