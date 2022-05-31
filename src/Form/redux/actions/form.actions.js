import {
  DELETE_USER,
  EDIT_USER,
  HANDLE_CHANGE,
  REGISTER_USER,
  UPDATE_USER,
} from "../contants/form.contants";

export const registerUser = (payload) => ({
  type: REGISTER_USER,
  payload,
});

export const handleChange = (name, value) => ({
  type: HANDLE_CHANGE,
  name,
  value,
});

export const deleteUser = (payload) => ({
  type: DELETE_USER,
  payload,
});

export const editUser = (payload) => ({
  type: EDIT_USER,
  payload,
});

export const updateUser = (payload) => ({
  type: UPDATE_USER,
  payload,
});
