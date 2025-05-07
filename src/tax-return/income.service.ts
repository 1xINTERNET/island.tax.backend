import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Income } from './income.model';
import { CreateIncomeDto } from './dto/create-income.dto';
import { UpdateIncomeDto } from './dto/update-income.dto';

@Injectable()
export class IncomeService {
  constructor(
    @InjectModel(Income)
    private incomeModel: typeof Income,
  ) {}

  async create(createIncomeDto: CreateIncomeDto): Promise<Income> {
    return this.incomeModel.create(createIncomeDto as any);
  }

  async findAll(): Promise<Income[]> {
    return this.incomeModel.findAll();
  }

  async findOne(id: number): Promise<Income> {
    const income = await this.incomeModel.findByPk(id);
    if (!income) throw new NotFoundException('Income not found');
    return income;
  }

  async findAllByTaxReturnId(taxReturnId: number): Promise<Income[]> {
    return this.incomeModel.findAll({
      where: { taxReturnId },
    });
  }

  async update(id: number, updateIncomeDto: UpdateIncomeDto): Promise<Income> {
    const income = await this.findOne(id);
    return income.update(updateIncomeDto);
  }

  async remove(id: number): Promise<boolean> {
    const income = await this.findOne(id);
    await income.destroy();
    return true;
  }
}
