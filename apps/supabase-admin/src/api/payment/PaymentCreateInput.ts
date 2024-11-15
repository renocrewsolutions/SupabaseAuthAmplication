import { ContractWhereUniqueInput } from "../contract/ContractWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  contract?: ContractWhereUniqueInput | null;
  date?: Date | null;
};
