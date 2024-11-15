import { Client } from "../client/Client";
import { Contract } from "../contract/Contract";
import { Proposal } from "../proposal/Proposal";

export type Freelancer = {
  client?: Client | null;
  clients?: Array<Client>;
  contracts?: Array<Contract>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  proposals?: Array<Proposal>;
  skills: string | null;
  updatedAt: Date;
};
