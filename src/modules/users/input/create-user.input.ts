import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class createUseInputDto {
  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field()
  age: number;
}
