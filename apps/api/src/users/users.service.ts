import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}

  findByEmail(email: string) {
    return this.usersRepository.findOne({ where: { email } });
  }

  async create(user: Partial<User>) {
    const entity = this.usersRepository.create(user);
    return this.usersRepository.save(entity);
  }
}
