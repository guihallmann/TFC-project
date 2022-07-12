import { DataTypes, Model } from 'sequelize';
import db from '.';
import Team from './team';

class Match extends Model {
  public id: number;
  public homeTeam: number;
  public homeTeamGoals: number;
  public awayTeam: number;
  public awayTeamGoals: number;
  public inProgress: boolean;
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
  inProgress: { type: DataTypes.BOOLEAN, allowNull: false },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

Team.hasMany(Match, { foreignKey: 'homeTeam', as: 'homeMatch' });
Team.hasMany(Match, { foreignKey: 'awayTeam', as: 'awayMatch' });

Match.belongsTo(Team, { foreignKey: 'homeTeam', as: 'hostTeam' });
Match.belongsTo(Team, { foreignKey: 'awayTeam', as: 'visitorTeam' });

export default Match;
