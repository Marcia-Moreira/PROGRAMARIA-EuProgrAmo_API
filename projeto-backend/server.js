//! MODELO BASE PARA CRIAR SERVIDOR:
// Estrutura Básica de um Servidor:

const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.listen(porta, mostraPorta)


//? Para Rodar no Terminal:
// No Terminal/PowerShell/Na Pasta do arquivo .js => node server.js 

//? Para Rodar no Navegador:
// http://localhost:3333
// http://localhost:3333/mulher
// http://localhost:3333/mulheres

