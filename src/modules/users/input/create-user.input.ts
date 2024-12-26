import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class createUserInputDto {
  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field()
  age: number;
}
