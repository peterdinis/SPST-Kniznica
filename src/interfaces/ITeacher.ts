import { UsePaginationState, UsePaginationInstanceProps, HeaderGroup } from "react-table";
import { ITableProps } from "./ITable";

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

export interface ILoginTeacherInfo {
  data: {
    token: string;
    user: {
      id: number;
      name: string;
      lastName: string;
      username: string;
      email: string;
      password: string;
      role: string;
      updatedAt: string;
      picture?: string | null;
      createdAt: string;
    };
  };
}

export interface ILoginTeacherPersonalInfo {
  id: number;
  name: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  role: string;
  updatedAt: string;
  picture?: string | null;
  createdAt: string;
}

export type TeacherBasicInfo = Pick<ILoginTeacherPersonalInfo, 'name' | 'username' | 'createdAt' >;

export type IUpdateTeacher = Partial<ILoginTeacherPersonalInfo>;

export type ITeacherInfo = Partial<ILoginTeacherInfo>;

export type IDeleteTeacher = Pick<ILoginTeacherPersonalInfo, 'username'>;

export interface ITeacherInfoUpdate extends ITeacherInfo, UsePaginationState<ITeacherInfo>, UsePaginationInstanceProps<ITeacherInfo> {
  headerGroups?: HeaderGroup<ITeacherInfo>[];
  getTableBodyProps: (props?: ITableProps) => ITableProps;
  prepareRow: (...args: unknown[]) => void;
}