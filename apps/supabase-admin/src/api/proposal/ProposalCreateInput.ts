import { FreelancerWhereUniqueInput } from "../freelancer/FreelancerWhereUniqueInput";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type ProposalCreateInput = {
  coverLetter?: string | null;
  freelancer?: FreelancerWhereUniqueInput | null;
  job?: JobWhereUniqueInput | null;
  rate?: number | null;
};
