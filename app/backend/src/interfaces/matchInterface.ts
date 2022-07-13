export interface IMatch {
  id: number,
  homeTeam: number,
  homeTeamGoals: number,
  awayTeam: number,
  awayTeamGoals: number,
  inProgress: boolean,
}

export interface IService {
  getAll(): Promise<IMatch[]>,
}

export interface IModel {
  getAll(): Promise<IMatch[]>
}
