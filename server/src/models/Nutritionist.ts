import { sequelize } from '../config/database';
import { DataTypes, Model } from 'sequelize';

interface INutritionistAttributes {
  name: string;
  email: string;
  password: string;
  activity: string;
}

class Nutritionist extends Model<INutritionistAttributes> implements INutritionistAttributes {
  public name!: string;
  public email!: string;
  public password!: string;
  public activity!: string;
}

// Inicializando o modelo
Nutritionist.init({
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
  modelName: 'Nutritionist',
  tableName: 'nutritionists', 
});

export default Nutritionist;
