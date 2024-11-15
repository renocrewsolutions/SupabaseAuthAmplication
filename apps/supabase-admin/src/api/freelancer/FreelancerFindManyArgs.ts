import { FreelancerWhereInput } from "./FreelancerWhereInput";
import { FreelancerOrderByInput } from "./FreelancerOrderByInput";

export type FreelancerFindManyArgs = {
  where?: FreelancerWhereInput;
  orderBy?: Array<FreelancerOrderByInput>;
  skip?: number;
  take?: number;
};
