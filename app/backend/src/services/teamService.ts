import { IModel, ITeam } from '../interfaces/teamInterface';
import errorThrow from '../utils/errorThrow';

export default class TeamService {
  constructor(private model: IModel) {
    this.model = model;
  }

  public async getById(id: string): Promise<ITeam> {
    const team = await this.model.getById({ where: { id } });
    if (!team) throw errorThrow(404, 'Team not found');
    return team;
  }

  public async getAll(): Promise<ITeam[]> {
    const teams = await this.model.getAll();
    return teams;
  }
}
