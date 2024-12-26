import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from '../user.service';
import { createUserInputDto } from '../input/create-user.input';
import { User } from '../object-types/user.object-type';
import { UpdateUserInputDto } from '../input/update-user.input';
@Injectable()
@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  async getUserById(@Args('id', { type: () => String }) id: string) {
    const user = this.userService.findById(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }
  @Query(() => [User])
  async filterByName(@Args('name', { type: () => String }) name: string) {
    return this.userService.filterByName(name);
  }

  @Mutation(() => User)
  async createUser(
    @Args('createUserInput', { type: () => createUserInputDto })
    createUserInput: createUserInputDto,
  ) {
    return this.userService.create(createUserInput);
  }

  @Mutation(() => User)
  async updateUser(
    @Args('id', { type: () => String }) id: string,
    @Args('updateUserInput', { type: () => UpdateUserInputDto })
    updateUserInput: UpdateUserInputDto,
  ) {
    return this.userService.updateById(id, updateUserInput);
  }
}
