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

import { CONTRACT_TITLE_FIELD } from "./ContractTitle";
import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";
import { FREELANCER_TITLE_FIELD } from "../freelancer/FreelancerTitle";

export const ContractShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="charges" source="charges" />
        <ReferenceField label="Client" source="client.id" reference="Client">
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
        <ReferenceManyField
          reference="Payment"
          target="contractId"
          label="Payments"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="amount" source="amount" />
            <ReferenceField
              label="Contract"
              source="contract.id"
              reference="Contract"
            >
              <TextField source={CONTRACT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
