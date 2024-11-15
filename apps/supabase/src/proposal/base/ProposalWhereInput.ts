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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { FreelancerWhereUniqueInput } from "../../freelancer/base/FreelancerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JobWhereUniqueInput } from "../../job/base/JobWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

@InputType()
class ProposalWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  coverLetter?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => FreelancerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FreelancerWhereUniqueInput)
  @IsOptional()
  @Field(() => FreelancerWhereUniqueInput, {
    nullable: true,
  })
  freelancer?: FreelancerWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => JobWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => JobWhereUniqueInput)
  @IsOptional()
  @Field(() => JobWhereUniqueInput, {
    nullable: true,
  })
  job?: JobWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  rate?: FloatNullableFilter;
}

export { ProposalWhereInput as ProposalWhereInput };