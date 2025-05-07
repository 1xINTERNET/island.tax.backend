import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TaxReturn } from './tax-return.model';
import { Income } from './income.model';
import { Asset } from './asset.model';
import { Liability } from './liability.model';
import { TaxReturnService } from './tax-return.service';
import { TaxReturnResolver } from './tax-return.resolver';
import { IncomeService } from './income.service';
import { IncomeResolver } from './income.resolver';
import { AssetService } from './asset.service';
import { AssetResolver } from './asset.resolver';
import { LiabilityService } from './liability.service';
import { LiabilityResolver } from './liability.resolver';

@Module({
  imports: [SequelizeModule.forFeature([TaxReturn, Income, Asset, Liability])],
  providers: [
    TaxReturnService,
    IncomeService,
    IncomeResolver,
    AssetService,
    AssetResolver,
    LiabilityService,
    LiabilityResolver,
    TaxReturnResolver,
  ],
  exports: [TaxReturnService, IncomeService, AssetService, LiabilityService],
})
export class TaxReturnModule {}
