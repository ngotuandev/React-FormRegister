import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { Button } from "../Component/Button";
import { H2 } from "../Component/Heading";
import { Input, Label } from "../Component/Input";
import {
  handleChange,
  registerUser,
  updateUser,
} from "../redux/actions/form.actions";

class FormRegister extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (target) => {
    let name = target.name;
    let value = target.value;
    this.props.dispatch(handleChange(name, value));
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    let { dispatch, profileInput, disabledAcc } = this.props;
    return (
      <div className="mt-5">
        <H2>Form Register</H2>
        <form onSubmit={this.handleSubmit}>
          <div className="row px-4">
            <div className="col-6">
              <Label>Account</Label>
              {disabledAcc ? (
                <Input
                  name="acc"
                  value={profileInput.values.acc}
                  onChange={(e) => {
                    this.handleChange(e.target);
                  }}
                ></Input>
              ) : (
                <Input
                  disabled
                  name="acc"
                  value={profileInput.values.acc}
                  onChange={(e) => {
                    this.handleChange(e.target);
                  }}
                ></Input>
              )}
              <Label style={{ margin: "0", color: "red" }}>
                {profileInput.errors.acc}
              </Label>
            </div>
            <div className="col-6">
              <Label>Full name</Label>
              <Input
                name="name"
                value={profileInput.values.name}
                onChange={(e) => {
                  this.handleChange(e.target);
                }}
              ></Input>
              <Label style={{ margin: "0", color: "red" }}>
                {profileInput.errors.name}
              </Label>
            </div>
          </div>
          <div className="row px-4">
            <div className="col-6">
              <Label>Password</Label>
              <Input
                name="password"
                value={profileInput.values.password}
                onChange={(e) => {
                  this.handleChange(e.target);
                }}
              ></Input>
              <Label style={{ margin: "0", color: "red" }}>
                {profileInput.errors.password}
              </Label>
            </div>
            <div className="col-6">
              <Label>Phone number</Label>
              <Input
                name="phone"
                value={profileInput.values.phone}
                onChange={(e) => {
                  this.handleChange(e.target);
                }}
              ></Input>
              <Label style={{ margin: "0", color: "red" }}>
                {profileInput.errors.phone}
              </Label>
            </div>
          </div>
          <div className="row px-4">
            <div className="col-6">
              <Label>Email</Label>
              <Input
                name="email"
                value={profileInput.values.email}
                onChange={(e) => {
                  this.handleChange(e.target);
                }}
              ></Input>
              <Label style={{ margin: "0", color: "red" }}>
                {profileInput.errors.email}
              </Label>
            </div>
            <div className="col-6">
              <Label>Customer type</Label>
              <select
                name="type"
                value={profileInput.values.type}
                onChange={(e) => {
                  this.handleChange(e.target);
                }}
                style={{
                  width: "100%",
                  padding: "3px 0",
                  outlineColor: "blue",
                  textAlign: "center",
                }}
                className="form-select"
                id="inputGroupSelect01"
              >
                <option value=" ">Please select</option>
                <option value="1">Customer</option>
                <option value="2">Salesman</option>
              </select>
              <Label style={{ margin: "0", color: "red" }}>
                {profileInput.errors.type}
              </Label>
            </div>
          </div>
          <div className="mt-3">
            {profileInput.valid && disabledAcc ? (
              <Button
                type="submit"
                onClick={() => {
                  dispatch(registerUser(profileInput.values));
                }}
                style={{ outlineColor: "#2aa448" }}
                className="mr-1"
              >
                Register
              </Button>
            ) : (
              <Button
                disabled
                type="submit"
                style={{ outlineColor: "#2aa448" }}
                className="mr-1"
              >
                Register
              </Button>
            )}
            {!disabledAcc && profileInput.valid ? (
              <Button
                onClick={() => {
                  dispatch(updateUser(profileInput.values));
                }}
                type="submit"
                style={{
                  backgroundColor: "#037AFB",
                  border: "#037AFB",
                  outlineColor: "#037AFB",
                }}
                className="ml-1"
              >
                Update
              </Button>
            ) : (
              <Button
                disabled
                type="submit"
                style={{
                  backgroundColor: "#037AFB",
                  border: "#037AFB",
                  outlineColor: "#037AFB",
                }}
                className="ml-1"
              >
                Update
              </Button>
            )}
          </div>
        </form>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.FormReducer.profile,
    profileInput: state.FormReducer.profileInput,
    disabledAcc: state.FormReducer.disabledAcc,
  };
};

export default connect(mapStateToProps, null)(FormRegister);
