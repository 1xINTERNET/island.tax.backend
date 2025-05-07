import {
  Resolver,
  Query,
  ResolveField,
  Parent,
  Args,
  Mutation,
  Int,
} from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { TaxReturnService } from '../tax-return/tax-return.service';
import { UserType } from './dto/user.type';

@Resolver(() => UserType)
export class UserResolver {
  constructor(
    private readonly usersService: UsersService,
    private taxReturnService: TaxReturnService,
  ) {}

  @Query(() => [UserType])
  async users() {
    const users = await this.usersService.findAll();
    return users.map((user) => user.get({ plain: true }));
  }

  @Query(() => UserType)
  async user(@Args('id') id: number) {
    const user = await this.usersService.findOne(id);
    return user.get({ plain: true });
  }

  @Mutation(() => UserType)
  async createUser(@Args('user') user: CreateUserInput) {
    const newUser = await this.usersService.create(user);
    return newUser.get({ plain: true });
  }

  @Mutation(() => UserType)
  async updateUser(@Args('user') user: UpdateUserInput) {
    const updated = await this.usersService.update(user.id, user);
    return updated.get ? updated.get({ plain: true }) : updated;
  }

  @Mutation(() => Boolean)
  async deleteUser(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<boolean> {
    return await this.usersService.remove(id);
  }

  @ResolveField()
  async taxReturns(@Parent() user: UserType) {
    const taxReturns = await this.taxReturnService.findAllByUser(user.id);
    return taxReturns.map((taxReturn) => taxReturn.get({ plain: true }));
  }
}
