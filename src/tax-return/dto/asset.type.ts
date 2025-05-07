import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class AssetType {
  @Field(() => ID)
  id: number;

  @Field()
  taxReturnId: number;

  @Field()
  value: number;

  @Field()
  type: string;

  @Field({ nullable: true })
  assetId?: string;

  @Field({ nullable: true })
  address: string;
}
