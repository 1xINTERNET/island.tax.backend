import { Sequelize } from 'sequelize-typescript';
import { User } from './user.model';
import { TaxReturn } from '../tax-return/tax-return.model';
import { Income } from '../tax-return/income.model';
import { Asset } from '../tax-return/asset.model';
import { Liability } from '../tax-return/liability.model';

describe('User Model', () => {
  let sequelize: Sequelize;

  beforeAll(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false,
    });
    sequelize.addModels([User, TaxReturn, Income, Asset, Liability]);
    await sequelize.sync();
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it('should be defined', () => {
    expect(User).toBeDefined();
  });
});
