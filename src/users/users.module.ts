import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { UsersService } from './users.service';
import { UserResolver } from './user.resolver';
import { TaxReturnModule } from '../tax-return/tax-return.module';

@Module({
  imports: [SequelizeModule.forFeature([User]), TaxReturnModule],
  providers: [UsersService, UserResolver],
  exports: [UsersService],
})
export class UsersModule {}
