import { UsePaginationState, UsePaginationInstanceProps, HeaderGroup } from "react-table";
import { ITableProps } from "./ITable";

export interface IRegister {
  id?: number;
  name: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  role: string;
  classRoom: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginStudentInfo {
  data: {
    token: string;
    user: {
      id: number;
      name: string;
      createdAt: string;
      classRoom: string;
      picture?: string | null;
      email: string;
      lastName: string;
      password: string;
      role: string;
      updatedAt: string;
      username: string;
    };
  };
}

export interface ILoginStudentPersonalInfo {
  id: number;
  name: string;
  createdAt: string;
  classRoom: string;
  picture?: string | null;
  email: string;
  lastName: string;
  password: string;
  role: string;
  updatedAt: string;
  username: string;
}


export type StudentBasicInfo = Pick<ILoginStudentPersonalInfo, 'name' | 'username' | 'classRoom' | 'createdAt'>
export type IUpdateStudent = Partial<ILoginStudentPersonalInfo>;

export type IDeleteStudent = Pick<ILoginStudentPersonalInfo, 'username'>;

export type IStudentInfo = Partial<ILoginStudentInfo>;

export interface IStudentInfoUpdate extends IStudentInfo, UsePaginationState<IStudentInfo>, UsePaginationInstanceProps<IStudentInfo> {
  headerGroups?: HeaderGroup<IStudentInfo>[];
  getTableBodyProps: (props?: ITableProps) => ITableProps;
  prepareRow: (...args: unknown[]) => void;
}