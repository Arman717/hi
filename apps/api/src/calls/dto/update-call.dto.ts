import { PartialType } from '@nestjs/mapped-types';
import { CreateCallDto } from './create-call.dto';
import { IsBoolean, IsISO8601, IsOptional, IsString } from 'class-validator';

export class UpdateCallDto extends PartialType(CreateCallDto) {
  @IsOptional()
  @IsString()
  outcomeNotes?: string;

  @IsOptional()
  @IsString()
  objections?: string;

  @IsOptional()
  @IsBoolean()
  meetingScheduled?: boolean;

  @IsOptional()
  @IsISO8601()
  appointmentAt?: string;
}
