<h1 align="center">
  📞 Fale Mais
</h1>

<p align="center">
  <img alt="Languages" src="https://img.shields.io/badge/languages-2-blue">
  
  <img alt="Coverage" src="https://img.shields.io/badge/coverage-100%25-brightgreen">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
  
  <img alt="Author" src="https://img.shields.io/badge/author-Danilo%20Gon%C3%A7alves-blue">
</p>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-descrição">Descrição</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#arrow_forward-como-rodar">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<br>

<p align="center">
  <img alt="Desafio Fale Mais" src=".github/banner.png" width="80%">
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

O serviço recebe, atravez de uma requisição HTTP(GET) as seguintes informações: 

- origin: cádigo DDD do número que está realizando a chamada
- destiny: cádigo DDD do número que está recebendo a chamada
- time: o tempo total da chamada
- plan: o plano que o cliente deseja calcular

Depois calcula o custo da chamada e retorna seguintes resultados:

- withPlan: o custo da chamada utilizando o plano escolhido
- withoutPlan: o custo da chamada sem utilizar nenhum dos planos disponíveis

## :arrow_forward: Como rodar

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ♥ by [Danilo Gonçalves](https://github.com/goncadanilo). Me adicione no [LinkedIn](https://www.linkedin.com/in/goncadanilo/) :wave:
