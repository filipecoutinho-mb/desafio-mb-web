# Desafio MB Web

Esta é uma aplicação web simples que simula uma tela de cadastro de usuários com 4 passos.<br>
O client foi desenvolvido utilizando vue.js 3, o servidor com nodejs e express, e a aplicação é renderizada no servidor utilizando os métodos nativos de SSR do Vite.


```mermaid
flowchart LR
    Client(Vue Registration Component) --> Server(NodeJS Express API)
```


## Requisitos

|         | Versão    |
| ------- | --------- |
| _Node_  | `18.18.2` |
| _NPM\*_ | `9.8.1`   |

## Set up da aplicação

Instalar todas as dependências

```console
npm install
```

---

Rodar a aplicação no modo de desenvolvimento

```console
npm run dev
```

---

## Layout

O layout em que a aplicação foi baseada.

![Telas Desafio MB Web](https://user-images.githubusercontent.com/83235141/225743749-ca86ca69-5902-4a75-bb42-d6c0fc169bf4.png)

## Endpoints

`[GET] /registration`

- Responsável por renderizar um html simples que irá carregar os componentes do formulário.

`[POST] /registration`

- Responsável por receber os dados submetidos pelo usuário em formato JSON.
