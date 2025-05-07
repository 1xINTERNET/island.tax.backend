import { IsNumber, IsString, IsOptional } from 'class-validator';

export class UpdateTaxReturnDto {
  @IsOptional()
  @IsNumber()
  year?: number;

  @IsOptional()
  @IsString()
  status?: string;
}
