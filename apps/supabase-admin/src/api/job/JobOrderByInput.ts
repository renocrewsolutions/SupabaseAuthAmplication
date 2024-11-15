import { SortOrder } from "../../util/SortOrder";

export type JobOrderByInput = {
  budget?: SortOrder;
  clientId?: SortOrder;
  createdAt?: SortOrder;
  deadline?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
