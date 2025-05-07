import { ObjectType, Field, ID } from '@nestjs/graphql';

import { IncomeType } from './income.type';
import { AssetType } from './asset.type';
import { LiabilityType } from './liability.type';

@ObjectType()
export class TaxReturnType {
  @Field(() => ID)
  id: number;

  @Field()
  userId: number;

  @Field()
  year: number;

  @Field()
  status: string;

  @Field(() => [IncomeType], { nullable: true })
  incomes?: IncomeType[];

  @Field(() => [AssetType], { nullable: true })
  assets?: AssetType[];

  @Field(() => [LiabilityType], { nullable: true })
  liabilities?: LiabilityType[];
}
