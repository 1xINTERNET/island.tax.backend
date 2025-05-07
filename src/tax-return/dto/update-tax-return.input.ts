import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateTaxReturnInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  userId: number;

  @Field({ nullable: true })
  year: number;

  @Field({ nullable: true })
  status: string;
}
