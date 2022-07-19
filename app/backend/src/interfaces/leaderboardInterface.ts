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

export interface IHome {
  teamName: string,
  homeMatch: IGoals[]
}

export interface IAway {
  teamName: string,
  awayMatch: IGoals[],
}

export interface IService {
  getAllHome(): Promise<object[]>,
}
