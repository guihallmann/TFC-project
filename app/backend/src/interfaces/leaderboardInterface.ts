export interface ILeaderboard {
  name: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: number,
}

export interface IService {
  getAllHome(): Promise<object[]>,
}

export interface IData {
  homeTeamGoals: number,
  awayTeamGoals: number,
  teamHome: teamName,
}

type teamName = {
  teamName: string,
};
