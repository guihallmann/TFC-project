import IUser from '../interfaces/userInterface';
import UserModel from '../database/models/user';

class UserService {
  public model: UserModel;

  public async login(data: IUser): Promise: <string>{
    const user: IUser = this.model.findOne({ where: { email: data.email }});

  }
}
