import axios from "axios";
import {
  GET_EMP,
  EDIT_EMP,
  ADD_EMP,
  DELETE_EMP,
  EMPS_LOADING,
  SET_CURR,
  ERROR,
} from "./types";

export const getEmployees = () => (dispatch) => {
  dispatch(setEmpsLoading());
  axios.get("/api/emps").then((res) =>
    dispatch({
      type: GET_EMP,
      payload: res.data,
    })
  );
};

export const addEmployee = (emp) => (dispatch) => {
  axios
    .post("/api/emps", emp)
    .then((res) =>
      dispatch({
        type: ADD_EMP,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ERROR,
        payload: err.response.data,
      })
    );
};

export const editEmployee = (editEmp, curr) => (dispatch) => {
  axios
    .post(`api/emps/edit/${curr}`, editEmp)
    .then((res) =>
      dispatch({
        type: EDIT_EMP,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ERROR,
        payload: err.response.data,
      })
    );
};

export const setCurr = (email) => {
  return {
    type: SET_CURR,
    payload: email,
  };
};

export const setEmpsLoading = () => {
  return {
    type: EMPS_LOADING,
  };
};

export const delEmployee = (_id) => (dispatch) => {
  axios.delete(`/api/emps/${_id}`).then((res) =>
    dispatch({
      type: DELETE_EMP,
      payload: _id,
    })
  );
};
