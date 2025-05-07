import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateIncomeInput {
  @Field()
  taxReturnId: number;

  @Field()
  source: string;

  @Field()
  amount: number;

  @Field()
  type: string;

  @Field({ nullable: true })
  subtype?: string;
}
