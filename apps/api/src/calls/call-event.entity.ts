import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Call } from './call.entity';

export type CallEventType =
  | 'consent_granted'
  | 'consent_withdrawn'
  | 'recording_started'
  | 'recording_stopped'
  | 'deleted'
  | 'redacted'
  | 'asr_done'
  | 'nlp_done';

@Entity({ name: 'call_events' })
export class CallEvent {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Call, (call) => call.events, { nullable: false })
  call!: Call;

  @Column({ type: 'varchar', length: 64 })
  eventType!: CallEventType;

  @Column({ type: 'jsonb', nullable: true })
  payload!: Record<string, unknown> | null;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt!: Date;
}
