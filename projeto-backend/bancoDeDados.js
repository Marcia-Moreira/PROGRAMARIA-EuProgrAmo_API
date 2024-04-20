// Banco de Dados Nuvem - mongoDB

// Após instalar a biblioteca Mongoose, precisamos traze-la para dentro do projeto:
const mongoose = require('mongoose')
// Para Proteger Dado Sensível/senha:
require('dotenv').config()

// Criar função que conecta o Banco de Dados:
async function conectaBancoDeDados() {
    try {
        console.log('Conexão com o Banco de Dados iniciou...')

        // Para Proteger Dado Sensível:
        // Salvar a string em lugar seguro: .env e não enviar pro GitHub
        await mongoose.connect(process.env.MONGO_URL)

        console.log('Conexão com o Banco de Dados feita com sucesso!')

    } catch(erro) {
        console.log(erro)
    }
}
// Async = Assincrono do Java Script
// Await = enquanto conecta, libera para outras atividades
// Try e Catch = Para mitigar as falhas externas e mostrar erro.

// Para não precisar colar esse códido dentro do programa/arquivo/servidor mulheres.js, usaremos o exports:
module.exports = conectaBancoDeDados


// ======================

// Para incluir Mulheres no Banco de Dados, pode usar o Insomnia, nesse padrão:

// {
// 	"nome": "Nina da Hora",
//   "imagem": "https://bit.ly/3FKpFaz",
//   "minibio": "Hacker antirracista",
// 	"citacao": "1 2 3 testando citacao"
// }