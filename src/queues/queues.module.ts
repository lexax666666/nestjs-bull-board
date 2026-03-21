import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { BullBoardModule } from '@bull-board/nestjs';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
import {
  QUEUE_AMZ_ORDERS,
  QUEUE_AMZ_TRANSACTIONS,
  QUEUE_EMAILS,
} from './constants';
import { QueuesController } from './queues.controller';
import { QueuesService } from './queues.service';
import { AmzOrdersProcessor } from './processors/amz-orders.processor';
import { AmzTransactionsProcessor } from './processors/amz-transactions.processor';
import { EmailsProcessor } from './processors/emails.processor';

@Module({
  imports: [
    BullModule.registerQueue(
      { name: QUEUE_AMZ_ORDERS },
      { name: QUEUE_AMZ_TRANSACTIONS },
      { name: QUEUE_EMAILS },
    ),
    BullBoardModule.forFeature(
      { name: QUEUE_AMZ_ORDERS, adapter: BullMQAdapter },
      { name: QUEUE_AMZ_TRANSACTIONS, adapter: BullMQAdapter },
      { name: QUEUE_EMAILS, adapter: BullMQAdapter },
    ),
  ],
  controllers: [QueuesController],
  providers: [
    QueuesService,
    AmzOrdersProcessor,
    AmzTransactionsProcessor,
    EmailsProcessor,
  ],
})
export class QueuesModule {}
