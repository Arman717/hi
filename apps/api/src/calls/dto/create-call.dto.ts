import { IsBoolean, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateCallDto {
  @IsOptional()
  @IsString()
  company?: string;

  @IsOptional()
  @IsString()
  contactName?: string;

  @IsOptional()
  @IsBoolean()
  hasConsent?: boolean;

  @IsOptional()
  @IsBoolean()
  meetingScheduled?: boolean;

  @IsOptional()
  @IsString()
  language?: string;

  @IsOptional()
  @IsUrl()
  audioUrl?: string;
}
