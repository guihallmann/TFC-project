import Team from '../database/models/team';
import Matches from '../database/models/match';
import { IHome } from '../interfaces/leaderboardInterface';

export default class LeaderboardService {
  private teamModel = Team;
  private matchModel = Matches;

  public async getAllHome(): Promise<object[]> {
    const matches = this.teamModel.findAll({
      include: {
        model: this.matchModel,
        as: 'homeMatch',
        attributes: {
          exclude: ['id', 'homeTeam', 'awayTeam', 'inProgress'],
        },
        where: { inProgress: false },
      },
      attributes: { exclude: ['id'] },
    }) as unknown as IHome[];
    return matches;
  }
}
