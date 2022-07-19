import Team from '../database/models/team';
import Matches from '../database/models/match';
import { IHomeAway } from '../interfaces/leaderboardInterface';

const formatResponse = (data: IHomeAway[]): object[] => {
  console.log(data);
  const format = data.map((team) => ({
    name: team.teamName,
  }));
  return format;
};

export default class LeaderboardService {
  private teamModel = Team;
  private matchModel = Matches;

  public async getAllHome() {
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
    }) as unknown as IHomeAway[];
    return formatResponse(matches);
  }

  public async getAllAway() {
    const matches = this.teamModel.findAll({
      include: {
        model: this.matchModel,
        as: 'awayMatch',
        attributes: {
          exclude: ['id', 'homeTeam', 'awayTeam', 'inProgress'],
        },
        where: { inProgress: false },
      },
      attributes: { exclude: ['id'] },
    }) as unknown as IHomeAway[];
    return matches;
  }
}
