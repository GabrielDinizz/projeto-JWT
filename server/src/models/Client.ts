// /src/models/Client.ts

import { sequelize } from '../config/database';
import { DataTypes, Model, Optional } from 'sequelize';

// Definindo a interface de atributos do modelo
interface IClientAttributes {
  name: string;
  email: string;
  password: string;
  dateBirth: Date;
  activity: string
  weight?: number;
  height?: number;
}

// deve usar 'Optional' para atributos que podem ser nulos na criação do modelo
interface IClientCreationAttributes extends Optional<IClientAttributes, 'weight' | 'height'> {}

class Client extends Model<IClientAttributes, IClientCreationAttributes> implements IClientAttributes {
  public name!: string;
  public email!: string;
  public password!: string;
  public activity!: string;
  public dateBirth!: Date;
  public weight?: number; 
  public height?: number;
}

// Inicializando o modelo
Client.init({
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
  dateBirth: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  weight: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: true,
  },
  height: {
    type: DataTypes.DECIMAL(3, 2),
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Client',
  tableName: 'clients', 
});

export default Client;
