"use strict";
// /src/models/Client.ts
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../config/database");
const sequelize_1 = require("sequelize");
class Client extends sequelize_1.Model {
}
// Inicializando o modelo
Client.init({
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    dateBirth: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
    },
    weight: {
        type: sequelize_1.DataTypes.DECIMAL(5, 2),
        allowNull: true,
    },
    height: {
        type: sequelize_1.DataTypes.DECIMAL(3, 2),
        allowNull: true,
    },
}, {
    sequelize: database_1.sequelize,
    modelName: 'Client',
    tableName: 'clients',
});
exports.default = Client;
