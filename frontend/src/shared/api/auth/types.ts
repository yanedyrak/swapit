// auth/login

export type LoginRequest = {
  email: string;
  password: string;
};
export type LoginResponse = {
  token: TokenData;
};

// auth/register

export type RegisterRequest = {
  username: string;
  email: string;
  password: string;
};
export type RegisterResponse = {
  token: TokenData;
};

export type TokenData = string;
