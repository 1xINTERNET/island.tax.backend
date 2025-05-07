import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
  BelongsTo,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';
import { TaxReturn } from './tax-return.model';

@Table
export class Asset extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @ForeignKey(() => TaxReturn)
  @Column({ type: DataType.INTEGER, allowNull: false })
  taxReturnId: number;

  @Column({ type: DataType.FLOAT, allowNull: false })
  value: number;

  @Column({ type: DataType.STRING, allowNull: false })
  type: string;

  @Column({ type: DataType.STRING, allowNull: true })
  assetId?: string;

  @Column({ type: DataType.STRING, allowNull: true })
  address?: string;

  @BelongsTo(() => TaxReturn)
  taxReturn: TaxReturn;
}
