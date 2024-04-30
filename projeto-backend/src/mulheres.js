// POST = ROTA CRIA MULHERE
// post_cria_mulher.js

// Iniciando a biblioteca express:
const express = require('express')
// Configurando a primeira parte da rota:
const router = express.Router()
// Trazer o pacote cors que permite consumir essa API no FRONTEND
const cors = require('cors')
// Liga com Arquivo de Conexão com Banco de Dados Nuvem MongoDB:
const conectaBancoDeDados = require('./bancoDeDados')
// Chamar a função conectaBancoDeDados:
conectaBancoDeDados()
// Liga com Arquivo de Conexão com o mulherModel para Nuvem MongoDB:
const Mulher = require('./mulherModel')


// Iniciando o app:
const app = express()
app.use(express.json())
// Precisa permitir que use:
app.use(cors())
// Criando a porta:
const porta = 3333

// APAGADO: // Criando a lista inicial de mulheres:

//? Função GET=READ mostra mulheres:
async function mostraMulheres(request, response) {
    try {
        const mulheresVindasDoBancoDeDados = await 
        Mulher.find()

        response.json(mulheresVindasDoBancoDeDados)

    }catch (erro) {
        console.log(erro)
    }
}

//? Função POST=CREATE cria mulher:
async function criaMulher(request, response) {
    const novaMulher = new Mulher ({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
    })
    try {
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada)
    } catch (erro) {
        console.log(erro)
    }
}

//?  Função PATCH=UPDATE alterar mulher:
async function corrigeMulher(request, response) {
    try {
        const mulherEncontrada = await Mulher.findById(request.params.id)

        if (!mulherEncontrada) {
            return response.status(404).json({ error: 'Mulher não encontrada' });
        }

        // Para verificar se houve alterações no corpo: 
        if (request.body.nome) {
            mulherEncontrada.nome = request.body.nome;
        }
        if (request.body.imagem) {
            mulherEncontrada.imagem = request.body.imagem;
        }
        if (request.body.minibio) {
            mulherEncontrada.minibio = request.body.minibio;
        }
        if (request.body.citacao) {
            mulherEncontrada.minibio = request.body.citacao;
        }

        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()
        // Resposta:
        response.json(mulherAtualizadaNoBancoDeDados);
    } catch (erro) {
        console.log(erro)
    }
}

//? Função DELETE=DELETE apagaMulher:
async function deletaMulher(request, response) {
    try {
        // encontrar a mulher e deleta:
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({ messagem: 'Cadastro excluído com sucesso!'})

    } catch(erro) {
        console.log(erro)
    }
}

//? ROTAS:
// Configuração rota GET/mulheres:
app.use(router.get('/mulheres', mostraMulheres))
// Configuração rota POST/mulheres:
app.use(router.post('/mulheres', criaMulher))
// Configuração rota PATCH/mulheres/:id:
app.use(router.patch('/mulheres/:id', corrigeMulher))
// Configuração rota DELETE/mulheres/:id:
app.use(router.delete('/mulheres/:id', deletaMulher))


// Função mostra porta  criada:
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}
// Servidor ouvindo a pprta:
app.listen(porta, mostraPorta)


// "citacao": "1 2 3 testando citacao"

//? Para Rodar no Terminal:
// Ctrl+C => interrompe o servidor anterior
// No Terminal/PowerShell/Na Pasta do arquivo .js => node mulheres.js 

//? Para Rodar no Navegador:
// http://localhost:3333
// http://localhost:3333/mulher
// http://localhost:3333/mulheres  ok
// http://localhost:3333/mulheres/1 com id

// ? Pode incluir dados usando o insomnia! Dados estão persistindo no DB

// ! EQUIVALÊNCIAS DE VERBOS:
//? Verbos FUNÇÃO: criaMulher(), mostraMulher(), corrigeMulher(), deletaMulher()
//? Verbos HTTP: POST, GET, PATCH e DELETE.
//? Verbos CRUD: CREATE, READ, UPDATE e DELETE.
// ? Verbos MongoDB: SAVE, FIND, SAVE, FINDBYIDANDDELETE (Abstração Mongoose)

// {
// 	"nome":"Luana Pimentel",
// 	"imagem":"https://i.ytimg.com/vi/oTyPar_vnJA/maxresdefault.jpg",
// 	"minibio":"Desenvolvedora Sênior"
// }


// {
// 	"nome":"Lilian Castro Kelian",
// 	"imagem": "https://media.licdn.com/dms/image/D4D03AQHDMVrPhE672g/profile-displayphoto-shrink_800_800/0/1703080564879?e=1718841600&v=beta&t=L56Xet2Sz3oyjcreAK07EJtL2gJ-AvzTnEjGN5yk4z8",
// 	"minibio": "Analista de sistemas - Developer C#"
// }

// Teste Insomnia - PATCH

// {
// 	"minibio": "Desenvolvedora e Instrutora da PrograMaria"
// }

// Função deletar:

// {
//     id: '5',
//     nome: 'Danielle Freire',
//     imagem: 'https://media.licdn.com/dms/image/D5603AQF8i5IDugwprg/profile-displayphoto-shrink_400_400/0/1665002109064?e=1715212800&v=beta&t=qxxLT5xwMSJS3bxkxdiepyHv0bLIpXmE_xcMYftqAbI',
//     minibio: 'Assitente de Vendas'
// },