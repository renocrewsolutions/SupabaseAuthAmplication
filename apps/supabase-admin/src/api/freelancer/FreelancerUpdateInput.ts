import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ClientUpdateManyWithoutFreelancersInput } from "./ClientUpdateManyWithoutFreelancersInput";
import { ContractUpdateManyWithoutFreelancersInput } from "./ContractUpdateManyWithoutFreelancersInput";
import { ProposalUpdateManyWithoutFreelancersInput } from "./ProposalUpdateManyWithoutFreelancersInput";

export type FreelancerUpdateInput = {
  client?: ClientWhereUniqueInput | null;
  clients?: ClientUpdateManyWithoutFreelancersInput;
  contracts?: ContractUpdateManyWithoutFreelancersInput;
  email?: string | null;
  name?: string | null;
  proposals?: ProposalUpdateManyWithoutFreelancersInput;
  skills?: string | null;
};
