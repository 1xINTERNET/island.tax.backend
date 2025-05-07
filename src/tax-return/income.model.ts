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
export class Income extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @ForeignKey(() => TaxReturn)
  @Column({ type: DataType.INTEGER, allowNull: false })
  taxReturnId: number;

  @Column({ type: DataType.STRING, allowNull: false })
  source: string;

  @Column({ type: DataType.FLOAT, allowNull: false })
  amount: number;

  @Column({ type: DataType.STRING, allowNull: false })
  type: string;

  @Column({ type: DataType.STRING, allowNull: true })
  subtype?: string;

  @BelongsTo(() => TaxReturn)
  taxReturn: TaxReturn;
}
