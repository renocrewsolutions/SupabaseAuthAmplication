/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FreelancerWhereInput } from "./FreelancerWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FreelancerListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FreelancerWhereInput,
  })
  @ValidateNested()
  @Type(() => FreelancerWhereInput)
  @IsOptional()
  @Field(() => FreelancerWhereInput, {
    nullable: true,
  })
  every?: FreelancerWhereInput;

  @ApiProperty({
    required: false,
    type: () => FreelancerWhereInput,
  })
  @ValidateNested()
  @Type(() => FreelancerWhereInput)
  @IsOptional()
  @Field(() => FreelancerWhereInput, {
    nullable: true,
  })
  some?: FreelancerWhereInput;

  @ApiProperty({
    required: false,
    type: () => FreelancerWhereInput,
  })
  @ValidateNested()
  @Type(() => FreelancerWhereInput)
  @IsOptional()
  @Field(() => FreelancerWhereInput, {
    nullable: true,
  })
  none?: FreelancerWhereInput;
}
export { FreelancerListRelationFilter as FreelancerListRelationFilter };