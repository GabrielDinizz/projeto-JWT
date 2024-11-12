// src/app.ts
import express, { Express } from 'express';

const app: Express = express();

// Configurações do Express (middlewares, rotas, etc.)
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

export default app;
