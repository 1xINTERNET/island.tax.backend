import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class LiabilityType {
  @Field(() => ID)
  id: number;

  @Field()
  taxReturnId: number;

  @Field()
  type: string;

  @Field({ nullable: true })
  subtype?: string;

  @Field({ nullable: true })
  propertyAddress?: string;

  @Field({ nullable: true })
  lenderName?: string;

  @Field({ nullable: true })
  lenderSsn?: string;

  @Field({ nullable: true })
  loanNumber?: string;

  @Field({ nullable: true })
  loanStartDate?: string;

  @Field({ nullable: true })
  loanTermYears?: number;

  @Field({ nullable: true })
  annualPayment?: number;

  @Field({ nullable: true })
  principalRepayment?: number;

  @Field()
  interestPaid: number;

  @Field()
  remainingBalance: number;

  @Field({ nullable: true })
  details?: string;

  @Field({ nullable: true })
  accountNumber?: string;

  @Field({ nullable: true })
  issuer?: string;
}
