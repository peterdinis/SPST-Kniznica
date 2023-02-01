export interface IUser {
  id: number;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  externalId: number;
}

export type IRegisterUser = Pick<
  IUser,
  | 'email'
  | 'username'
  | 'password'
  | 'firstname'
  | 'lastname'
  | 'role'
  | "externalId"
>;

export interface ITokenUser {
  user: IUser,
  token: string
}

export type ILoginUser = Pick<IUser, 'username' | 'password'>;

export type IUpdateUser = Partial<IUser>;
