import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Call } from './call.entity';
import { CallEvent } from './call-event.entity';
import { CallsService } from './calls.service';
import { CallsController } from './calls.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Call, CallEvent])],
  providers: [CallsService],
  controllers: [CallsController],
  exports: [CallsService]
})
export class CallsModule {}
