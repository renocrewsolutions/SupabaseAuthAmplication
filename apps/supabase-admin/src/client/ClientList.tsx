import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { FREELANCER_TITLE_FIELD } from "../freelancer/FreelancerTitle";

export const ClientList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Clients"} perPage={50} pagination={<Pagination />}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
