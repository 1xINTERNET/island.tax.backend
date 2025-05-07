import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/user.model';
import { TaxReturn } from '../tax-return/tax-return.model';
import { Income } from '../tax-return/income.model';
import { Asset } from '../tax-return/asset.model';
import { Liability } from '../tax-return/liability.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: 'database.sqlite',
      autoLoadModels: true,
      synchronize: true, // set false in production, use migrations
      models: [User, TaxReturn, Income, Asset, Liability],
    }),
  ],
})
export class DatabaseModule {}
