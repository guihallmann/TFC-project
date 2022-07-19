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

export interface IGoals {
  homeTeamGoals: number,
  awayTeamGoals: number,
}

export interface IHomeAway {
  teamName: string,
  homeMatch?: IGoals[],
  awayMatch?: IGoals[],
}

export interface IService {
  getAllHome(): Promise<object[]>,
  getAllAway(): Promise<object[]>,
}
