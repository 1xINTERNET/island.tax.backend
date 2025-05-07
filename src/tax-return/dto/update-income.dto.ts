import { IsNumber, IsString, IsOptional } from 'class-validator';

export class UpdateIncomeDto {
  @IsOptional()
  @IsString()
  readonly source?: string;

  @IsOptional()
  @IsNumber()
  readonly amount?: number;

  @IsOptional()
  @IsString()
  readonly type?: string;

  @IsOptional()
  @IsString()
  readonly subtype?: string;
}
