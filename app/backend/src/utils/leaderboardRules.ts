import { IData, ILeaderboard } from '../interfaces/leaderboardInterface';

const formatFunction = (data: IData[]): ILeaderboard[] => {
  const format = data.map((team) => ({
    name: team.teamHome.teamName,
    totalPoints: 10,
    totalGames: 10,
    totalVictories: 10,
    totalDraws: 10,
    totalLosses: 0,
    goalsFavor: team.homeTeamGoals,
    goalsOwn: team.awayTeamGoals,
    goalsBalance: 50,
    efficiency: 80.6,
  }));
  return format;
};

export default formatFunction;
