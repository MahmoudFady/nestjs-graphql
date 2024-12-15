import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from '../user.service';
import { createUseInputDto } from '../input/create-user.input';
import { User } from '../object-types/user.object-type';
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
    @Args('createUserInput', { type: () => createUseInputDto })
    createUserInput: createUseInputDto,
  ) {
    return this.userService.create(createUserInput);
  }
}
