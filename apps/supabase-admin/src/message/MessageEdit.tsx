import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="receiver" source="receiver" />
        <TextInput label="sender" source="sender" />
        <DateTimeInput label="sentAt" source="sentAt" />
      </SimpleForm>
    </Edit>
  );
};
