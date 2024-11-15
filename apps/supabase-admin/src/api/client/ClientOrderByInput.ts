import { SortOrder } from "../../util/SortOrder";

export type ClientOrderByInput = {
  budget?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  freelancerId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
