import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  receiver?: SortOrder;
  sender?: SortOrder;
  sentAt?: SortOrder;
  updatedAt?: SortOrder;
};
