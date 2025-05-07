import { InputType, Field } from '@nestjs/graphql';

import { CreateAssetInput } from './create-asset.input';
import { CreateIncomeInput } from './create-income.input';
import { CreateLiabilityInput } from './create-liability.input';

@InputType()
export class CreateTaxReturnInput {
  @Field()
  userId: number;

  @Field()
  year: number;

  @Field()
  status: string;

  @Field(() => [CreateAssetInput], { nullable: true })
  assets?: CreateAssetInput[];

  @Field(() => [CreateIncomeInput], { nullable: true })
  incomes?: CreateIncomeInput[];

  @Field(() => [CreateLiabilityInput], { nullable: true })
  liabilities?: CreateLiabilityInput[];
}
