import { Resolver, Query, Args, Mutation, Int } from '@nestjs/graphql';
import { LiabilityService } from './liability.service';
import { LiabilityType } from './dto/liability.type';
import { CreateLiabilityInput } from './dto/create-liability.input';
import { UpdateLiabilityInput } from './dto/update-liability.input';

@Resolver(() => LiabilityType)
export class LiabilityResolver {
  constructor(private readonly liabilityService: LiabilityService) {}

  @Query(() => [LiabilityType])
  async liabilities() {
    return await this.liabilityService.findAll();
  }

  @Query(() => LiabilityType)
  async liability(@Args('id') id: number) {
    return await this.liabilityService.findOne(id);
  }

  @Mutation(() => LiabilityType)
  async createLiability(@Args('liability') liability: CreateLiabilityInput) {
    const l = await this.liabilityService.create(liability);
    return l.get({ plain: true });
  }

  @Mutation(() => LiabilityType)
  async updateLiability(@Args('liability') liability: UpdateLiabilityInput) {
    const updated = await this.liabilityService.update(liability.id, liability);
    return updated.get ? updated.get({ plain: true }) : updated;
  }

  @Mutation(() => Boolean)
  async deleteLiability(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<boolean> {
    return await this.liabilityService.remove(id);
  }
}
