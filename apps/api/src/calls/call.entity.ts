import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { User } from '../users/user.entity';
import { CallEvent } from './call-event.entity';

export type ProcessingStatus = 'queued' | 'processing' | 'done' | 'error';

@Entity({ name: 'calls' })
export class Call {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => User, { nullable: false })
  user!: User;

  @Column({ type: 'varchar', length: 255, nullable: true })
  company!: string | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  contactName!: string | null;

  @Column({ type: 'timestamptz', nullable: true })
  startedAt!: Date | null;

  @Column({ type: 'timestamptz', nullable: true })
  endedAt!: Date | null;

  @Column({ type: 'int', nullable: true })
  durationSec!: number | null;

  @Column({ type: 'boolean', default: false })
  hasConsent!: boolean;

  @Column({ type: 'boolean', default: false })
  meetingScheduled!: boolean;

  @Column({ type: 'timestamptz', nullable: true })
  appointmentAt!: Date | null;

  @Column({ type: 'text', nullable: true })
  objections!: string | null;

  @Column({ type: 'text', nullable: true })
  outcomeNotes!: string | null;

  @Column({ type: 'text', nullable: true })
  audioUrl!: string | null;

  @Column({ type: 'text', nullable: true })
  transcriptText!: string | null;

  @Column({ type: 'text', nullable: true })
  summaryText!: string | null;

  @Column({ type: 'varchar', length: 16, default: 'de-DE' })
  language!: string;

  @Column({ type: 'varchar', length: 16, default: 'queued' })
  asrStatus!: ProcessingStatus;

  @Column({ type: 'varchar', length: 16, default: 'queued' })
  nlpStatus!: ProcessingStatus;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt!: Date;

  @OneToMany(() => CallEvent, (event) => event.call)
  events!: CallEvent[];
}
