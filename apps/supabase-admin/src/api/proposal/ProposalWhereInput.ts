import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FreelancerWhereUniqueInput } from "../freelancer/FreelancerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ProposalWhereInput = {
  coverLetter?: StringNullableFilter;
  freelancer?: FreelancerWhereUniqueInput;
  id?: StringFilter;
  job?: JobWhereUniqueInput;
  rate?: FloatNullableFilter;
};
