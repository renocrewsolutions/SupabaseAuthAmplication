import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ContractTitle } from "../contract/ContractTitle";
import { FreelancerTitle } from "../freelancer/FreelancerTitle";
import { JobTitle } from "../job/JobTitle";

export const ClientCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="budget" source="budget" />
        <ReferenceArrayInput source="contracts" reference="Contract">
          <SelectArrayInput
            optionText={ContractTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="email" source="email" type="email" />
        <ReferenceInput
          source="freelancer.id"
          reference="Freelancer"
          label="Freelancer"
        >
          <SelectInput optionText={FreelancerTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="freelancers" reference="Freelancer">
          <SelectArrayInput
            optionText={FreelancerTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="jobs" reference="Job">
          <SelectArrayInput
            optionText={JobTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
