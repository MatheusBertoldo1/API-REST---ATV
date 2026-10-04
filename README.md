# Darkhorse API

API RESTful para gerenciamento de orçamentos (budgets), desenvolvida com Node.js, Express, TypeScript, Sequelize e PostgreSQL. Documentada via Swagger.

---

## 🛠️ Tecnologias

- **Runtime:** Node.js
- **Linguagem:** TypeScript
- **Framework:** Express
- **ORM:** Sequelize
- **Banco de Dados:** PostgreSQL
- **Documentação:** Swagger UI

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (v18+)
- PostgreSQL ativo na máquina

### 1. Clonar o repositório
git clone https://github.com/MatheusBertoldo1/API-RESTfull-Node.git
cd API-RESTfull-Node

### 2. Instalar dependências
npm install

### 3. Configurar variáveis de ambiente
Crie um arquivo .env na raiz do projeto conforme o modelo:

PORT=3000
DB_HOST=127.0.0.1
DB_PORT=5432
DB_NAME=darkhorse
DB_USER=postgres
DB_PASSWORD=sua_senha_aqui

Nota: Certifique-se de que o banco de dados darkhorse foi criado no seu PostgreSQL antes de iniciar.

### 4. Executar a aplicação
# Modo de desenvolvimento
npm run dev

Após iniciar, o Sequelize sincronizará automaticamente a tabela budgets.

---

## 📚 Documentação (Swagger)

Com a aplicação rodando, acesse a documentação interativa no navegador:

http://localhost:3000/api-docs

---

## 📌 Rotas da API

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| GET | /api/budgets | Lista todos os orçamentos |
| GET | /api/budgets/:id | Busca um orçamento por ID |
| POST | /api/budgets | Cria um novo orçamento |
| PUT | /api/budgets/:id | Atualiza um orçamento existente |
| DELETE | /api/budgets/:id | Remove um orçamento |