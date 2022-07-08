import User from '../interfaces/userInterface';
import UserModel from '../database/models/user';

class UserService {
  public model: UserModel;

  public async login(data: Omit<User, 'role' | 'username'>): Promise<Omit<User, 'role'
}