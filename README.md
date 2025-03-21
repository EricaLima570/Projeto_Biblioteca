# 📚 Aplicação Full Stack - Gerenciador de Livros

Este projeto é um gerenciador de livros desenvolvido como uma aplicação full stack, utilizando React no frontend e Node.js com Express no backend. O objetivo do sistema é permitir que administradores possam gerenciar um catálogo de livros, adicionando, editando e removendo registros de forma eficiente. O banco de dados é gerenciado pelo PostgreSQL, utilizando Sequelize para facilitar a comunicação com o backend.

## 🚀 Tecnologias Utilizadas

### Frontend:
- **React**: Biblioteca para construção de interfaces de usuário.
- **Bootstrap**: Framework CSS para estilização e responsividade.
- **Axios**: Cliente HTTP para requisições assíncronas.
- **React Router**: Gerenciamento de rotas no React.
- **Vite**: Ferramenta de construção e desenvolvimento para aplicações web.

### Backend:
- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express**: Framework para criação de APIs em Node.js.
- **PostgreSQL**: Banco de dados relacional.
- **Sequelize**: ORM para comunicação com o banco de dados.
- **Joi**: Validação de dados.
- **JWT (JSON Web Token)**: Autenticação de usuários.
- **Multer & Cloudinary**: Upload e armazenamento de imagens.
- **Concurrently**: Execução simultânea do frontend e backend.

## 📂 Estrutura do Projeto

```
/projeto-livraria
│
├── /frontend          # Código do frontend em React
│   ├── /src           # Código-fonte da aplicação
│   └── package.json   # Dependências do frontend
│
├── /backend           # Código do backend em Node.js
│   ├── /src           # Código-fonte da aplicação
│   ├── data.sql       # Script para criação do banco de dados
│   └── package.json   # Dependências do backend
│
└── package.json       # Dependências e scripts do projeto
└── README.md          # Documentação do projeto
```

## 🖥️ Páginas da Aplicação

A aplicação possui três páginas principais:

1. **Home**: Lista todos os livros cadastrados, exibindo atributos como título, autor, preço e estoque. Os livros podem ser apresentados em uma tabela ou em formato de cards para melhor visualização.
2. **AddBook**: Permite a inclusão de novos livros no sistema. A página possui um formulário onde são inseridos os atributos obrigatórios, como título, autor, preço, gênero e ano de publicação.
3. **EditBook**: Permite modificar as informações de um livro já existente.

## 🔧 Instalação e Configuração

### Pré-requisitos:
- Node.js (versão 14 ou superior)
- PostgreSQL (versão 12 ou superior)

### Configuração do Backend
1. Navegue até a pasta do backend:
   ```bash
   cd backend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Crie o banco de dados utilizando o script `data.sql`:
   ```bash
   psql -U seu_usuario -d seu_banco_de_dados -f data.sql
   ```

### Configuração do Frontend
1. Navegue até a pasta do frontend:
   ```bash
   cd frontend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

### Executando a Aplicação

Para rodar frontend e backend simultaneamente:
```bash
npm start
```

Para rodar separadamente:
- **Frontend (porta 5173):**
  ```bash
  cd frontend
  npm run dev
  ```
- **Backend (porta 3001):**
  ```bash
  cd backend
  npm run dev
  ```

## 📌 Documentação das Rotas do Aplicativo React

### Estrutura das Rotas

#### Página Inicial
**Rota:** `/`
- Exibe a lista de livros cadastrados.
- **Componente Renderizado:** `<Home />`

#### Adicionar um Novo Livro
**Rota:** `/add`
- Exibe o formulário para adicionar um novo livro.
- **Componente Renderizado:** `<AddBook />`

#### Editar um Livro Existente
**Rota:** `/edit/:id`
- Permite a edição de um livro específico pelo ID.
- **Componente Renderizado:** `<EditBook />`

## 📌 Documentação das Rotas da API de Livros

### Endpoints

#### Criar um novo livro
**Rota:** `POST /book`
- Cria um novo livro.

#### Obter todos os livros
**Rota:** `GET /book`
- Retorna uma lista de todos os livros cadastrados.

#### Obter um livro por ID
**Rota:** `GET /book/:id`
- Busca um livro específico pelo ID.

#### Atualizar um livro
**Rota:** `PUT /book/:id`
- Atualiza os dados de um livro existente.

#### Deletar um livro
**Rota:** `DELETE /book/:id`
- Remove um livro do banco de dados.

## 🛠 Testando com Postman

1. **Mostrar todos os livros**: `GET http://localhost:3001/api/book`
2. **Obter um livro por ID**: `GET http://localhost:3001/api/book/:id`
3. **Cadastrar um livro**:
   ```json
   {
       "title": "Novo Livro",
       "price": 120,
       "quantity": 10,
       "author": "Autor Exemplo",
       "genre": "Ficção",
       "description": "Descrição do livro",
       "published_year": 2024
   }
   ```
4. **Editar um livro**: `PUT http://localhost:3001/api/book/:id`
5. **Deletar um livro**: `DELETE http://localhost:3001/api/book/:id`

## 🔑 Autenticação com JWT

1. O usuário envia credenciais para o backend.
2. O backend valida as credenciais.
3. Se forem válidas, um token JWT é gerado e enviado ao frontend.
4. O frontend armazena o token e autentica requisições protegidas.

## 🎯 Conclusão

Este projeto exemplifica a integração entre React e Node.js para gerenciamento de um catálogo de livros, com um backend robusto e um frontend interativo. Ele pode ser expandido com novas funcionalidades conforme necessário.

🚀 **Boas práticas, responsividade e organização fazem toda a diferença!**

