import { SortOrder } from "../../util/SortOrder";

export type ProposalOrderByInput = {
  coverLetter?: SortOrder;
  createdAt?: SortOrder;
  freelancerId?: SortOrder;
  id?: SortOrder;
  jobId?: SortOrder;
  rate?: SortOrder;
  updatedAt?: SortOrder;
};
