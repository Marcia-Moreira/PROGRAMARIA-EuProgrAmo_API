<!-- Preparando Ambiente do Projeto: -->


No Terminal VSCode PowerShell:


=====================================
1- Ambiente Virtual

No Node não precisa criar ambiente virtual!!!! Rever essa informação.

=====================================
2- Pacote NPM do Node (nmp é um gerenciador de pacotes/bibliotecas/libs: busca, instala e atualiza pacotes para o Node.JS)

=> npm init -y

<!-- Criou o package.json dentro do projeto -->

PS C:\Projetos_MM\PROGRAMARIA-EuProgrAmo_API\estudos_anotacoes\projeto-backend> npm init -y                    
Wrote to C:\Projetos_MM\PROGRAMARIA-EuProgrAmo_API\estudos_anotacoes\projeto-backend\package.json:

{
  "name": "projeto-backend",
  "version": "1.0.0",
  "main": "oi.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",   
    "start": "node server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.3"
  },
  "devDependencies": {},
  "description": ""
}

===================================

3- Pegando nosso primeiro pacote/biblioteca:

Vamos trazer o pacote express:
  
=> npm install express

(Criou node_modules e o package-lock.json)

=====================================

4- Criar arquivo do Servidor:

server.js

=> node server.js

(No server.js faça a função e rode no terminal. Use o pacote express e inicie o servidor. E então, faça seu primeiro teste no servidor.)

PS C:\Projetos_MM\PROGRAMARIA-EuProgrAmo_API\estudos_anotacoes\projeto-backend> node server.js
Servidor criado e rodando na porta  3333

=====================================

5- Pensamento Computacional:

- Decomposição (dividir em partes menores)
- Abstração (nomear conceitos)
- Padrão (reconhecer padrões)
- Algorítmos (criar sequenciA finita de passo a passo lógico)

=====================================

6- get_ola.js

GET/ola

localhost:3333/ola -> "Olá, Mundo"

*localhost é um servidor local apenas do seu computador

Função Mostra Porta:

function mostraPorta(request, response) {
    response.send('Olá mundo!')
}

===================================

Rodar a rota mulher! no Servidor


==================================

Rodar a lista Mulheres




<!--! Parei no video 4.3 exercicio Exercício de Código | Hora local -->

4.4 - Lendo mensagens de erro

Mais um exercício para você ficar craque no GET! 🥰

Crie o código para quando acessar o endereço localhost:3333/hora no navegador, você receba a hora local. Como você criaria uma rota e visualizaria essa informação na página do navegador?

Para te ajudar, esta é a função que captura o horário local:

function mostraHora(request, response) {

 const data = new Date()

 const hora = data.toLocaleTimeString('pt-BR')

 response.send(hora)

}
Gararito:
Gabarito💻

const express = require('express') 

const router = express.Router()

const app = express()



const PORTA = 3333



function mostraHora(request, response) {

 const data = new Date()

 const hora = data.toLocaleTimeString('pt-BR')

 response.send(hora)

}

function mostraPorta() {

    console.log(`Servidor criado e rodando na porta ${PORTA}`)

}



app.use(router.get('/hora', mostraHora))

app.listen(PORTA, mostraPorta)


=====================================

