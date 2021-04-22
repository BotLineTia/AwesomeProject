import * as Actions from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  authen: false,
  token: null
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOG_IN_REQUEST:
      {
        console.log('action : LOG IN REQUEST');
        return {
          isloading: true,
          authen: false,
          token: null
        }
      }
    case Actions.LOG_IN_SUCCESS:
      {
        console.log('action : LOG IN SUCCESS');
        return {
          isLoading: false,
          authen: true,
          token: action.token,
        };
      }
    case Actions.LOG_IN_FAILURE:
      {
        console.log('action : LOG IN FAILURE');
        return initialState;
      }
    default:
      return state;
  }
};
