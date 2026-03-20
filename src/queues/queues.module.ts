import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { BullBoardModule } from '@bull-board/nestjs';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
import { QUEUE_AMZ_ORDERS, QUEUE_AMZ_TRANSACTIONS } from './constants';
import { QueuesController } from './queues.controller';
import { QueuesService } from './queues.service';
import { AmzOrdersProcessor } from './processors/amz-orders.processor';
import { AmzTransactionsProcessor } from './processors/amz-transactions.processor';

@Module({
  imports: [
    BullModule.registerQueue(
      { name: QUEUE_AMZ_ORDERS },
      { name: QUEUE_AMZ_TRANSACTIONS },
    ),
    BullBoardModule.forFeature(
      { name: QUEUE_AMZ_ORDERS, adapter: BullMQAdapter },
      { name: QUEUE_AMZ_TRANSACTIONS, adapter: BullMQAdapter },
    ),
  ],
  controllers: [QueuesController],
  providers: [QueuesService, AmzOrdersProcessor, AmzTransactionsProcessor],
})
export class QueuesModule {}
