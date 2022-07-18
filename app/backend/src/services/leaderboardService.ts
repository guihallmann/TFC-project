// import { IModel, ILeaderboard } from '../interfaces/leaderboardInterface';
import Team from '../database/models/team';
import Matches from '../database/models/match';

export default class LeaderboardService {
  private teamModel = Team;
  private matchModel = Matches;

  public async getAllHome(): Promise<object[]> {
    const homeMatches = await this.teamModel.findAll({
      include: {
        model: this.matchModel,
        as: 'teamHome',
        attributes: { exclude: ['id', 'inProgress'] },
        where: { inProgress: false },
      },
      attributes: { exclude: ['id'] },
    });
    return homeMatches;
  }
}
