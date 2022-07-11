import * as bcrypt from 'bcryptjs';
import { IModel, IUser } from '../interfaces/userInterface';

export default class UserService {
  constructor(private model: IModel) {
    this.model = model;
  }

  public async login(data: IUser) {
    const user = await this.model.findOne({ where: { email: data.email } });
    if (!user) console.log('status: 401, message: Incorrect email or password');

    const pwCheck = bcrypt.compareSync(data.password, user.password);
    if (!pwCheck) console.log('status: 401, message: Incorrect email or password');
  }
}
