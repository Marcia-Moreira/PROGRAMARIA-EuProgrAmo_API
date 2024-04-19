// POST = ROTA CRIA MULHERE
// post_cria_mulher.js

// Iniciando a biblioteca express:
const express = require('express')
// Configurando a primeira parte da rota:
const router = express.Router()
// Retire do site npm para informar que está usando:
const { v4: uuidv4 } = require('uuid')
// Liga com Arquivo de Conexão com Banco de Dados Nuvem MongoDB:
const conectaBancoDeDados = require('./bancoDeDados')
// Chamar a função conectaBancoDeDados:
conectaBancoDeDados()
// Liga com Arquivo de Conexão com o mulherModel para Nuvem MongoDB:


// Iniciando o app:
const app = express()
app.use(express.json())
// Criando a porta:
const porta = 3333

// Guardar a lista de mulheres numa Constante ARRAI:
// Um Arrai de Objetos = como um banco de dados
// Criando a lista inicial de mulheres:
const mulheres = [
    {
        id: '1',
        nome: 'Marcia Moreira',
        imagem: 'https://avatars.githubusercontent.com/u/124640912?s=400&u=5fc376fdea0b46010c4822aa71f99e20fdd22b7a&v=4',
        minibio: 'Desenvolvedora Full Stack'
    },
    {
        id: '2',
        nome: 'Silmara Conceição',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e Instrutora'
    },
    {
        id: '3',
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'CEO & Founder da PrograMaria'
    },
    {
        id: '4',
        nome: 'Luana Pimentel',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Senior Staff Software Engineer'
    },
    {
        id: '5',
        nome: 'Danielle Freire',
        imagem: 'https://media.licdn.com/dms/image/D5603AQF8i5IDugwprg/profile-displayphoto-shrink_400_400/0/1665002109064?e=1715212800&v=beta&t=qxxLT5xwMSJS3bxkxdiepyHv0bLIpXmE_xcMYftqAbI',
        minibio: 'Assitente de Vendas'
    },
    {
        id: '6',
        nome: 'Nina da Hora',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Hacker antirracista'
    },
]

//? Função GET=READ mostra mulheres:
function mostraMulheres(request, response) {
    response.json(mulheres)
    // json formato arq
}

//? Função POST=CREATE cria mulher:
function criaMulher(request, response) {
    const novaMulher = {
        id: uuidv4(),
        // Biblioteca uuid gera id automático
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }

    // Lista mulheres, receba novaMulher:
    mulheres.push(novaMulher);

    response.json(novaMulher);

    // Instalar biblioteca uuid no terminal pwshl:
    // => npm install uuid ou npm install uuid --save
}

//?  Função PATCH=UPDATE alterar mulher:
function corrigeMulher(request, response) {
    // Para encontrar a mulher específica:
    function encontraMulher(mulher) {
        return mulher.id === request.params.id;
        // if (mulheres.id === request.params.id) {
        //     return mulher
        // }
        // No insomnia: HTTP Request / PATCH / http://localhost:3333/mulheres/2 / Escreve o Teste abaixo no Body /Terminal rodando => node mulheres.js / SEND 

        // Teste Insomnia - PATCH
        // {
        // 	"minibio": "Desenvolvedora e Instrutora da PrograMaria"
        // }
    }
    const mulherEncontrada = mulheres.find(encontraMulher);

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

    // Resposta:
    response.json(mulheres);
}

//? Função DELETE=DELETE apagaMulher:
function deletaMulher(request, response) {
    function todasMenosEla(mulher) {
        if(mulher.id !== request.params.id) {
            return mulher
        }
    }
    const mulheresQueFicam = mulheres.filter(todasMenosEla)

    response.json(mulheresQueFicam)

    // Teste No Insomnia: HTTP Request / DELETE / http://localhost:3333/mulheres/5 / Terminal rodando => node mulheres.js / SEND 
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



//? Para Rodar no Terminal:
// Ctrl+C => interrompe o servidor anterior
// No Terminal/PowerShell/Na Pasta do arquivo .js => node mulheres.js 

//? Para Rodar no Navegador:
// http://localhost:3333
// http://localhost:3333/mulher
// http://localhost:3333/mulheres  ok
// http://localhost:3333/mulheres/1 com id


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