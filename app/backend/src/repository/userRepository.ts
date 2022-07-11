import { IUser, IModel } from '../interfaces/userInterface';
import User from '../database/models/user';

export default class Repository implements IModel {
  constructor(private model = User) {
    this.model = model;
  }

  async findOne(data: object): Promise<IUser> {
    const user = await this.model.findOne(data);
    return user as IUser;
  }
}
