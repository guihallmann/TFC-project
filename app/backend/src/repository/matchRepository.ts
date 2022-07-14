import { IMatch, IModel } from '../interfaces/matchInterface';
import Match from '../database/models/match';

type where = { where: object };

export default class Repository implements IModel {
  constructor(private model = Match) {
    this.model = model;
  }

  async getAll(data: object): Promise<IMatch[]> {
    const matches = await this.model.findAll(data);
    return matches as IMatch[];
  }

  async create(data: object): Promise<IMatch> {
    const newMatch = await this.model.create(data);
    return newMatch as IMatch;
  }

  async update(property: object, id: where): Promise<object> {
    const updateStatus = await this.model.update(property, id);
    return updateStatus;
  }
}
