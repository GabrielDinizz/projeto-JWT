import { sequelize } from '../config/database';
import { DataTypes, Model } from 'sequelize';

interface IPersonalAttributes {
  name: string;
  email: string;
  password: string;
  activity: string;
}

class Personal extends Model<IPersonalAttributes> implements IPersonalAttributes {
  public name!: string;
  public email!: string;
  public password!: string;
  public activity!: string;
}

// Inicializando o modelo
Personal.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
  activity: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Personal',
  tableName: 'personals', 
});

export default Personal;
