import { Request, Response, NextFunction } from 'express';
import { IService } from '../interfaces/leaderboardInterface';

export default class LeaderboardController {
  constructor(private leaderboardService: IService) {
    this.leaderboardService = leaderboardService;
  }

  public getAllHome = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const homeGames = await this.leaderboardService.getAllHome();
      return res.status(200).json(homeGames);
    } catch (error) {
      next(error);
    }
  };

  public getAllAway = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const awayGames = await this.leaderboardService.getAllAway();
      return res.status(200).json(awayGames);
    } catch (error) {
      next(error);
    }
  };
}
