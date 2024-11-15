import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProposalListRelationFilter } from "../proposal/ProposalListRelationFilter";

export type JobWhereInput = {
  budget?: FloatNullableFilter;
  client?: ClientWhereUniqueInput;
  deadline?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  proposals?: ProposalListRelationFilter;
  title?: StringNullableFilter;
};
