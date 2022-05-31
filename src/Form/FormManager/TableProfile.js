import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "../Component/Button";
import { H2 } from "../Component/Heading";
import { Table, Tbody, Td, Th, Thead, Tr } from "../Component/Table";
import { deleteUser, editUser } from "../redux/actions/form.actions";

class TableProfile extends Component {
  renderProfile = () => {
    return this.props.profile.map((item) => {
      return (
        <Tr key={item.id}>
          <Td>{item.id}</Td>
          <Td>{item.acc}</Td>
          <Td>{item.name}</Td>
          <Td>{item.password}</Td>
          <Td>{item.email}</Td>
          <Td>{item.phone}</Td>
          <Td>{item.type == 1 ? "Customer" : "Salesman"}</Td>
          <Td>
            <Button
              onClick={() => {
                this.props.dispatch(editUser(item));
              }}
              style={{
                backgroundColor: "#037AFB",
                border: "#037AFB",
                outlineColor: "#037AFB",
              }}
              className="mr-1"
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                this.props.dispatch(deleteUser(item.id));
              }}
              style={{
                backgroundColor: "#dc3545",
                border: "#dc3545",
                outlineColor: "#dc3545",
              }}
              className="ml-1"
            >
              Delete
            </Button>
          </Td>
        </Tr>
      );
    });
  };

  render() {
    return (
      <div className="mt-5">
        <H2>Table Profile</H2>
        <Table>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Account</Th>
              <Th>Full name</Th>
              <Th>Pass word</Th>
              <Th>Email</Th>
              <Th>Phone number</Th>
              <Th>Customer type</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>{this.renderProfile()}</Tbody>
        </Table>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.FormReducer.profile,
    profileInput: state.FormReducer.profileInput,
  };
};

export default connect(mapStateToProps, null)(TableProfile);
