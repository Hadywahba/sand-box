export type LoginResponse = {
  token: string;
  user: {
    email: string;
    _id: string;
  };
};
