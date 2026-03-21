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

  @Post('emails/create')
  async triggerCreateEmails(
    @Body() data: { userId: string; templateId: string; recipients: string[] },
  ) {
    return this.queuesService.addCreateEmailsJob(data);
  }

  @Post('emails/send')
  async triggerSendEmails(
    @Body() data: { userId: string; emailIds: string[] },
  ) {
    return this.queuesService.addSendEmailsJob(data);
  }
}
