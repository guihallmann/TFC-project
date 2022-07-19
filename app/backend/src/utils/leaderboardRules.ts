import { IGoals, IHome } from '../interfaces/leaderboardInterface';

const totalPoints = (data: IGoals[]) => {
  let points = 0;
  data.forEach((match) => {
    if (match.homeTeamGoals > match.awayTeamGoals) points += 3;
    if (match.homeTeamGoals === match.awayTeamGoals) points += 1;
  });
  return points;
};

const totalGames = (data: IGoals[]) => {
  let games = 0;
  data.forEach(() => {
    games += 1;
  });
  return games;
};

const totalVictories = (data: IGoals[]) => {
  let wins = 0;
  data.forEach((match) => {
    if (match.homeTeamGoals > match.awayTeamGoals) wins += 1;
  });
  return wins;
};

const totalDraws = (data: IGoals[]) => {
  let draws = 0;
  data.forEach((match) => {
    if (match.homeTeamGoals === match.awayTeamGoals) draws += 1;
  });
  return draws;
};

const totalLosses = (data: IGoals[]) => {
  let losses = 0;
  data.forEach((match) => {
    if (match.homeTeamGoals < match.awayTeamGoals) losses += 1;
  });
  return losses;
};

const goalsFavor = (data: IGoals[]) => {
  let goals = 0;
  data.forEach((match) => {
    goals += match.homeTeamGoals;
  });
  return goals;
};

const goalsOwn = (data: IGoals[]) => {
  let goals = 0;
  data.forEach((match) => {
    goals += match.awayTeamGoals;
  });
  return goals;
};

const efficiency = (data: IGoals[]) => {
  const allGames = totalGames(data);
  const allPoints = totalPoints(data);
  const result = ((allPoints / (allGames * 3)) * 100).toFixed(2);
  return result;
};

const formatHomeMatches = (data: IHome[]) => {
  console.log(data);
  const format = data.map((team) => ({
    name: team.teamName,
    totalPoints: totalPoints(team.homeMatch),
    totalGames: totalGames(team.homeMatch),
    totalVictories: totalVictories(team.homeMatch),
    totalDraws: totalDraws(team.homeMatch),
    totalLosses: totalLosses(team.homeMatch),
    goalsFavor: goalsFavor(team.homeMatch),
    goalsOwn: goalsOwn(team.homeMatch),
    goalsBalance: goalsFavor(team.homeMatch) - goalsOwn(team.homeMatch),
    efficiency: efficiency(team.homeMatch),
  }));
  return format;
};

export default formatHomeMatches;
