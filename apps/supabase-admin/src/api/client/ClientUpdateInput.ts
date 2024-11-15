import { ContractUpdateManyWithoutClientsInput } from "./ContractUpdateManyWithoutClientsInput";
import { FreelancerWhereUniqueInput } from "../freelancer/FreelancerWhereUniqueInput";
import { FreelancerUpdateManyWithoutClientsInput } from "./FreelancerUpdateManyWithoutClientsInput";
import { JobUpdateManyWithoutClientsInput } from "./JobUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  budget?: number | null;
  contracts?: ContractUpdateManyWithoutClientsInput;
  email?: string | null;
  freelancer?: FreelancerWhereUniqueInput | null;
  freelancers?: FreelancerUpdateManyWithoutClientsInput;
  jobs?: JobUpdateManyWithoutClientsInput;
  name?: string | null;
};
