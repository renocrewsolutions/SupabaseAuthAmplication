import { Client } from "../client/Client";
import { Proposal } from "../proposal/Proposal";

export type Job = {
  budget: number | null;
  client?: Client | null;
  createdAt: Date;
  deadline: Date | null;
  description: string | null;
  id: string;
  proposals?: Array<Proposal>;
  title: string | null;
  updatedAt: Date;
};
