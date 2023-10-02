export type LoginType = {
  email: string;
  password: string;
};

export type ActionType = {
  type: string;
  payload: string;
};

export type GlobalState = {
  login: {
    email: string | null;
  }
};
