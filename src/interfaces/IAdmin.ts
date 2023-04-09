export interface IRegister {
  name: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  role: string;
}

export interface ILogin {
  email: string;
  password: string;
}
