import { sequelize } from './config/database';
import Client from './models/Client';
import Nutritionist from './models/Nutritionist';
import Personal from './models/Personal';

async function syncDatabase() {
  try {
    // Porque meu codigo só funciona com a linha a baixo?
    console.log('Modelos carregados:', { Client, Nutritionist, Personal });

    await sequelize.sync({ force: false });
    console.log('Tabelas criadas ou sincronizadas com sucesso!');
  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error);
  }
}

syncDatabase();
