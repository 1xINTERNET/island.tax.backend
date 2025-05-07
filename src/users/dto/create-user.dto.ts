import { IsString, IsOptional } from 'class-validator';
import { CreateTaxReturnInput } from '../../tax-return/dto/create-tax-return.input';

export class CreateUserDto {
  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsString()
  readonly ssn: string;

  @IsOptional()
  @IsString()
  readonly streetAndHouseNumber?: string;

  @IsOptional()
  @IsString()
  readonly postalCode?: string;

  @IsOptional()
  @IsString()
  readonly city?: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly phone: string;

  @IsOptional()
  readonly taxReturns?: CreateTaxReturnInput[];
}
