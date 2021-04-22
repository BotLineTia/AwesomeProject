import * as Actions from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  authen: false
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOG_IN_REQUEST:
      {
        //console.log('action : LOG IN REQUEST');
        return {
          isLoading: true,
          authen: false
        }
      }
    case Actions.LOG_IN_SUCCESS:
      {
        //console.log('action : LOG IN SUCCESS');
        return {
          isLoading: false,
          authen: true
        };
      }
    case Actions.LOG_IN_FAILURE:
      {
        //console.log('action : LOG IN FAILURE');
        return initialState;
      }
    case Actions.LOG_OUT:
      {
        //console.log('action : LOG OUT');
        return initialState;
      }
    default:
      return state;
  }
};
