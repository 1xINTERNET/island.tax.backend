import { IsNumber, IsString, IsOptional } from 'class-validator';

import { CreateAssetInput } from './create-asset.input';
import { CreateIncomeInput } from './create-income.input';
import { CreateLiabilityInput } from './create-liability.input';

export class CreateTaxReturnDto {
  @IsNumber()
  userId: number;

  @IsNumber()
  year: number;

  @IsString()
  status: string;

  @IsOptional()
  readonly assets?: CreateAssetInput[];

  @IsOptional()
  readonly incomes?: CreateIncomeInput[];

  @IsOptional()
  readonly liabilities?: CreateLiabilityInput[];
}
