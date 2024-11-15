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
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsNumber,
  Min,
  Max,
} from "class-validator";
import { FreelancerWhereUniqueInput } from "../../freelancer/base/FreelancerWhereUniqueInput";
import { Type } from "class-transformer";
import { JobWhereUniqueInput } from "../../job/base/JobWhereUniqueInput";

@InputType()
class ProposalUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  coverLetter?: string | null;

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
  freelancer?: FreelancerWhereUniqueInput | null;

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
  job?: JobWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  rate?: number | null;
}

export { ProposalUpdateInput as ProposalUpdateInput };
