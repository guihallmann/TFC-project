import { ErrorRequestHandler } from 'express';
// https://stackoverflow.com/questions/50218878/typescript-express-error-function

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: 'Internal Server Error' });
};

export default errorHandler;
