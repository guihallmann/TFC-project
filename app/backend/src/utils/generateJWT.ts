import { sign } from 'jsonwebtoken';
import { IUser } from '../interfaces/userInterface';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const jwtSecret = 'xablablau';

const generateToken = (payload: IUser) => {
  const token = sign({ payload }, jwtSecret, jwtConfig);
  return token;
};

export default generateToken;
