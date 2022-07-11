export interface IUser {
  id: number,
  username: string,
  role: string,
  email: string,
  password: string,
}

export interface IService {
  login(data: object): Promise<string>;
}

export interface IModel {
  findOne(data: object): Promise<IUser>;
}
