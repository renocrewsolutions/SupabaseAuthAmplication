import { Proposal as TProposal } from "../api/proposal/Proposal";

export const PROPOSAL_TITLE_FIELD = "id";

export const ProposalTitle = (record: TProposal): string => {
  return record.id?.toString() || String(record.id);
};
