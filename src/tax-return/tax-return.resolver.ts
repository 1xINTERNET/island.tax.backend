import {
  Resolver,
  Query,
  ResolveField,
  Parent,
  Args,
  Mutation,
  Int,
} from '@nestjs/graphql';
import { TaxReturnService } from './tax-return.service';
import { IncomeService } from './income.service';
import { AssetService } from './asset.service';
import { LiabilityService } from './liability.service';
import { TaxReturnType } from './dto/tax-return.type';
import { CreateTaxReturnInput } from './dto/create-tax-return.input';
import { UpdateTaxReturnInput } from './dto/update-tax-return.input';

@Resolver(() => TaxReturnType)
export class TaxReturnResolver {
  constructor(
    private readonly taxReturnService: TaxReturnService,
    private readonly incomeService: IncomeService,
    private readonly assetService: AssetService,
    private readonly liabilityService: LiabilityService,
  ) {}

  @Query(() => [TaxReturnType])
  async taxReturns() {
    const taxReturns = await this.taxReturnService.findAll();
    return taxReturns.map((taxReturn) => taxReturn.get({ plain: true }));
  }

  @Query(() => TaxReturnType)
  async taxReturn(@Args('id') id: number) {
    const taxReturn = await this.taxReturnService.findOne(id);
    return taxReturn.get({ plain: true });
  }

  @Mutation(() => TaxReturnType)
  async createTaxReturn(@Args('taxReturn') taxReturn: CreateTaxReturnInput) {
    const newTaxReturn = await this.taxReturnService.create(taxReturn);
    return newTaxReturn.get({ plain: true });
  }

  @Mutation(() => TaxReturnType)
  async updateTaxReturn(@Args('taxReturn') taxReturn: UpdateTaxReturnInput) {
    const updated = await this.taxReturnService.update(taxReturn.id, taxReturn);
    return updated.get ? updated.get({ plain: true }) : updated;
  }

  @Mutation(() => Boolean)
  async deleteTaxReturn(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<boolean> {
    return await this.taxReturnService.remove(id);
  }

  @ResolveField()
  async incomes(@Parent() taxReturn: TaxReturnType) {
    const incomes = await this.incomeService.findAllByTaxReturnId(taxReturn.id);
    return incomes.map((income) => income.get({ plain: true }));
  }

  @ResolveField()
  async assets(@Parent() taxReturn: TaxReturnType) {
    const assets = await this.assetService.findAllByTaxReturnId(taxReturn.id);
    return assets.map((asset) => asset.get({ plain: true }));
  }

  @ResolveField()
  async liabilities(@Parent() taxReturn: TaxReturnType) {
    const liabilities = await this.liabilityService.findAllByTaxReturnId(
      taxReturn.id,
    );
    return liabilities.map((liability) => liability.get({ plain: true }));
  }
}
