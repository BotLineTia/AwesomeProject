import * as Actions from '../actions/actionTypes';

const initialState = {
  authen: true,
};

export const logoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOG_OUT:
      {
        console.log('action : LOG OUT');
        return {
          authen: false
        };
      }
    default:
      return state;
  }
};
