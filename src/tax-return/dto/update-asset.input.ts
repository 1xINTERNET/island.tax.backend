import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateAssetInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  value?: number;

  @Field({ nullable: true })
  type?: string;

  @Field({ nullable: true })
  assetId?: string;

  @Field({ nullable: true })
  address?: string;
}
