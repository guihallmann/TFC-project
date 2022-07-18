import Team from '../database/models/team';
import Matches from '../database/models/match';
import { IData } from '../interfaces/leaderboardInterface';

const formatFunction = (data: IData[]) => {
  const format = data.map((team: IData) => ({
    name: team.teamHome,
  }));
  return format;
};

export default class LeaderboardService {
  private teamModel = Team;
  private matchModel = Matches;

  public async getAllHome(): Promise<object[]> {
    const matches = this.matchModel.findAll({
      where: { inProgress: false },
      attributes: {
        exclude: ['id', 'inProgress', 'homeTeam', 'awayTeam'],
      },
      include: {
        model: this.teamModel,
        as: 'teamHome',
        attributes: {
          exclude: ['id'],
        },
      },
    });
    return matches;
  }
}
