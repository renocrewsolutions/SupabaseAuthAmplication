/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ClientWhereUniqueInput } from "../../client/base/ClientWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ClientUpdateManyWithoutFreelancersInput {
  @Field(() => [ClientWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ClientWhereUniqueInput],
  })
  connect?: Array<ClientWhereUniqueInput>;

  @Field(() => [ClientWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ClientWhereUniqueInput],
  })
  disconnect?: Array<ClientWhereUniqueInput>;

  @Field(() => [ClientWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ClientWhereUniqueInput],
  })
  set?: Array<ClientWhereUniqueInput>;
}

export { ClientUpdateManyWithoutFreelancersInput as ClientUpdateManyWithoutFreelancersInput };
