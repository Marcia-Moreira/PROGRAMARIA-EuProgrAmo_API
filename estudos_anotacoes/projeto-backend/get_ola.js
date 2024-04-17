//! PARA CRIAR CONFIGURAÇÃO DA ROTA SERVIDOR GET_ola:

// Para usar o express
const express = require("express")
//  Criada função Rota (função que vem do express)
const router = express.Router()

const app = express()
// identifificador+apelido+atribuição+valor
const porta = 3333

// Criada Função Mostra Olá! (Requisição e Resposta)
function mostraOla(request, response) {
    response.send("Olá, Mundo!")
}
// send = enviar

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

// mostraPorta()
app.use(router.get('/ola', mostraOla))
app.listen(porta, mostraPorta)

// No Navegador:
// http://localhost:3333/ola

//? Para Rodar no Terminal:
// No Terminal/PowerShell/Na Pasta do arquivo .js => node get_ola.js 
// Ctrl+C => interrompe o servidor

// Resposta no Navegador => http://localhost:3333/  Cannot GET /  Pois ainda não temos nada para mostrar

// http://localhost:3333/ola
// "Olá, mundo!"

