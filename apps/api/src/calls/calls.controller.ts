import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import { CallsService } from './calls.service';
import { CreateCallDto } from './dto/create-call.dto';
import { UpdateCallDto } from './dto/update-call.dto';

@Controller('calls')
export class CallsController {
  constructor(private readonly callsService: CallsService) {}

  @Post()
  create(@Body() dto: CreateCallDto) {
    // TODO: replace with real authenticated user context
    const userId = '00000000-0000-0000-0000-000000000000';
    return this.callsService.create(userId, dto);
  }

  @Get()
  findAll() {
    const userId = '00000000-0000-0000-0000-000000000000';
    return this.callsService.findAllForUser(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.callsService.findOneOrFail(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCallDto) {
    return this.callsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.callsService.delete(id);
  }
}
