import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FreelancerWhereUniqueInput } from "../freelancer/FreelancerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type ContractWhereInput = {
  charges?: FloatNullableFilter;
  client?: ClientWhereUniqueInput;
  endDate?: DateTimeNullableFilter;
  freelancer?: FreelancerWhereUniqueInput;
  id?: StringFilter;
  payments?: PaymentListRelationFilter;
  startDate?: DateTimeNullableFilter;
};
