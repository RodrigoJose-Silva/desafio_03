const request = require('supertest');
const app = require('../../src/app');
const path = require('path');
const fs = require('fs');

function loadTestData(filename) {
  const filePath = path.join(__dirname, filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

describe('Reminder API', () => {
  it('Lembrete com usuário válido deve retornar 200', async () => {
    const data = loadTestData('reminderComUsuarioValidoDeveRetornar200.json');
    const res = await request(app).post('/api/reminder').send(data.body);
    expect(res.statusCode).toBe(200);
    expect(res.body.reminder).toBeDefined();
  });

  it('Lembrete com usuário não cadastrado deve retornar 404', async () => {
    const data = loadTestData('reminderComUsuarioNaoCadastradoDeveRetornar404.json');
    const res = await request(app).post('/api/reminder').send(data.body);
    expect(res.statusCode).toBe(404);
    expect(res.body.message).toBe('Usuário não cadastrado.');
  });
}); 