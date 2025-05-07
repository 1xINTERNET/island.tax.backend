import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateIncomeInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  source?: string;

  @Field({ nullable: true })
  amount?: number;

  @Field({ nullable: true })
  type?: string;

  @Field({ nullable: true })
  subtype?: string;
}
