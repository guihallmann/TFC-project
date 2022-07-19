import { IGoals, IHome } from '../interfaces/leaderboardInterface';

const totalPoints = (data: IGoals[]) => {
  let points = 0;
  data.forEach((match) => {
    if (match.homeTeamGoals > match.awayTeamGoals) points += 3;
    if (match.homeTeamGoals === match.awayTeamGoals) points += 1;
  });
  return points;
};

const formatHomeMatches = (data: IHome[]) => {
  console.log(data);
  const format = data.map((team) => ({
    name: team.teamName,
    totalPoints: totalPoints(team.homeMatch),
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

export default formatHomeMatches;
