import { Resolver, Query, Args, Mutation, Int } from '@nestjs/graphql';
import { AssetService } from './asset.service';
import { AssetType } from './dto/asset.type';
import { CreateAssetInput } from './dto/create-asset.input';
import { UpdateAssetInput } from './dto/update-asset.input';

@Resolver(() => AssetType)
export class AssetResolver {
  constructor(private readonly assetService: AssetService) {}

  @Query(() => [AssetType])
  async assets() {
    return await this.assetService.findAll();
  }

  @Query(() => AssetType)
  async asset(@Args('id') id: number) {
    return await this.assetService.findOne(id);
  }

  @Mutation(() => AssetType)
  async createAsset(@Args('asset') asset: CreateAssetInput) {
    const a = await this.assetService.create(asset);
    return a.get({ plain: true });
  }

  @Mutation(() => AssetType)
  async updateAsset(@Args('asset') asset: UpdateAssetInput) {
    const a = await this.assetService.update(asset.id, asset);
    return a.get ? a.get({ plain: true }) : a;
  }

  @Mutation(() => Boolean)
  async deleteAsset(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<boolean> {
    return await this.assetService.remove(id);
  }
}
