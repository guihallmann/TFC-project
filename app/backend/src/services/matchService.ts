import { IModel, IMatch } from '../interfaces/matchInterface';
import Team from '../database/models/team';
import errorThrow from '../utils/errorThrow';

export default class MatchService {
  constructor(private model: IModel) {
    this.model = model;
  }

  public async getAll(): Promise<IMatch[]> {
    const matches = await this.model.getAll({
      include: [
        { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    return matches;
  }

  public async create(data: object): Promise<IMatch> {
    try {
      const newMatch = await this.model.create(data);
      return newMatch;
    } catch (error) {
      throw errorThrow(404, 'There is no team with such id!');
    }
  }

  public async update(id: string): Promise<object> {
    await this.model.update({ inProgress: false }, { where: { id } });
    return { message: 'Finished' };
  }

  public async updateResult(id: string, goals: object): Promise<object> {
    await this.model.updateResult(goals, { where: { id } });
    return { message: 'Result has been updated' };
  }
}
