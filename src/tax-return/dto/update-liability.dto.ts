import { IsNumber, IsString, IsOptional } from 'class-validator';

export class UpdateLiabilityDto {
  @IsOptional()
  @IsString()
  readonly type?: string;

  @IsOptional()
  @IsString()
  readonly subtype?: string;

  @IsOptional()
  @IsString()
  readonly propertyAddress?: string;

  @IsOptional()
  @IsString()
  readonly lenderName?: string;

  @IsOptional()
  @IsString()
  readonly lenderSsn?: string;

  @IsOptional()
  @IsString()
  readonly loanNumber?: string;

  @IsOptional()
  @IsString()
  readonly loanStartDate?: string;

  @IsOptional()
  @IsNumber()
  readonly loanTermYears?: number;

  @IsOptional()
  @IsNumber()
  readonly annualPayment?: number;

  @IsOptional()
  @IsNumber()
  readonly principalRepayment?: number;

  @IsOptional()
  @IsNumber()
  readonly interestPaid?: number;

  @IsOptional()
  @IsNumber()
  readonly remainingBalance?: number;

  @IsOptional()
  @IsString()
  readonly details?: string;

  @IsOptional()
  @IsString()
  readonly accountNumber?: string;

  @IsOptional()
  @IsString()
  readonly issuer?: string;
}
