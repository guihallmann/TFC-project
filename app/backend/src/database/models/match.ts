import { DataTypes, Model } from 'sequelize';
import db from '.';

class Match extends Model {
  public id: number;
  public homeTeam: number;
  public homeTeamGoals: number;
  public awayTeam: number;
  public awayTeamGoals: number;
  public inProgress: number;
}

Match.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeam: { type: DataTypes.NUMBER, allowNull: false },
  homeTeamGoals: { type: DataTypes.NUMBER, allowNull: false },
  awayTeam: { type: DataTypes.NUMBER, allowNull: false },
  awayTeamGoals: { type: DataTypes.NUMBER, allowNull: false },
  inProgress: { type: DataTypes.NUMBER, allowNull: false },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

export default Match;
