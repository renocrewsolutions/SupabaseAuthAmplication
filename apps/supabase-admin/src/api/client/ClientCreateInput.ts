import { ContractCreateNestedManyWithoutClientsInput } from "./ContractCreateNestedManyWithoutClientsInput";
import { FreelancerWhereUniqueInput } from "../freelancer/FreelancerWhereUniqueInput";
import { FreelancerCreateNestedManyWithoutClientsInput } from "./FreelancerCreateNestedManyWithoutClientsInput";
import { JobCreateNestedManyWithoutClientsInput } from "./JobCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  budget?: number | null;
  contracts?: ContractCreateNestedManyWithoutClientsInput;
  email?: string | null;
  freelancer?: FreelancerWhereUniqueInput | null;
  freelancers?: FreelancerCreateNestedManyWithoutClientsInput;
  jobs?: JobCreateNestedManyWithoutClientsInput;
  name?: string | null;
};
