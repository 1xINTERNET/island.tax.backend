import { Resolver, Query, Args, Mutation, Int } from '@nestjs/graphql';
import { IncomeService } from './income.service';
import { IncomeType } from './dto/income.type';
import { CreateIncomeInput } from './dto/create-income.input';
import { UpdateIncomeInput } from './dto/update-income.input';

@Resolver(() => IncomeType)
export class IncomeResolver {
  constructor(private readonly incomeService: IncomeService) {}

  @Query(() => [IncomeType])
  async incomes() {
    return await this.incomeService.findAll();
  }

  @Query(() => IncomeType)
  async income(@Args('id') id: number) {
    return await this.incomeService.findOne(id);
  }

  @Mutation(() => IncomeType)
  async createIncome(@Args('income') income: CreateIncomeInput) {
    const i = await this.incomeService.create(income);
    return i.get({ plain: true });
  }

  @Mutation(() => IncomeType)
  async updateIncome(@Args('income') income: UpdateIncomeInput) {
    const i = await this.incomeService.update(income.id, income);
    return i.get ? i.get({ plain: true }) : i;
  }

  @Mutation(() => Boolean)
  async deleteIncome(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<boolean> {
    return await this.incomeService.remove(id);
  }
}
