import { Freelancer as TFreelancer } from "../api/freelancer/Freelancer";

export const FREELANCER_TITLE_FIELD = "name";

export const FreelancerTitle = (record: TFreelancer): string => {
  return record.name?.toString() || String(record.id);
};
