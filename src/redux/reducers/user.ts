// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ActionType } from '../../types'

const INITIAL_STATE = {
    email: '',
  };
  
  const userReducer = (state = INITIAL_STATE, action: ActionType) => {
    switch (action.type) {
      case 'ADD_USER':
        return {
          ...state,
          email: action.payload,
        };
      default:
        return state;
    }
  };
  
 export default userReducer;
