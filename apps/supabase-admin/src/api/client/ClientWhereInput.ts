import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ContractListRelationFilter } from "../contract/ContractListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FreelancerWhereUniqueInput } from "../freelancer/FreelancerWhereUniqueInput";
import { FreelancerListRelationFilter } from "../freelancer/FreelancerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobListRelationFilter } from "../job/JobListRelationFilter";

export type ClientWhereInput = {
  budget?: FloatNullableFilter;
  contracts?: ContractListRelationFilter;
  email?: StringNullableFilter;
  freelancer?: FreelancerWhereUniqueInput;
  freelancers?: FreelancerListRelationFilter;
  id?: StringFilter;
  jobs?: JobListRelationFilter;
  name?: StringNullableFilter;
};
