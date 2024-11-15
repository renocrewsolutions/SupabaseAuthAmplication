import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ContractWhereUniqueInput } from "../contract/ContractWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  contract?: ContractWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
};
