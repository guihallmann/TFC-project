import { IMatch, IModel } from '../interfaces/matchInterface';
import Match from '../database/models/match';

export default class Repository implements IModel {
  constructor(private model = Match) {
    this.model = model;
  }

  async getAll(): Promise<IMatch[]> {
    const teams = await this.model.findAll();
    return teams as IMatch[];
  }
}
