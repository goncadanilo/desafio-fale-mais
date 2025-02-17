<h1 align="center">
  📞 Fale Mais
</h1>

<p align="center">
  <img alt="Languages" src="https://img.shields.io/badge/languages-4-blue">
  
  <img alt="Coverage" src="https://img.shields.io/badge/coverage-100%25-brightgreen">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
  
  <a href="https://github.com/goncadanilo/">
    <img alt="Author" src="https://img.shields.io/badge/author-Danilo%20Gon%C3%A7alves-blue">
  </a>
</p>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-descrição">Descrição</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#arrow_forward-como-rodar">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#art-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<br>

<p align="center">
  <img alt="Desafio Fale Mais" src=".github/banner.png" width="85%">
</p>

## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [MongoDB](https://docs.mongodb.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## 📋 Descrição

Esse projeto é um serviço que calcula o custo de algumas chamadas baseando-se em uma tabela
tarifas fixas. Esse serviço foi desenvolvido com Typescript e Node.js, também foi usado um banco 
NoSql, o MongoDB, para armazenar as tarifas de cada ligação.

O serviço recebe, através de uma requisição HTTP(GET) as seguintes informações: 

- **origin**: cádigo DDD do número que está realizando a chamada
- **destiny**: cádigo DDD do número que está recebendo a chamada
- **time**: o tempo total da chamada
- **plan**: o plano que o cliente deseja calcular

Depois calcula o custo da chamada e retorna:

- **withPlan**: o custo da chamada utilizando o plano escolhido
- **withoutPlan**: o custo da chamada sem utilizar nenhum dos planos disponíveis

Caso ocorra um erro, será retornado uma mensagem do erro.

A aplicação foi hospedada no [Heroku](https://www.heroku.com/), e foi utilizado o github actions para CI.
A aplicação está disponível no endereço: **https://falemais-danilo.herokuapp.com/client/**.

## :arrow_forward: Como rodar

Antes de tudo, instale as dependências do projeto com o seguinte comando `yarn` ou `npm install`.

Obs: para rodar localmente, troque o valor do **baseUrl** na linha 5 do arquivo [calculateCallCost.js](https://github.com/goncadanilo/desafio-fale-mais/blob/master/client/services/calculateCallCost.js) para `http://localhost:3333`.

#### Localmente com Node.js

- Para dar build na aplicação, use o comando `yarn build` ou `npm run build`.
- Para rodar a aplicação use o comando `yarn start` ou `npm run start`.
- Para rodar a aplicação em modo watch, use o comando `yarn start:dev` ou `npm run start:dev`.
- Se tudo ocorrer bem a aplicação vai estar disponível no endereço: **http://localhost:3333/api/v1**.
- O front end da aplicação vai estar disponível em: **http://localhost:3333/client**.

#### Localmente com Docker

- Para subir o container da aplicação, use o comando `yarn up` ou `npm run up`.
- Para desfazer o container, use o comando `yarn down` ou `npm run down`.
- Se tudo ocorrer bem a aplicação vai estar disponível no endereço: **http://localhost:3333/api/v1**.
- O front end da aplicação vai estar disponível em: **http://localhost:3333/client**.

#### Como rodar os testes

- Para rodar os testes basta usar o comando `yarn test` ou `npm run test`.
- Para rodar os testes com coverage, use o comando `yarn test:cov` ou `npm run test:cov`.

## :art: Layout

<p align="center">
  <img alt="Form" src=".github/form.png">
  <br>
  <img alt="Modal" src=".github/modal.png">
</p>

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ♥ by [Danilo Gonçalves](https://github.com/goncadanilo). Me adicione no [LinkedIn](https://www.linkedin.com/in/goncadanilo/) :wave:
