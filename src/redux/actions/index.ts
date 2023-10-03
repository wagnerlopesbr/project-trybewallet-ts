// Coloque aqui suas actions
import { Dispatch, Expense } from '../../types';

export const ADD_USER = 'ADD_USER';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const REQUEST_START = 'REQUEST_START';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAILED = 'REQUEST_FAILED';

export const addLoginAction = (email: string) => {
  return {
    type: ADD_USER,
    payload: email,
  };
};

export const addExpenseAction = (expense: Expense) => {
  return {
    type: ADD_EXPENSE,
    payload: expense,
  };
};

export const removeExpenseAction = (itemID: number) => {
  return {
    type: REMOVE_EXPENSE,
    payload: itemID,
  };
};

const requestStart = () => {
  return { type: REQUEST_START };
};

const requestSuccess = (currencies: string[]) => {
  return {
    type: REQUEST_SUCCESS,
    payload: currencies,
  };
};

const requestFailed = (error: string) => {
  return {
    type: REQUEST_FAILED,
    payload: error,
  };
};

export const fetchCurrencies = () => {
  return async (dispatch: Dispatch) => {
    dispatch(requestStart());
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      const currencies = Object.keys(data).filter((curr) => curr !== 'USDT');
      dispatch(requestSuccess(currencies));
    } catch (error: any) {
      dispatch(requestFailed(error.message));
    }
  };
};
