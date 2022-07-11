import * as jwt from 'jsonwebtoken';
import { IUser } from 'src/interfaces/userInterface';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const jwtSecret = 'xablablau';

const generateToken = (payload: IUser) => {
  const token = jwt.sign({ payload }, jwtSecret, jwtConfig);
  return token;
};

const checkToken = (token: string) => {
  const decoded = jwt.verify(token, jwtSecret);
  return decoded;
};

module.exports = {
  generateToken,
  checkToken,
};
