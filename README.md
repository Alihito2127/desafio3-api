🧪 Desafio 3 – API de Login com Testes Automatizados
Este projeto é uma API REST feita com Node.js + Express, que simula um sistema de login simples com as seguintes funcionalidades:

✅ Login com sucesso

❌ Login inválido

🔒 Bloqueio após 3 tentativas inválidas

📧 Recuperação de senha (lembrar senha)

🔁 Resetar tentativas de login

 Estrutura do Projeto

 desafio3-api/
├── controllers/
│   └── loginController.js
├── routes/
│   └── login.js
├── tests/
│   └── login.test.js
├── index.js
├── package.json
└── README.md

Pré-requisitos
Node.js instalado: https://nodejs.org

Um terminal (cmd, PowerShell ou Git Bash)

Como Rodar a API
1- Acesse a pasta do projeto no terminal: bash
cd desafio3-api

2-Instale as dependências (apenas na primeira vez): bash
npm install

3-Inicie a API: bash
npm start

A API estará disponível em: http://localhost:3000

Endpoints da API
1. Login
POST /login
json
{
  "username": "usuario1",
  "password": "senha123"
}

2. Lembrar senha
POST /login/remember
json
{
  "username": "usuario1"
}

3. Resetar tentativas
POST /login/reset
json
{
  "username": "usuario1"
}

🧪 Testes Automatizados
Execute:

🧪 Testes Automatizados
Execute: bash
npm test

Utiliza Mocha + Supertest para validar o comportamento de todos os endpoints.

🔁 Testes com Postman
Você pode importar o arquivo JSON de coleção Postman fornecido no projeto:

  . Coleção: desafio3-api-postman-tests.json

Inclui testes automáticos para:
  . Login válido
  . Login inválido
  . Reset de tentativas
  . Lembrar senha
