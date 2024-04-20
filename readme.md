# Bootcap PrograMaria - EuProgrAmo - Construindo uma API
EAD - 2024  


## Tecnologias:

- JavaScript / NodeJS / Insomnia / Laravel??? / Git / GitHub / 
<!-- - Virtualenv /???? -->

## Ferramentas:  
- Node.js (https://nodejs.org/pt-br/download)
  O Node.js é a ferramenta que vai ajudar o computador a entender o JavaScript fora do navegador.

- ferramenta x


--  

M

--

Ambiente Virtual  
Flask  
JavaScript Back-End
JavaScript Front-End
Pensamento Computacional

--

Dicionário de Mulheres Programadoras:


--


-------------------------------------------------

# Sobre o Node.js 

No terminal VSCode PowerShell:

- Verificar versão do Node no VSCode => $ node -v  
  (v20.10.0 em 08-03-2024)

- Verificar o diretório do Node => $ which node

- Para RODAR o Node.js no Terminal PowerShell => node nome_do_arquivo.js

- Para iniciar a construção de um Pacote onde colocaremos o código => npm init -y 

- Para instalar um Pacote => npm install express  (express = pacote de servidor)
  
- Até aqui, na pasta projeto-backend/ node_modules, foram criados arquivos: package.json e package-lock.json
  
- Criar arquivo server.js (Que será nosso servidor!) dentro da pasta projeto-backend 

- Pra rodar os arquivos .js , devemos estar na pasta exata onde o arquivo está.
  (Para Listar as pastas => ls)
  (Para entrar em alguma pasta => cd nome_da_pasta)

- Para rodar o código do arquivo.js criado no servidor local => node nome_do_arquivo.js (enter)

- Com o servidor local rodando na porta xxx, vá para o navegador e use a rota do arquivo.

- GET (Pegar) -> Criar arquivo get_ola.js


# Comandos GIT

No terminal git bash:

=> git init

=> git config --global user.email seuEmailAqui

=> git config --global user.name seuNomeAqui

=> git add remote linkDoSeuRepoAqui

=> git add.
=> git commit -m 'sua mensagem aqui'
=> git push

Aula 5.1

- Crie um arquivo .gitignore
  Inclua os arquivos que não vão subir pro GitHub: node_models 

- No terminal gitbash: => git init (do projeto)
=> git init
  
- Pegar o link do repositório se criou direto no github para integrar com o bash: com git remote add...
=> git add remote linkDoSeuRepoAqui

- Aí pode começar a subir alterações:
=> git add.
=> git commit -m 'sua mensagem aqui'
=> git branch -M main
=> git push

# Servidor WEB - GitHub Pages


# Fazer Deploy no Render.com
Render

É o serviço que vamos usar para fazer deploy do nosso código em produção, ou seja, prontinho para ter os dados acessados por meio de um link: https://render.com/

https://dashboard.render.com/

Entrar -> Logar com a conta do github -> 

Complete as informações conforme abaixo
Nome: back-end
Região: Ohio
Branch: main
Root: não mudar
Runtime:node
Build Command: npm install
Start Command: node mulheres

# Criando Rotas - POST
Dentro do conjunto de regras do HTTP, o verbo que realiza criação de informações é chamado de POST, que na tradução para português seria "publicar" 💻


# Para testar o POST sem front = Insomnia

https://insomnia.rest/download

Não funcionou!

# Para alterar dados PATCH/Correção

Patch/Mulheres/:id
localhost:3333/mulheres/:id

Id da mulher que queremos alterar.


# Verbos HTTP e CRUD

Verbos HTTP: POST, GET, PATCH e DELETE.
Verbos CRUD: CREATE, READ, UPDATE e DELETE.

# Banco de Dados - MongoDB

- Criar conta no MongoDB
- Configurar espaço onde salvar dados
- Pegar dados e usar no projeto
- Criar modelo do Objeto e lista (coleção)
- Editar funções para salvar informações no banco.


MongoDB
https://www.mongodb.com/

Conta Gmail 
Conta Google

Cadastro Site MongoDB:
Marcia Moreira
id.marcia.moreira@gmail.com
Senha - Mm@1331228113

Banco de Dados Test Divas 


https://cloud.mongodb.com/v2/662175ab6a2ae05ae98073d4#/security/network/accessList

# String de conexão de banco de dados:

  - String API PrograMaria: mongodb+srv://idmarciamoreira:jhj9eVkrRdiYtToo@clustermulheresprograma.nttdarg.mongodb.net/

  - String Local (Caso tenha o db Instalado) - Padrão: mongodb://127.0.0.1:27017 

# Biblioteca Mongoose - Ferramenta que liga o Projeto ao Banco de Dados

- Instalar no Terminal VSCode PowerShell dentro da pasta do projeto:
=> npm install mongoose 

Após instalar, podemos verificar no arquivo package.json, se o nome mongoose aparece em 'dependencias'.

# Modelagem de Banco de Dados

- Criar Modelo - Objeto Mulher
- 


# Segurança das Informações - Dados

Não podemos deixar nossa senha do banco de dados na string, aberta no código!

Eliminar vulnerabilidade: dot .env

Instalar pacote dotenv => npm install dotenv

Criar arquivo .env , incluir no .gitignore e colar a string com senha do banco no MONGO_URL

Retirar a senha do servidor mulheres e configurar...

# Liberação CORS (Cross-origin Resource Sharing)

Para liberar para o código funcionar no front-end (não só no insomnia)

Instalar o Pacote cors => npm install cors

Configurar o servidor mulheres, chamando o cors e app cors

# Enfim o DEPLOY:

<!--? Parei na trilha 9  -->











==========================================================================

Links:

Download Google Chrome:  
https://support.google.com/chrome/answer/95346?hl=pt-BR&co=GENIE.Platform%3DDesktop#zippy=

Mulheres em Tech Brasil (página front):   
https://front-programaria-react-omega.vercel.app/

Meu primeiro projeto back-end (GitHub PrograMaria)  
https://github.com/euprogramo/meu-primeiro-projeto-back-end

O que é JavaScript?  
https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript  

Baixar Node.JS  
https://nodejs.org/pt-br/download

Instalação do Node.JS - Linux, Windows, Mac  
https://www.treinaweb.com.br/blog/instalacao-do-node-js-windows-mac-e-linux

Instalar Node.JS no Windows 7  
https://www.css-techhelp.com/post/install-node-js-on-windows-7

O que é exatamente o Node.JS?  
https://www.freecodecamp.org/portuguese/news/o-que-e-exatamente-o-node-js/

O que é Node.JS?  
https://www.alura.com.br/artigos/node-js

Node.JS - definições, características e usos possíveis  
https://www.alura.com.br/artigos/node-js-definicao-caracteristicas-vantagens-usos

# VSCode

VS Code: guia completo para instalar, usar e personalizar  
https://blog.betrybe.com/ferramentas/vs-code-guia-completo/

Como baixar e configurar o Visual Studio Code para iniciantes  
https://www.youtube.com/watch?v=uxln1hT_Ev4

--------------------------------------------------
# Console.log e sintaxe:

Conceitos de Sintaxe  
https://conceitos.com/sintaxe-programacao/

Linguagens de Programação  
https://www.ic.unicamp.br/~lehilton/cursos/1s2020/mc102qr/unidades/03-linguagens-programacao.html

# NPM 

npm JavaScript  
https://www.npmjs.com/about

O que é npm?  
https://www.hostinger.com.br/tutoriais/o-que-e-npm

O que significa cada palavra reservada
https://www.devmedia.com.br/o-que-significa-cada-palavra-reservada/8320

O que é um servidor?  
https://coodesh.com/blog/dicionario/o-que-e-um-servidor/

Pensamento Computacional (artigo)  
https://periodicos.utfpr.edu.br/rbect/article/view/4711/pdf

Pensamento Computacional: o que é e como funciona  
https://www.ecycle.com.br/pensamento-computacional/

Como se constrói um algoritmo  
https://revistapesquisa.fapesp.br/wp-content/uploads/2018/04/2-algoritmos_como-se-constroi.jpg

O que é e como funcionam os algoritmos?  
https://www.youtube.com/watch?v=Xo1V_JL1yAg

O mundo mediado por algoritmos  
https://revistapesquisa.fapesp.br/wp-content/uploads/2018/04/018-025_capa-algoritmos_266novo.pdf

Qual a diferença entre HTTP e HTTPS?  
https://www.alura.com.br/artigos/qual-e-diferenca-entre-http-e-https?gclid=CjwKCAjw586hBhBrEiwAQYEnHaC0ES4vP0ZuCBY9Q5WrYRDlIqwvnC5mTTeU6nCsi-t4b3Y8BtsLSRoCzggQAvD_BwE

HTTP: VERBOS  
https://www.devmedia.com.br/http-verbos/41224

O que é HTTP, request, GET, response...?  
https://www.treinaweb.com.br/blog/o-que-e-http-request-get-post-response-200-404

Trabalhando com objetos  
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects

Array  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

Introdução ao JSON  
https://www.json.org/json-pt.html






=====================================================================

# Anotações Diversas:

 Esse comando init inicia a construção do pacote onde você vai colocar o seu código, o -y preenche de forma automática as informações básicas sobre nosso projeto. Essas informações aparecem no arquivo que foi gerado automaticamente, chamado package.json. Todo pacote tem este arquivo para garantir que o pacote tenha as informações básicas.

 R: Wrote to C:\Projetos_MM\PROGRAMARIA-EuProgrAmo_API\estudos_anotacoes\projeto-backend\package.json:

{
  "name": "projeto-backend",
  "version": "1.0.0",
  "description": "",
  "main": "oi.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

- Atualizar versão do node.js pelo vscode:
Npx (Node Package Manager):
Instale o pacote `npx`  
=> npm install -g npx
Verifique as versões disponíveis  
=> npx npm view node-version --json | jq '.versions'
Instale a versão desejada  
=> npx install node@<versão>
Ative a versão desejada  
=> npx node@<versão> -v

Express é o pacote que nos ajuda a dar o super poder de servidor pra nosso projeto, ele é o responsável por dizer que estamos criando um código de backend que irá enviar, receber e armazenar informações/dados. 
R: npm install express 

added 64 packages, and audited 65 packages in 5s

12 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities 

No node, aquela ferramenta que estamos usando que torna possível usar o JavaScript para construir coisas para o back-end, todo código deve ser organizado em pacotes. Um pacote é uma pasta com diferentes arquivos e pastas com código. Existem mais de 1 milhão de pacotes prontos no npm  

O NPM é um gerenciador de pacotes: ele busca, instala e atualiza pacotes para o Node.js 

Para usar essa facilidade, precisamos pedir para que o computador nos ajude a solicitar esses pacotes. 🖥️

Cada pacote traz algumas soluções prontas, que só precisamos pegar e usar. Esses pacotes também são chamados de bibliotecas ou libs (libraries), porque são coleções de código.🗂️

Vamos usar no terminal o comando:
=> npm init -y

Esse comando init inicia a construção do pacote onde você vai colocar o seu código, o -y preenche de forma automática as informações básicas sobre nosso projeto. Essas informações aparecem no arquivo que foi gerado automaticamente, chamado package.json. Todo pacote tem este arquivo para garantir que o pacote tenha as informações básicas.

Como declarar uma função:

- Usamos a palavra reservada function

- Podemos dar um identificador

- não esquecer de usar os parenteses

- e dentro das chaves colocamos as instruções

A partir de agora você pode usar mostraPorta() em vez de escrever as instruções que estão dentro da função.


================================

A seguir, um passo a passo do que não pode faltar ao documentar API. Enumere-os e forneça informações como:

Descrição da funcionalidade provida;
Parâmetros de entrada — aqui, é importante especificar quais são obrigatórios e quais são opcionais, bem como o tipo do valor esperado para cada um. Da mesma maneira, é importante deixar clara a forma como o valor é recebido (por querystring, pelo cabeçalho ou corpo da requisição, etc.);
Formato da resposta (e.g. Application JSON, XML, etc.);
Requerimento ou não de autenticação;
Limitação de uso;
No caso de uma API baseada no protocolo HTTP, especificação os métodos aceitos pelo endpoint;
Descrição dos possíveis retornos, tanto em caso de sucesso quanto os possíveis valores de erro — especifique, além dos códigos de erro, uma descrição que deixe claro o motivo pelo qual a requisição não pode ser atendida.

======================================