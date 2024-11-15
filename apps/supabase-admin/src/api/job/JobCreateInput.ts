import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ProposalCreateNestedManyWithoutJobsInput } from "./ProposalCreateNestedManyWithoutJobsInput";

export type JobCreateInput = {
  budget?: number | null;
  client?: ClientWhereUniqueInput | null;
  deadline?: Date | null;
  description?: string | null;
  proposals?: ProposalCreateNestedManyWithoutJobsInput;
  title?: string | null;
};
