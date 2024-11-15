import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ClientCreateNestedManyWithoutFreelancersInput } from "./ClientCreateNestedManyWithoutFreelancersInput";
import { ContractCreateNestedManyWithoutFreelancersInput } from "./ContractCreateNestedManyWithoutFreelancersInput";
import { ProposalCreateNestedManyWithoutFreelancersInput } from "./ProposalCreateNestedManyWithoutFreelancersInput";

export type FreelancerCreateInput = {
  client?: ClientWhereUniqueInput | null;
  clients?: ClientCreateNestedManyWithoutFreelancersInput;
  contracts?: ContractCreateNestedManyWithoutFreelancersInput;
  email?: string | null;
  name?: string | null;
  proposals?: ProposalCreateNestedManyWithoutFreelancersInput;
  skills?: string | null;
};
