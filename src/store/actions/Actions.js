import * as actionTypes from './actionTypes';

export const LoginRequested = (username,password) => {
  return {
    type: actionTypes.LOG_IN_REQUEST,
    data: {
      username,
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

export const Logout = (data) => {
  return {
    type: actionTypes.LOG_OUT,
    data
  };
};