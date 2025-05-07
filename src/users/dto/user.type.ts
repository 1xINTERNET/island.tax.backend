import { ObjectType, Field, ID } from '@nestjs/graphql';
import { TaxReturnType } from '../../tax-return/dto/tax-return.type';

@ObjectType()
export class UserType {
  @Field(() => ID)
  id: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  ssn: string;

  @Field({ nullable: true })
  streetAndHouseNumber?: string;

  @Field({ nullable: true })
  postalCode?: string;

  @Field({ nullable: true })
  city?: string;

  @Field()
  email: string;

  @Field()
  phone: string;

  @Field(() => [TaxReturnType], { nullable: true })
  taxReturns?: TaxReturnType[];
}
