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
export class Liability extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @ForeignKey(() => TaxReturn)
  @Column({ type: DataType.INTEGER, allowNull: false })
  taxReturnId: number;

  @Column({ type: DataType.STRING, allowNull: false })
  type: string;

  @Column({ type: DataType.STRING, allowNull: true })
  subtype?: string;

  @Column({ type: DataType.STRING, allowNull: true })
  propertyAddress?: string;

  @Column({ type: DataType.STRING, allowNull: true })
  lenderName?: string;

  @Column({ type: DataType.STRING, allowNull: true })
  lenderSsn?: string;

  @Column({ type: DataType.STRING, allowNull: true })
  loanNumber?: string;

  @Column({ type: DataType.STRING, allowNull: true })
  loanStartDate?: string;

  @Column({ type: DataType.INTEGER, allowNull: true })
  loanTermYears?: number;

  @Column({ type: DataType.FLOAT, allowNull: true })
  annualPayment?: number;

  @Column({ type: DataType.FLOAT, allowNull: true })
  principalRepayment?: number;

  @Column({ type: DataType.FLOAT, allowNull: false })
  interestPaid: number;

  @Column({ type: DataType.FLOAT, allowNull: false })
  remainingBalance: number;

  @Column({ type: DataType.STRING, allowNull: true })
  details?: string;

  @Column({ type: DataType.STRING, allowNull: true })
  accountNumber?: string;

  @Column({ type: DataType.STRING, allowNull: true })
  issuer?: string;

  @BelongsTo(() => TaxReturn)
  taxReturn: TaxReturn;
}
