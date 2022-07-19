import Team from '../database/models/team';
import Matches from '../database/models/match';
import formatResponse from '../utils/leaderboardRules';

export default class LeaderboardService {
  private teamModel = Team;
  private matchModel = Matches;

  public async getAllHome() {
    const matches = await this.teamModel.findAll({
      include: {
        model: this.matchModel,
        as: 'homeMatch',
        attributes: {
          exclude: ['id', 'homeTeam', 'awayTeam', 'inProgress'],
        },
        where: { inProgress: false },
      },
      attributes: { exclude: ['id'] },
    });
    return formatResponse(matches);
  }

  public async getAllAway() {
    const matches = await this.teamModel.findAll({
      include: {
        model: this.matchModel,
        as: 'awayMatch',
        attributes: {
          exclude: ['id', 'homeTeam', 'awayTeam', 'inProgress'],
        },
        where: { inProgress: false },
      },
      attributes: { exclude: ['id'] },
    });
    return matches;
  }
}
