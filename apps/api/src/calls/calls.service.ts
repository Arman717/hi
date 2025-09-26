import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Call } from './call.entity';
import { CallEvent, CallEventType } from './call-event.entity';
import { CreateCallDto } from './dto/create-call.dto';
import { UpdateCallDto } from './dto/update-call.dto';

@Injectable()
export class CallsService {
  constructor(
    @InjectRepository(Call)
    private readonly callRepository: Repository<Call>,
    @InjectRepository(CallEvent)
    private readonly callEventRepository: Repository<CallEvent>
  ) {}

  create(userId: string, dto: CreateCallDto) {
    const call = this.callRepository.create({
      ...dto,
      user: { id: userId } as any,
      asrStatus: 'queued',
      nlpStatus: 'queued'
    });
    return this.callRepository.save(call);
  }

  findAllForUser(userId: string) {
    return this.callRepository.find({
      where: { user: { id: userId } },
      relations: ['user']
    });
  }

  async findOneOrFail(id: string) {
    const call = await this.callRepository.findOne({
      where: { id },
      relations: ['user', 'events']
    });
    if (!call) {
      throw new NotFoundException('Call not found');
    }
    return call;
  }

  async update(id: string, dto: UpdateCallDto) {
    const call = await this.findOneOrFail(id);
    Object.assign(call, dto);
    return this.callRepository.save(call);
  }

  async delete(id: string) {
    const call = await this.findOneOrFail(id);
    await this.callRepository.remove(call);
  }

  async addEvent(callId: string, eventType: CallEventType, payload?: Record<string, unknown>) {
    const call = await this.findOneOrFail(callId);
    const event = this.callEventRepository.create({
      call,
      eventType,
      payload: payload ?? null
    });
    return this.callEventRepository.save(event);
  }
}
