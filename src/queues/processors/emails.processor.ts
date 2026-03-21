import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { QUEUE_EMAILS } from '../constants';

@Processor(QUEUE_EMAILS, { concurrency: 10 })
export class EmailsProcessor extends WorkerHost {
  private readonly logger = new Logger(EmailsProcessor.name);

  async process(job: Job): Promise<any> {
    switch (job.name) {
      case 'create-emails':
        return this.handleCreateEmails(job);
      case 'send-emails':
        return this.handleSendEmails(job);
      default:
        throw new Error(`Unknown job name: ${job.name}`);
    }
  }

  private async handleCreateEmails(
    job: Job<{ userId: string; templateId: string; recipients: string[] }>,
  ): Promise<any> {
    this.logger.log(
      `Processing create-emails job ${job.id}: userId=${job.data.userId}, template=${job.data.templateId}`,
    );

    const steps = [
      'Loading email template',
      'Resolving recipient list',
      'Generating personalized content',
      'Storing draft emails in database',
    ];

    for (let i = 0; i < steps.length; i++) {
      this.logger.log(`  Step ${i + 1}/${steps.length}: ${steps[i]}`);
      await this.delay(1000);
      await job.updateProgress(Math.round(((i + 1) / steps.length) * 100));
    }

    const emailCount = job.data.recipients?.length ?? Math.floor(Math.random() * 20) + 1;
    this.logger.log(
      `Create-emails job ${job.id} completed: ${emailCount} emails created`,
    );
    return { created: true, emailCount, userId: job.data.userId };
  }

  private async handleSendEmails(
    job: Job<{ userId: string; emailIds: string[] }>,
  ): Promise<any> {
    this.logger.log(
      `Processing send-emails job ${job.id}: userId=${job.data.userId}, emails=${job.data.emailIds?.length ?? 0}`,
    );

    const steps = [
      'Fetching emails from database',
      'Validating sender credentials',
      'Dispatching emails via SMTP',
      'Recording delivery status',
    ];

    for (let i = 0; i < steps.length; i++) {
      this.logger.log(`  Step ${i + 1}/${steps.length}: ${steps[i]}`);
      await this.delay(1000);
      await job.updateProgress(Math.round(((i + 1) / steps.length) * 100));
    }

    const sentCount = job.data.emailIds?.length ?? Math.floor(Math.random() * 20) + 1;
    this.logger.log(
      `Send-emails job ${job.id} completed: ${sentCount} emails sent`,
    );
    return { sent: true, sentCount, userId: job.data.userId };
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
