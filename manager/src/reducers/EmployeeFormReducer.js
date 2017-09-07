import {
  EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      //without ES6
      //const newState = {};
      //newState[action.payload.prop] = action.payload.value;
      //with ES6 (key interpretation)
      return { ...state, [action.payload.prop]: action.payload.value};
    default:
      return state;
  }
};
