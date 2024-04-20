// Crie o código para quando acessar o endereço localhost:3333/hora no navegador, você receba a hora local. Como você criaria uma rota e visualizaria essa informação na página do navegador?

// =========Chamada Biblioteca================
const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

// ========Constantes Hora====================
const data = new Date()
const hora = data.toLocaleTimeString('pt-BR')

// ========Função Mostra Hora=================
function mostraHora(request, response) {
    response.send(hora)
}
// ========Função Mostra Porta================
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}
// =========Rotas Navegador===================
app.use(router.get('/hora', mostraHora))
app.listen(porta, mostraPorta)


// =========Procedimentos Rodar Código========
//? Para Rodar no Terminal: 
//? (Primeiro ative o servidor local)
// Ctrl+C => interrompe o servidor anterior
// No Terminal/PowerShell/Na Pasta do arquivo .js => node hora_do_navegador.js 

//? Para Rodar no Navegador:
//? (Depois rode a rota no navegador)
// http://localhost:3333
// http://localhost:3333/mulher
// http://localhost:3333/mulheres
// http://localhost:3333/hora ok

// ============================================



