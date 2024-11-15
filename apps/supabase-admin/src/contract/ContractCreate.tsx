import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ClientTitle } from "../client/ClientTitle";
import { FreelancerTitle } from "../freelancer/FreelancerTitle";
import { PaymentTitle } from "../payment/PaymentTitle";

export const ContractCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="charges" source="charges" />
        <ReferenceInput source="client.id" reference="Client" label="Client">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <DateTimeInput label="endDate" source="endDate" />
        <ReferenceInput
          source="freelancer.id"
          reference="Freelancer"
          label="Freelancer"
        >
          <SelectInput optionText={FreelancerTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="payments" reference="Payment">
          <SelectArrayInput
            optionText={PaymentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="startDate" source="startDate" />
      </SimpleForm>
    </Create>
  );
};
