# Node_GCP_S3

## SOBRE

- Este projeto é sobre a criação de um endpoint desenvolvido em node.js e express.js para subir arquivos de imagem no GCP S3

## REQUISITOS

- node 16.^
- npm 8.^
- conta no GCP (Google Cloud Platform)
- Criar bucket (S3) no GCP

## ENDPOINT

- post - /api/upload (recebe imagem e faz o upload no S3 do GCP)

## PASSOS

Primeiro, após extrair o projeto do git, execute os comandos abaixo dentro da pasta do projeto.

Crie um arquivo .env e nele coloque as credenciais para a conexão com o GCP. Utilize o arquivo setting.env como base.

S3_BUCKET é o nome do bucket
PROJECT_ID é o nome do projeto

```
yarn install
```

```
yarn start
```
