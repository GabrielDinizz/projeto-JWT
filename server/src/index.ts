import app from './app';
import './sync'; 

const PORT = 3000;

try {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
} catch (error) {
  console.error('Erro ao iniciar o servidor:', error);
}
