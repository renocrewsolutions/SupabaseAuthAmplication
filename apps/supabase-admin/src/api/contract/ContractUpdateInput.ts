import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { FreelancerWhereUniqueInput } from "../freelancer/FreelancerWhereUniqueInput";
import { PaymentUpdateManyWithoutContractsInput } from "./PaymentUpdateManyWithoutContractsInput";

export type ContractUpdateInput = {
  charges?: number | null;
  client?: ClientWhereUniqueInput | null;
  endDate?: Date | null;
  freelancer?: FreelancerWhereUniqueInput | null;
  payments?: PaymentUpdateManyWithoutContractsInput;
  startDate?: Date | null;
};
