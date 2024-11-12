"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
require("./sync");
const PORT = 3000;
try {
    app_1.default.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
}
catch (error) {
    console.error('Erro ao iniciar o servidor:', error);
}
