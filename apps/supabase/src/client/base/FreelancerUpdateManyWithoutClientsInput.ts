/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { FreelancerWhereUniqueInput } from "../../freelancer/base/FreelancerWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class FreelancerUpdateManyWithoutClientsInput {
  @Field(() => [FreelancerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FreelancerWhereUniqueInput],
  })
  connect?: Array<FreelancerWhereUniqueInput>;

  @Field(() => [FreelancerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FreelancerWhereUniqueInput],
  })
  disconnect?: Array<FreelancerWhereUniqueInput>;

  @Field(() => [FreelancerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FreelancerWhereUniqueInput],
  })
  set?: Array<FreelancerWhereUniqueInput>;
}

export { FreelancerUpdateManyWithoutClientsInput as FreelancerUpdateManyWithoutClientsInput };
