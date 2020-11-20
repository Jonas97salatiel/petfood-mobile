import { CLICK_UPDATE_VALUE } from '../actions/actionsTypes';


const initialState = {
  userState: {
    auth: false,
    id: 1,
    token: '123123123'
    
  }
};


export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {...state, userState: action.userState
      };
    default:
      return state;
  }
};