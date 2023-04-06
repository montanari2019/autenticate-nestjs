import { Module } from '@nestjs/common';
import { UserLoginHistoryService } from './user_login_history.service';
import { UserLoginHistoryController } from './user_login_history.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UserLoginHistoryController],
  providers: [UserLoginHistoryService],
  exports: [UserLoginHistoryService]
})
export class UserLoginHistoryModule {}
