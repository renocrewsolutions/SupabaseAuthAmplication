import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { FREELANCER_TITLE_FIELD } from "../freelancer/FreelancerTitle";
import { JOB_TITLE_FIELD } from "../job/JobTitle";

export const ProposalShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="coverLetter" source="coverLetter" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Freelancer"
          source="freelancer.id"
          reference="Freelancer"
        >
          <TextField source={FREELANCER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField label="Job" source="job.id" reference="Job">
          <TextField source={JOB_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="rate" source="rate" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
