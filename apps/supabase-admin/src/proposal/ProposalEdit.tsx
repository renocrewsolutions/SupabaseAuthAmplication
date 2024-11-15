import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { FreelancerTitle } from "../freelancer/FreelancerTitle";
import { JobTitle } from "../job/JobTitle";

export const ProposalEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
