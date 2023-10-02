import { ADD_USER } from '../actions';

const INITIAL_STATE = {
  email: '',
};

type ActionType = {
  type: string;
  payload: string;
};

const user = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

export default user;
