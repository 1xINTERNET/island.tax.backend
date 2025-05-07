import { InputType, Field } from '@nestjs/graphql';
import { CreateTaxReturnInput } from '../../tax-return/dto/create-tax-return.input';

@InputType()
export class CreateUserInput {
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

  @Field(() => [CreateTaxReturnInput], { nullable: true })
  taxReturns?: CreateTaxReturnInput[];
}
