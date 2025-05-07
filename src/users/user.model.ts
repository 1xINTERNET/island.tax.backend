import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';
import { TaxReturn } from '../tax-return/tax-return.model';

@Table
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  firstName: string;

  @Column({ type: DataType.STRING, allowNull: false })
  lastName: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  ssn: string;

  @Column({ type: DataType.STRING, allowNull: true })
  streetAndHouseNumber?: string;

  @Column({ type: DataType.STRING, allowNull: true })
  postalCode?: string;

  @Column({ type: DataType.STRING, allowNull: true })
  city?: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  phone: string;

  @HasMany(() => TaxReturn)
  taxReturns: TaxReturn[];
}
