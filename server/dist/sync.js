"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./config/database");
const Client_1 = __importDefault(require("./models/Client"));
const Nutritionist_1 = __importDefault(require("./models/Nutritionist"));
const Personal_1 = __importDefault(require("./models/Personal"));
function syncDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Porque meu codigo só funciona com a linha a baixo?
            console.log('Modelos carregados:', { Client: Client_1.default, Nutritionist: Nutritionist_1.default, Personal: Personal_1.default });
            yield database_1.sequelize.sync({ force: false });
            console.log('Tabelas criadas ou sincronizadas com sucesso!');
        }
        catch (error) {
            console.error('Erro ao sincronizar o banco de dados:', error);
        }
    });
}
syncDatabase();
