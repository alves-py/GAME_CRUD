# Game Management API

Esta é uma API para gerenciar dados de jogos, construída com Node.js e PostgreSQL. A API permite criar, ler, atualizar e deletar informações de jogos. Este projeto usa as seguintes dependências:

- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://www.npmjs.com/package/express)
- [joi](https://www.npmjs.com/package/joi)
- [knex](https://www.npmjs.com/package/knex)

## Autor

Felipe Alves

## Licença

ISC

## Requisitos

- Node.js
- PostgreSQL
- Docker (opcional, mas recomendado)

## Configuração

1. Clone o repositório:

   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. Instale as dependências:

   ```sh
   npm install
   ```

3. Configure as variáveis de ambiente. Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

   ```env
   DB_URL=localhost
   DB_PORT=5432
   DB_USER=root
   DB_PASS=root
   DB_NAME=programming_db
   ```

4. Configure o banco de dados PostgreSQL. Você pode usar o Docker para facilitar o processo. Crie um arquivo `docker-compose.yml` com o seguinte conteúdo:

   ```yaml
   version: "3.8"
   services:
     db:
       image: postgres:latest
       container_name: postgres_db
       environment:
         POSTGRES_USER: root
         POSTGRES_PASSWORD: root
         POSTGRES_DB: programming_db
       ports:
         - "5432:5432"
       volumes:
         - db_data:/var/lib/postgresql/data
   volumes:
     db_data:
   ```

5. Inicie o contêiner do banco de dados:

   ```sh
   docker-compose up -d
   ```

## Uso

Para iniciar o servidor, execute:

```sh
npm start
```

A API estará disponível em http://localhost:3000.

# Endpoints

## Criar um jogo

```sh
 POST /games
```

## Exemplo de corpo da requisição

```sh
{
  "name": "Game name",
  "description": "Game description",
  "genre": "Adventure",
  "platform": "PC"
}
```

## Buscar todos os jogos

```sh
 GET /games
```

## Buscar jogo por id

```sh
 GET /games/:id
```

## Atualizar um jogo

```sh
 PUT /games/:id
```

## Exemplo de corpo de requisição

```sh
{
  "name": "Updated Game name",
  "description": "Updated Game description",
  "genre": "Updated genre",
  "platform": "Updated platform"
}
```

## Deletar um jogo

```sh
 DELETE /games/:id
```
