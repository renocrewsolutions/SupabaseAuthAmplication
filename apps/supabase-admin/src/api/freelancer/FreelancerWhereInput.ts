import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ClientListRelationFilter } from "../client/ClientListRelationFilter";
import { ContractListRelationFilter } from "../contract/ContractListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProposalListRelationFilter } from "../proposal/ProposalListRelationFilter";

export type FreelancerWhereInput = {
  client?: ClientWhereUniqueInput;
  clients?: ClientListRelationFilter;
  contracts?: ContractListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  proposals?: ProposalListRelationFilter;
  skills?: StringNullableFilter;
};
