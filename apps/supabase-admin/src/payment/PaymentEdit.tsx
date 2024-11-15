import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { ContractTitle } from "../contract/ContractTitle";

export const PaymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <ReferenceInput
          source="contract.id"
          reference="Contract"
          label="Contract"
        >
          <SelectInput optionText={ContractTitle} />
        </ReferenceInput>
        <DateTimeInput label="date" source="date" />
      </SimpleForm>
    </Edit>
  );
};
