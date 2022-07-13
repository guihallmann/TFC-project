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
  create(data: object): Promise<IMatch>,
}

export interface IModel {
  getAll(data: object): Promise<IMatch[]>
  create(data: object): Promise<IMatch>,
}
