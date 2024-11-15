import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { FreelancerWhereUniqueInput } from "../freelancer/FreelancerWhereUniqueInput";
import { PaymentCreateNestedManyWithoutContractsInput } from "./PaymentCreateNestedManyWithoutContractsInput";

export type ContractCreateInput = {
  charges?: number | null;
  client?: ClientWhereUniqueInput | null;
  endDate?: Date | null;
  freelancer?: FreelancerWhereUniqueInput | null;
  payments?: PaymentCreateNestedManyWithoutContractsInput;
  startDate?: Date | null;
};
