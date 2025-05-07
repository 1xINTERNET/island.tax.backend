import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateLiabilityInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  type?: string;

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

  @Field({ nullable: true })
  interestPaid?: number;

  @Field({ nullable: true })
  remainingBalance?: number;

  @Field({ nullable: true })
  details?: string;

  @Field({ nullable: true })
  accountNumber?: string;

  @Field({ nullable: true })
  issuer?: string;
}
