import { IModel, IMatch } from '../interfaces/matchInterface';
// import errorThrow from '../utils/errorThrow';

export default class MatchService {
  constructor(private model: IModel) {
    this.model = model;
  }

  public async getAll(): Promise<IMatch[]> {
    const matches = await this.model.getAll();
    return matches;
  }
}
