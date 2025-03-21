
# **Book Flow - Gerenciador de Livros**

**Book Flow** é uma aplicação full-stack para o gerenciamento de um catálogo de livros, permitindo que administradores visualizem, adicionem, editem e removam livros de maneira eficiente. A aplicação utiliza **React** no frontend, **Node.js** com **Express** no backend, e **PostgreSQL** como banco de dados. A comunicação entre o frontend e o backend é feita de forma eficiente utilizando **Axios** e a segurança é garantida por **JWT** para autenticação de usuários e **Bcrypt** para criptografia de senhas.

## 🚀 **Tecnologias Utilizadas**

### **Frontend:**
- **React**: Biblioteca JavaScript para construção de interfaces de usuário interativas.
- **Bootstrap**: Framework CSS para estilização e responsividade.
- **Axios**: Cliente HTTP para realizar requisições assíncronas ao backend.
- **React Router**: Gerenciamento de rotas e navegação entre componentes.
- **Vite**: Ferramenta moderna de build para o frontend, proporcionando desenvolvimento rápido e otimizado.

### **Backend:**
- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework minimalista e flexível para criação de APIs RESTful.
- **PostgreSQL**: Banco de dados relacional para armazenar os dados dos livros.
- **Prisma**: ORM (Object-Relational Mapping) para facilitar a interação com o banco de dados.
- **JWT (JSON Web Token)**: Utilizado para autenticação de usuários, garantindo a segurança das requisições.
- **Bcrypt**: Biblioteca para criptografia de senhas de usuários, garantindo que informações sensíveis sejam protegidas.
- **Joi**: Utilizado para validação de dados de entrada, garantindo que os dados recebidos estejam no formato correto.

## 📂 **Estrutura do Projeto**

```
/book-flow
│
├── /frontend           # Código do frontend em React
│   ├── /src            # Código-fonte da aplicação
│   │   ├── /components # Componentes reutilizáveis para construção de UI
│   │   ├── /pages      # Páginas principais da aplicação
│   │   ├── /services   # Funções para realizar chamadas HTTP
│   │   ├── App.js      # Ponto de entrada da aplicação React
│   │   └── index.js    # Arquivo principal que renderiza o React
│   └── package.json    # Dependências e scripts do frontend
│
├── /backend            # Código do backend em Node.js
│   ├── /src            # Código-fonte da aplicação
│   │   ├── /controllers # Controladores para gerenciar a lógica das rotas
│   │   ├── /models     # Modelos de dados utilizados pelo Prisma
│   │   ├── /routes     # Definições das rotas da API
│   │   ├── /middleware # Middlewares para autenticação, validação e tratamento de erros
│   │   ├── /config     # Configurações gerais da aplicação, como conexão ao banco
│   │   └── /data       # Scripts de inicialização e seed do banco de dados
│   ├── /prisma         # Configuração do Prisma (ORM)
│   └── package.json    # Dependências e scripts do backend
│
└── package.json        # Dependências e scripts gerais do projeto
└── README.md           # Documentação do projeto
```

## 🔧 **Instalação e Configuração**

### **Pré-requisitos:**
- **Node.js** (versão 14 ou superior)
- **PostgreSQL** (versão 12 ou superior)

### **Configuração do Backend:**

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

### **Configuração do Frontend:**

1. Navegue até a pasta do frontend:
   ```bash
   cd frontend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

### **Executando a Aplicação:**

Para rodar o **frontend** e o **backend** simultaneamente, instale o pacote `concurrently` na raiz do projeto:

1. Instale o `concurrently`:
   ```bash
   npm install concurrently --save-dev
   ```

2. Adicione o script de inicialização no arquivo `package.json` da raiz do projeto:
   ```json
   {
     "scripts": {
       "start": "concurrently \"npm run dev --prefix backend\" \"npm run dev --prefix frontend\""
     },
     "devDependencies": {
       "concurrently": "^8.2.2"
     }
   }
   ```

3. Inicie ambos os servidores com o comando:
   ```bash
   npm start
   ```

### **Executando separadamente:**

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

## 🛠 **Testando a API com Postman**

Você pode testar a API utilizando o **Postman** com as seguintes rotas:

- **Mostrar todos os livros**:  
  `GET` para `http://localhost:3001/api/book`
  
- **Obter um livro por ID**:  
  `GET` para `http://localhost:3001/api/book/:id`

- **Cadastrar um livro**:  
  `POST` para `http://localhost:3001/api/book` com o corpo:
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

- **Editar um livro**:  
  `PUT` para `http://localhost:3001/api/book/:id` com os dados a serem alterados.

- **Deletar um livro**:  
  `DELETE` para `http://localhost:3001/api/book/:id`

## 🔑 **Autenticação com JWT**

A aplicação utiliza **JWT** (JSON Web Token) para autenticação de usuários. O fluxo básico de autenticação é:

1. O usuário envia suas credenciais (nome de usuário e senha) para o backend.
2. O backend valida as credenciais.
3. Se as credenciais forem válidas, um **token JWT** é gerado e enviado ao frontend.
4. O frontend armazena o token e o utiliza para autenticar futuras requisições, garantindo que apenas usuários autenticados possam acessar certas rotas.

### **Criação de usuários (Sign-up)**

Durante o processo de criação de um novo usuário, **Bcrypt** é utilizado para criptografar as senhas antes de armazená-las no banco de dados. Além disso, o JWT gerado é necessário para autenticar as requisições subsequentes.

## **Estrutura do Backend**

O backend foi organizado de acordo com boas práticas para garantir escalabilidade e manutenção eficiente. A seguir, a descrição de cada pasta no backend:

### **1. Models**
Contém os modelos de dados (utilizando o **Prisma** ORM) que representam as tabelas no banco de dados. Aqui, são definidos os campos e os relacionamentos entre as entidades (como livros e usuários).

### **2. Controllers**
Responsáveis pela lógica de negócios das rotas. Aqui, os dados são processados antes de serem enviados ao cliente, e as interações com o banco de dados são realizadas por meio dos modelos definidos.

### **3. Routes**
Define as rotas da API. Cada rota mapeia uma URL e um método HTTP a uma função no controlador correspondente.

### **4. Middleware**
Contém funções que interceptam e processam as requisições, como autenticação, validação de dados e tratamento de erros. Este é um ponto central para o gerenciamento de lógica que deve ocorrer antes ou depois da execução das rotas.

### **5. Config**
Contém as configurações gerais da aplicação, como a configuração do banco de dados, variáveis de ambiente e configurações de servidor.

## 🎯 **Conclusão**

**Book Flow** é uma aplicação full-stack robusta, permitindo a administração eficiente de um catálogo de livros. Com um backend bem estruturado utilizando **Node.js**, **Express**, **Prisma** e **PostgreSQL**, e um frontend moderno com **React**, **Axios** e **React Router**, a aplicação oferece uma experiência de usuário fluida e segura. A implementação de **JWT** e **Bcrypt** garante a segurança das operações de autenticação e manipulação de dados.

A estrutura modular e as boas práticas de desenvolvimento adotadas tornam o projeto escalável e fácil de manter, sendo uma excelente base para expandir e personalizar conforme necessário.

---

### ![Captura de tela 2025-03-21 034525](https://github.com/user-attachments/assets/60d4fc10-5a78-4f22-9a9c-8112fb06bed3)
---

### **Contribuições**

Contribuições são sempre bem-vindas! Se você deseja sugerir melhorias ou corrigir problemas, abra um **Pull Request** ou crie uma **Issue**.
