import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { FREELANCER_TITLE_FIELD } from "../freelancer/FreelancerTitle";
import { JOB_TITLE_FIELD } from "./JobTitle";
import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";

export const JobShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="budget" source="budget" />
        <ReferenceField label="Client" source="client.id" reference="Client">
          <TextField source={CLIENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="deadline" source="deadline" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Proposal"
          target="jobId"
          label="Proposals"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
