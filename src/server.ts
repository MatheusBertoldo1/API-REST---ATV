import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import { createRequire } from 'module';

import { sequelize } from './config/database.js';
import budgetRoutes from './routes/budgetRoutes.js';
import './models/budgetsModel.js';

const require = createRequire(import.meta.url);
const swaggerDocument = require('../src/docs/swagger.json');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', budgetRoutes);

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados realizada.');

    await sequelize.sync();
    console.log('Tabela sincronizada com o banco de dados.');

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
      console.log(`Documentação: http://localhost:${PORT}/api-docs`);
    });
  } catch (error) {
    console.error('Falha ao conectar com o banco de dados:', error);
  }
}

startServer();