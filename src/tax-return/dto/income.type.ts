import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class IncomeType {
  @Field(() => ID)
  id: number;

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
