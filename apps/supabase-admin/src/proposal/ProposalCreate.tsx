import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { FreelancerTitle } from "../freelancer/FreelancerTitle";
import { JobTitle } from "../job/JobTitle";

export const ProposalCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="coverLetter" multiline source="coverLetter" />
        <ReferenceInput
          source="freelancer.id"
          reference="Freelancer"
          label="Freelancer"
        >
          <SelectInput optionText={FreelancerTitle} />
        </ReferenceInput>
        <ReferenceInput source="job.id" reference="Job" label="Job">
          <SelectInput optionText={JobTitle} />
        </ReferenceInput>
        <NumberInput label="rate" source="rate" />
      </SimpleForm>
    </Create>
  );
};
