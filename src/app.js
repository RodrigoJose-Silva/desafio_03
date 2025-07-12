// Importa o Express
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const routes = require('./routes');

// Cria a aplicação Express
const app = express();

// Middleware para interpretar JSON
app.use(express.json());

// Rota para documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rotas principais da API
app.use('/api', routes);

// Exporta o app para uso em outros arquivos (ex: server.js, testes)
module.exports = app; 