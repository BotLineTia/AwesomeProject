import * as actionTypes from './actionTypes';

export const LoginRequested = (email,password) => {
  return {
    type: actionTypes.LOG_IN_REQUEST,
    data: {
      email,
      password,
    },
  };
};

export const LoginSuccessed = (data) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    data,
  };
};

export const LoginFailed = (data) => {
  return {
    type: actionTypes.LOG_IN_FAILURE,
    data,
  };
};