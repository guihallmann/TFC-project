export interface ITeam {
  id: number,
  teamName: string,
}

export interface IService {
  getAll(): Promise<ITeam[]>,
  getById(id: string): Promise<ITeam>,
}

export interface IModel {
  getAll(): Promise<ITeam[]>,
  getById(data: object): Promise<ITeam>,
}
