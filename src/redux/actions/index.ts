// Coloque aqui suas actions
export const ADD_USER = 'ADD_USER';

export const addLoginAction = (login: string) => {
  return {
    type: 'ADD_USER',
    payload: login,
  };
};
