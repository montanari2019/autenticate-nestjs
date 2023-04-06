import { PartialType } from '@nestjs/mapped-types';
import { CreateUserLoginHistoryDto } from './create-user_login_history.dto';

export class UpdateUserLoginHistoryDto extends PartialType(CreateUserLoginHistoryDto) {}
