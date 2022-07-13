import { IModel, IMatch } from '../interfaces/matchInterface';
import Team from '../database/models/team';
// import errorThrow from '../utils/errorThrow';

export default class MatchService {
  constructor(private model: IModel) {
    this.model = model;
  }

  public async getAll(): Promise<IMatch[]> {
    const matches = this.model.getAll({
      include: [
        { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    return matches;
  }

  public async create(data: object): Promise<IMatch> {
    const newMatch = this.model.create(data);
    return newMatch;
  }
}
