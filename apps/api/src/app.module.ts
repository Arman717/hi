import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/user.entity';
import { Call } from './calls/call.entity';
import { CallEvent } from './calls/call-event.entity';
import { UsersModule } from './users/users.module';
import { CallsModule } from './calls/calls.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        const databaseUrl = process.env.DATABASE_URL;
        if (databaseUrl) {
          return {
            type: 'postgres',
            url: databaseUrl,
            autoLoadEntities: true,
            synchronize: false
          } as const;
        }

        const tmpDir = join(process.cwd(), 'tmp');
        if (!existsSync(tmpDir)) {
          mkdirSync(tmpDir, { recursive: true });
        }

        return {
          type: 'sqlite',
          database: join(tmpDir, 'dev.sqlite'),
          autoLoadEntities: true,
          synchronize: true
        } as const;
      }
    }),
    TypeOrmModule.forFeature([User, Call, CallEvent]),
    UsersModule,
    CallsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
