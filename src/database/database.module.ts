import { Module } from '@nestjs/common';
import { DatabaseController } from './database.controller';
import { DatabaseService } from './database.service';
import { databaseProviders } from './database.providers';

@Module({
  imports: [],
  controllers: [DatabaseController],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
