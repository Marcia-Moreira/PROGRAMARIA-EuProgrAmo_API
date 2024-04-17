//! MOSTRA GET mulher NO NAVEGADOR:

const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

// Criar função Mostra Mulher: Função é um Verbo:
function mostraMulher(request, response) {
    // Criação do Objeto Mulher .json
    response.json({
        nome: 'Silmara Conceição',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e Instrutora'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

// mostra mulher no Navegador, usando rota: 
app.use(router.get('/mulher', mostraMulher))
// mostraPorta no Terminal
app.listen(porta, mostraPorta)


//? Para Rodar no Terminal:

// Ctrl+C => interrompe o servidor anterior
// No Terminal/PowerShell/Na Pasta do arquivo .js => node mulher.js 

// Agora com servidor rodando, vá para o navegador e cole:
// http://localhost:3333/mulher

// R: Mostrará o json da silmara.