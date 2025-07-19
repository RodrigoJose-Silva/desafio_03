# 🚀 API de Gestão de Login

Bem-vindo! Esta é uma API REST para estudo de testes de software, construída com **Node.js** e **Express**. O objetivo é praticar autenticação, bloqueio de login, lembrete de senha e testes automatizados.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **Express**
- **Jest** (testes)
- **Supertest** (testes de API)
- **Swagger** (documentação)

---

## ✨ Funcionalidades

- 🔐 Login de usuário
- ❌ Bloqueio após 3 tentativas inválidas
- 🕵️‍♂️ Validação de login inválido
- 🔄 Lembrete de senha
- 👤 Retorno para usuário não cadastrado

---

## 🚦 Como rodar o projeto

1. **Instale as dependências:**
   ```bash
   npm install
   ```
2. **Inicie o servidor:**
   ```bash
   npm start
   ```
3. **Acesse a documentação Swagger:**
   [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

---

## 📬 Endpoints Principais

- `POST /api/login` — Realiza login  
  Exemplo de body:
  ```json
  { "username": "usuario", "password": "senha" }
  ```
- `POST /api/reminder` — Lembrete de senha  
  Exemplo de body:
  ```json
  { "username": "usuario" }
  ```

---

## 🧪 Testes Automatizados

Os testes estão na pasta `rest/test` e usam **Jest** e **Supertest**. Os dados de teste estão em arquivos `.json` com o mesmo nome do teste.

Para rodar os testes:

```bash
npm test
```

---

## ⚙️ Integração Contínua (CI)

Este projeto utiliza **GitHub Actions** para rodar os testes automaticamente a cada push ou pull request na branch principal.

---

## Estrutura do Projeto (Arquitetura em Camadas)

| Path              | Objetivo                                                |
| ----------------- | ------------------------------------------------------- |
| src/controllers/  | Recebe requisições e retorna respostas.                 |
| src/services/     | Lógica de negócio e orquestração das operações.         |
| src/repositories/ | Acesso e manipulação dos dados (banco, arquivos, etc).  |
| src/models/       | Modelos de dados da aplicação.                          |
| src/routes.js     | Define as rotas da API e direciona para os controllers. |
| src/app.js        | Configuração da aplicação Express.                      |
| src/server.js     | Inicialização do servidor HTTP.                         |
| rest/test/        | Testes automatizados da API.                            |
| swagger.json      | Documentação da API.                                    |

> Cada camada possui responsabilidade única, facilitando manutenção, testes e evolução do projeto.

---

## ℹ️ Observações

- Não há banco de dados: os dados são mantidos em memória.
- Projeto para fins de estudo e prática de testes de software.
- Sinta-se à vontade para clonar, estudar e modificar!

---

## 👤 Autor

Desenvolvido para fins educacionais.
