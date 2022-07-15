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
  update(id: string): Promise<object>,
  updateResult(id: string, goals: object): Promise<object>,
}

export interface IModel {
  getAll(data: object): Promise<IMatch[]>
  create(data: object): Promise<IMatch>,
  update(property: object, value: where): Promise<object>,
  updateResult(properties: object, value: where): Promise<object>,
}

type where = { where: object };
