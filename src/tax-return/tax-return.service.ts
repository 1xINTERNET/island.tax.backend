import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TaxReturn } from './tax-return.model';
import { CreateTaxReturnDto } from './dto/create-tax-return.dto';
import { UpdateTaxReturnDto } from './dto/update-tax-return.dto';
import { Asset } from './asset.model';
import { Liability } from './liability.model';
import { Income } from './income.model';

@Injectable()
export class TaxReturnService {
  constructor(
    @InjectModel(TaxReturn)
    private taxReturnModel: typeof TaxReturn,
  ) {}

  async create(createTaxReturnDto: CreateTaxReturnDto): Promise<TaxReturn> {
    const { incomes, liabilities, assets, ...taxReturnProps } =
      createTaxReturnDto;

    const taxReturn = await this.taxReturnModel.create(
      {
        ...taxReturnProps,
        incomes: incomes || [],
        liabilities: liabilities || [],
        assets: assets || [],
      },
      {
        include: [Asset, Liability, Income],
      },
    );
    return taxReturn;
  }

  async findAll(): Promise<TaxReturn[]> {
    return this.taxReturnModel.findAll();
  }

  async findOne(id: number): Promise<TaxReturn> {
    const taxReturn = await this.taxReturnModel.findByPk(id);
    if (!taxReturn) throw new NotFoundException('Tax return not found');
    return taxReturn;
  }

  async findAllByUser(userId: number): Promise<TaxReturn[]> {
    return this.taxReturnModel.findAll({ where: { userId } });
  }

  async update(
    id: number,
    updateTaxReturnDto: UpdateTaxReturnDto,
  ): Promise<TaxReturn> {
    const taxReturn = await this.findOne(id);
    return taxReturn.update(updateTaxReturnDto);
  }

  async remove(id: number): Promise<boolean> {
    const taxReturn = await this.findOne(id);
    await taxReturn.destroy();
    return true;
  }
}
