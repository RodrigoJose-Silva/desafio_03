const request = require('supertest');
const app = require('../../src/app');
const path = require('path');
const fs = require('fs');

// Função auxiliar para carregar dados de teste
function loadTestData(filename) {
  const filePath = path.join(__dirname, filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

describe('Login API', () => {
  it('Login com dados válidos deve retornar 200', async () => {
    const data = loadTestData('loginComDadosValidosDeveRetornar200.json');
    const res = await request(app).post('/api/login').send(data.body);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Login realizado com sucesso.');
  });

  it('Login com dados inválidos deve retornar 401', async () => {
    const data = loadTestData('loginComDadosInvalidosDeveRetornar401.json');
    const res = await request(app).post('/api/login').send(data.body);
    expect(res.statusCode).toBe(401);
    expect(res.body.message).toBe('Login ou senha inválidos.');
  });

  it('Login com usuário não cadastrado deve retornar 404', async () => {
    const data = loadTestData('loginComUsuarioNaoCadastradoDeveRetornar404.json');
    const res = await request(app).post('/api/login').send(data.body);
    expect(res.statusCode).toBe(404);
    expect(res.body.message).toBe('Usuário não cadastrado.');
  });

  it('Bloqueio após 3 tentativas inválidas deve retornar 403', async () => {
    const data = loadTestData('loginBloqueioApos3TentativasDeveRetornar403.json');
    // 1ª tentativa
    await request(app).post('/api/login').send(data.body);
    // 2ª tentativa
    await request(app).post('/api/login').send(data.body);
    // 3ª tentativa
    const res = await request(app).post('/api/login').send(data.body);
    expect(res.statusCode).toBe(403);
    expect(res.body.message).toMatch(/bloqueado/i);
  });

  // Outros testes serão adicionados posteriormente
}); 