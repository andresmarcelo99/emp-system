import {
  GET_EMP,
  EDIT_EMP,
  ERROR,
  ADD_EMP,
  DELETE_EMP,
  EMPS_LOADING,
  SET_CURR,
} from "../actions/types";

const initialState = {
  employees: [],
  loading: false,
  alert: false,
  errorType: "",
  curr: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EMP:
      return {
        ...state,
        employees: action.payload,
        loading: false,
      };
    case DELETE_EMP:
      return {
        ...state,
        employees: state.employees.filter((emp) => emp._id !== action.payload),
      };
    case ADD_EMP:
      return {
        ...state,
        employees: [...state.employees, action.payload],
        alert: false,
      };

    case EDIT_EMP:
      return {
        ...state,
        employees: [...state.employees],
        alert: false,
      };

    case SET_CURR:
      return {
        ...state,
        curr: action.payload,
      };

    case EMPS_LOADING:
      return {
        ...state,
        loading: true,
      };

    case ERROR:
      return {
        ...state,
        errorType: action.payload,
        alert: true,
      };

    default:
      return state;
  }
}
