export type ResetResponse = {
  token: string;
};

export type ResetPasswordPayload = {
  token?: string;
  password: string;
};
