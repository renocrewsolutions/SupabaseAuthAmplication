import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { FREELANCER_TITLE_FIELD } from "./FreelancerTitle";
import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";
import { JOB_TITLE_FIELD } from "../job/JobTitle";

export const FreelancerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Client" source="client.id" reference="Client">
          <TextField source={CLIENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="skills" source="skills" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Client"
          target="freelancerId"
          label="Clients"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="budget" source="budget" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="email" source="email" />
            <ReferenceField
              label="Freelancer"
              source="freelancer.id"
              reference="Freelancer"
            >
              <TextField source={FREELANCER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Contract"
          target="freelancerId"
          label="Contracts"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="charges" source="charges" />
            <ReferenceField
              label="Client"
              source="client.id"
              reference="Client"
            >
              <TextField source={CLIENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="endDate" source="endDate" />
            <ReferenceField
              label="Freelancer"
              source="freelancer.id"
              reference="Freelancer"
            >
              <TextField source={FREELANCER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="startDate" source="startDate" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Proposal"
          target="freelancerId"
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
