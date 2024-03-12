//! PARA CRIAR SERVIDOR:
// Estrutura Básica de um Servidor:

// Para usar o express
const express = require("express")

const app = express()
// identifificador+apelido+atribuição+valor
const porta = 3333

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

// mostraPorta()
app.listen(porta, mostraPorta)





//? Para Rodar no Terminal:
// No Terminal/PowerShell/Na Pasta do arquivo .js => node server.js 

// Resposta no Navegador => http://localhost:3333/  Cannot GET /  Pois ainda não temos nada para mostrar