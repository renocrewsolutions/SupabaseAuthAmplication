import { Client } from "../client/Client";
import { Freelancer } from "../freelancer/Freelancer";
import { Payment } from "../payment/Payment";

export type Contract = {
  charges: number | null;
  client?: Client | null;
  createdAt: Date;
  endDate: Date | null;
  freelancer?: Freelancer | null;
  id: string;
  payments?: Array<Payment>;
  startDate: Date | null;
  updatedAt: Date;
};
