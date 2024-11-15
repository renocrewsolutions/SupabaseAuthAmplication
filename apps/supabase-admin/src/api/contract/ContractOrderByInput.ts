import { SortOrder } from "../../util/SortOrder";

export type ContractOrderByInput = {
  charges?: SortOrder;
  clientId?: SortOrder;
  createdAt?: SortOrder;
  endDate?: SortOrder;
  freelancerId?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
