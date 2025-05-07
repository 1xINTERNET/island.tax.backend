import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateIncomeDto {
  @IsNumber()
  readonly taxReturnId: number;

  @IsString()
  readonly source: string;

  @IsNumber()
  readonly amount: number;

  @IsString()
  readonly type: string;

  @IsOptional()
  @IsString()
  readonly subtype?: string;
}
