
// Modelo de Objeto: Mulher

const mongoose = require('mongoose')

const MulherSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    imagem: {
        type: String,
        require: true
    },
    citacao: {
        type: String,
        require: true
    },
    minibio: {
        type: String,
        require: true
    }

})

// O s de divaS quem inclui é o db mongodb:
module.exports = mongoose.model('diva', MulherSchema)

// Mongodb gera id automaticamente e inclui o s na lista diva.