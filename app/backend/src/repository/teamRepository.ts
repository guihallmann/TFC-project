import { ITeam, IModel } from '../interfaces/teamInterface';
import Team from '../database/models/team';

export default class Repository implements IModel {
  constructor(private model = Team) {
    this.model = model;
  }

  async getAll(): Promise<ITeam[]> {
    const teams = await this.model.findAll();
    return teams as ITeam[];
  }

  async getById(data: object): Promise<ITeam> {
    const team = await this.model.findOne(data);
    return team as ITeam;
  }
}
