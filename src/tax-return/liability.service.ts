import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Liability } from './liability.model';
import { CreateLiabilityDto } from './dto/create-liability.dto';
import { UpdateLiabilityDto } from './dto/update-liability.dto';

@Injectable()
export class LiabilityService {
  constructor(
    @InjectModel(Liability)
    private liabilityModel: typeof Liability,
  ) {}

  async create(createLiabilityDto: CreateLiabilityDto): Promise<Liability> {
    return this.liabilityModel.create(createLiabilityDto as any);
  }

  async findAll(): Promise<Liability[]> {
    return this.liabilityModel.findAll();
  }

  async findOne(id: number): Promise<Liability> {
    const liability = await this.liabilityModel.findByPk(id);
    if (!liability) throw new NotFoundException('Liability not found');
    return liability;
  }

  async findAllByTaxReturnId(taxReturnId: number): Promise<Liability[]> {
    return this.liabilityModel.findAll({ where: { taxReturnId } });
  }

  async update(
    id: number,
    updateLiabilityDto: UpdateLiabilityDto,
  ): Promise<Liability> {
    const liability = await this.findOne(id);
    return liability.update(updateLiabilityDto);
  }

  async remove(id: number): Promise<boolean> {
    const liability = await this.findOne(id);
    await liability.destroy();
    return true;
  }
}
