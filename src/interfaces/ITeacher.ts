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


/* export interface ILoginTeacherInfo {
  data: {
    token: string;
    user: {
      id: number;
      name: string;
      createdAt: string;
      classRoom: string;
      email: string;
      lastName: string;
      password: string;
      role: string;
      updatedAt: string;
      username: string;
    }
  }
} */