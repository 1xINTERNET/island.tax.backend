import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
  BelongsTo,
  HasMany,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';
import { User } from '../users/user.model';
import { Income } from './income.model';
import { Asset } from './asset.model';
import { Liability } from './liability.model';

@Table
export class TaxReturn extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  year: number;

  @Column({ type: DataType.STRING, allowNull: false, defaultValue: 'draft' })
  status: string;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => Income)
  incomes: Income[];

  @HasMany(() => Asset)
  assets: Asset[];

  @HasMany(() => Liability)
  liabilities: Liability[];
}
