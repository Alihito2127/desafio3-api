const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const loginRoutes = require('../routes/login');
const app = express();

app.use(bodyParser.json());
app.use('/login', loginRoutes);

describe('API de Login', () => {
  it('Login com sucesso', async () => {
    const res = await request(app).post('/login').send({ username: 'usuario1', password: 'senha123' });
    res.should.have.status(200);
  });

  it('Login inválido', async () => {
    const res = await request(app).post('/login').send({ username: 'usuarioInvalido', password: 'qualquer' });
    res.status.should.equal(401);
  });

  it('Bloqueio após 3 tentativas', async () => {
    await request(app).post('/login').send({ username: 'usuario1', password: 'errada' });
    await request(app).post('/login').send({ username: 'usuario1', password: 'errada' });
    await request(app).post('/login').send({ username: 'usuario1', password: 'errada' });
    const res = await request(app).post('/login').send({ username: 'usuario1', password: 'senha123' });
    res.status.should.equal(403);
  });

  it('Lembrar senha', async () => {
    const res = await request(app).post('/login/remember').send({ username: 'usuario1' });
    res.status.should.equal(200);
    res.body.message.should.include('senha123');
  });
});
