import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateAssetInput {
  @Field()
  taxReturnId: number;

  @Field()
  value: number;

  @Field()
  type: string;

  @Field({ nullable: true })
  assetId?: string;

  @Field({ nullable: true })
  address?: string;
}
