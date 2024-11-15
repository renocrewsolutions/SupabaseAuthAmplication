import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ProposalUpdateManyWithoutJobsInput } from "./ProposalUpdateManyWithoutJobsInput";

export type JobUpdateInput = {
  budget?: number | null;
  client?: ClientWhereUniqueInput | null;
  deadline?: Date | null;
  description?: string | null;
  proposals?: ProposalUpdateManyWithoutJobsInput;
  title?: string | null;
};
