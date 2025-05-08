import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { TaxReturn } from '../tax-return/tax-return.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Asset } from '../tax-return/asset.model';
import { Liability } from '../tax-return/liability.model';
import { Income } from '../tax-return/income.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { taxReturns, ...userProps } = createUserDto;

    const user = await this.userModel.create(
      {
        ...userProps,
        taxReturns: taxReturns || [],
      },
      {
        include: [
          {
            model: TaxReturn,
            include: [Asset, Liability, Income],
          },
        ],
      },
    );
    return user;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userModel.findByPk(id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async findByPhone(phone: string): Promise<User> {
    const user = await this.userModel.findOne({ where: { phone } });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    return user.update(updateUserDto);
  }

  async remove(id: number): Promise<boolean> {
    const user = await this.findOne(id);
    await user.destroy();
    return true;
  }
}
