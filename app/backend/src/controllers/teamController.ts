import { Request, Response, NextFunction } from 'express';
import { IService } from '../interfaces/teamInterface';

export default class TeamController {
  constructor(private teamService: IService) {
    this.teamService = teamService;
  }

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const teams = await this.teamService.getAll();
      return res.status(200).json(teams);
    } catch (error) {
      next(error);
    }
  };

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const team = await this.teamService.getById(id);
      return res.status(200).json({ team });
    } catch (error) {
      next(error);
    }
  };
}
