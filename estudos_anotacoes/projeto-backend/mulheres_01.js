// ROTA MULHERES

const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

// Guardar a lista de mulheres numa Constante ARRAI:
// Um Arrai de Objetos = como um banco de dados
const mulheres = [
    {
        nome: 'Marcia Moreira',
        imagem: 'https://avatars.githubusercontent.com/u/124640912?s=400&u=5fc376fdea0b46010c4822aa71f99e20fdd22b7a&v=4',
        minibio: 'Desenvolvedora Full Stack'
    },
    {
        nome: 'Silmara Conceição',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e Instrutora'
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'CEO & Founder da PrograMaria'
    },
    {
        nome: 'Luana Pimentel',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Senior Staff Software Engineer'
    },
    {
        nome: 'Danielle Freire',
        imagem: 'https://media.licdn.com/dms/image/D5603AQF8i5IDugwprg/profile-displayphoto-shrink_400_400/0/1665002109064?e=1715212800&v=beta&t=qxxLT5xwMSJS3bxkxdiepyHv0bLIpXmE_xcMYftqAbI',
        minibio: 'Assitente de Vendas'
    },
    {
        nome: 'Nina da Hora',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Hacker antirracista'
    },
]

function mostraMulheres(request, response) {
    response.json(mulheres)
    // json formato arq
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)


//? Para Rodar no Terminal:
// Ctrl+C => interrompe o servidor anterior
// No Terminal/PowerShell/Na Pasta do arquivo .js => node mulheres.js 

//? Para Rodar no Navegador:
// http://localhost:3333
// http://localhost:3333/mulher
// http://localhost:3333/mulheres  ok

