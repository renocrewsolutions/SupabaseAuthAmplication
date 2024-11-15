import { Contract } from "../contract/Contract";
import { Freelancer } from "../freelancer/Freelancer";
import { Job } from "../job/Job";

export type Client = {
  budget: number | null;
  contracts?: Array<Contract>;
  createdAt: Date;
  email: string | null;
  freelancer?: Freelancer | null;
  freelancers?: Array<Freelancer>;
  id: string;
  jobs?: Array<Job>;
  name: string | null;
  updatedAt: Date;
};
