import {
  DELETE_USER,
  EDIT_USER,
  HANDLE_CHANGE,
  REGISTER_USER,
  UPDATE_USER,
} from "../contants/form.contants";

let initialState = {
  profile: [],
  profileInput: {
    values: {
      name: "",
      acc: "",
      password: "",
      phone: "",
      email: "",
      type: "",
    },
    errors: {
      name: "",
      acc: "",
      password: "",
      phone: "",
      email: "",
      type: "",
    },
    valid: false,
  },
  disabledAcc: true,
};

export const FormReducer = (
  state = initialState,
  { type, payload, name, value }
) => {
  switch (type) {
    case REGISTER_USER: {
      let profileState = { ...payload, id: state.profile.length + 1 };
      let profileNew = [...state.profile];
      let index = profileNew.findIndex((item) => item.acc === payload.acc);
      if (index !== -1) {
        return { ...state };
      }
      profileNew.push(profileState);

      state.profileInput.values = {
        name: "",
        acc: "",
        password: "",
        phone: "",
        email: "",
        type: "",
      };
      state.profile = profileNew;
      state.profileInput.valid = false;
      return { ...state };
    }

    case HANDLE_CHANGE: {
      let accRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;
      let nameRegex = /^[a-z ,.'-]+$/i;
      let phoneRegex = /^[0-9\-\+]{9,15}$/;
      let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      let errors = { ...state.profileInput.errors };
      let valid = { ...state.profileInput.valid };
      let profileClone = [...state.profile];
      let profileNew = { ...state.profileInput.values, [name]: value };

      if (value.trim() === "") {
        errors[name] = name + " is required ";
      } else if (
        (name === "acc" && !accRegex.test(value)) ||
        (name === "name" && !nameRegex.test(value)) ||
        (name === "phone" && !phoneRegex.test(value)) ||
        (name === "password" && !passwordRegex.test(value)) ||
        (name === "email" && !emailRegex.test(value))
      ) {
        errors[name] = name + " is invalid ";
      } else if (name === "acc") {
        let index = profileClone.findIndex((item) => item.acc === value);
        index !== -1
          ? (errors[name] = name + " is already exist ")
          : (errors[name] = "");
      } else {
        errors[name] = "";
      }

      state.profileInput = { errors, values: profileNew };

      for (let key in state.profileInput.errors) {
        if (
          state.profileInput.errors[key] !== "" ||
          state.profileInput.values[key] === ""
        ) {
          valid = false;
        } else if (state.profileInput.values[key] === "") {
          valid = false;
        } else if (state.profileInput.errors[key] !== "") {
          valid = false;
        }
      }
      state.profileInput.valid = valid;
      return { ...state };
    }

    case DELETE_USER: {
      return {
        ...state,
        profile: state.profile.filter((item) => item.id !== payload),
      };
    }

    case EDIT_USER: {
      let profileNew = { ...state.profileInput, values: payload };
      state.profileInput = profileNew;
      state.disabledAcc = false;
      return { ...state };
    }

    case UPDATE_USER: {
      let profileNew = [...state.profile];
      let index = profileNew.findIndex((item) => item.id === payload.id);
      if (index !== -1) {
        profileNew[index] = payload;
      }
      state.profileInput.values = {
        name: "",
        acc: "",
        password: "",
        phone: "",
        email: "",
        type: "",
      };
      state.disabledAcc = true;
      state.profileInput.valid = false;
      return { ...state, profile: profileNew };
    }

    default:
      return { ...state };
  }
};
