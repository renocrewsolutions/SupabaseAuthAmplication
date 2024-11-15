import { ContractWhereUniqueInput } from "../contract/ContractWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  contract?: ContractWhereUniqueInput | null;
  date?: Date | null;
};
