import { IHomeAway, ILeaderboard } from '../interfaces/leaderboardInterface';

const formatResponse = (data: IHomeAway[]): ILeaderboard[] => {
  console.log(data);
  const format = data.map((team) => ({
    name: team.teamName,
    totalPoints: 10,
    totalGames: 3,
    totalVictories: 3,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 99,
    goalsOwn: 5,
    goalsBalance: 94,
    efficiency: 100,
  }));
  return format;
};

export default formatResponse;
