import { Request, Response, NextFunction } from 'express';
import { IService } from '../interfaces/matchInterface';

export default class MatchController {
  constructor(private matchService: IService) {
    this.matchService = matchService;
  }

  public getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const matches = await this.matchService.getAll();
      return res.status(200).json(matches);
    } catch (error) {
      next(error);
    }
  };

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newMatch = await this.matchService.create(req.body);
      return res.status(201).json(newMatch);
    } catch (error) {
      next(error);
    }
  };
}
