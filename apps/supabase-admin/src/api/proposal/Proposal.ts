import { Freelancer } from "../freelancer/Freelancer";
import { Job } from "../job/Job";

export type Proposal = {
  coverLetter: string | null;
  createdAt: Date;
  freelancer?: Freelancer | null;
  id: string;
  job?: Job | null;
  rate: number | null;
  updatedAt: Date;
};
