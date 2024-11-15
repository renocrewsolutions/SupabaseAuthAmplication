import { Contract } from "../contract/Contract";

export type Payment = {
  amount: number | null;
  contract?: Contract | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  updatedAt: Date;
};
