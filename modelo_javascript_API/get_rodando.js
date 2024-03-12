//! MOSTRA GET NO NAVEGADOR:

const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraGetOk(request, response) {
    response.send("Servidor rodando e mostrando GET OK")
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

// mostraPorta()
app.use(router.get('/getOk', mostraGetOk))
app.listen(porta, mostraPorta)


//? Para Rodar no Terminal:
// No Terminal/PowerShell/Na Pasta do arquivo .js => node get_ola.js 
// Ctrl+C => interrompe o servidor

// http://localhost:3333/get

