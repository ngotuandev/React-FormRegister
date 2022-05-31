import React, { Component } from "react";
import { Container } from "../Component/Container";
import FormRegister from "./FormRegister";
import TableProfile from "./TableProfile";

export default class FormManager extends Component {
  render() {
    return (
      <Container>
        <FormRegister />
        <TableProfile />
      </Container>
    );
  }
}
