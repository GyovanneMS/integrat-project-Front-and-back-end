/*=========================================================
* Objetivo: API para o trabalho com alunos;
* Data: 15/09/22
* Autor: Gyovanne Martins
* Versão: 1.0.0
=========================================================*/

//import da biblioteca da express para criar a API
const express = require("express");

//import da biblioteca do cors para manipular as permissões de protocolo HTTP
const cors = require("cors");

//import da bibliotexa do body-parser que irá manipular o corpo das requisições do protocolo HTTP
const bodyParser = require("body-parser");

const { iconeSigla } = require("./modulos/infoCurso.js");
const { infoAlunos, infoUmAluno, informationMatricula } = require("./modulos/infoAlunos.js");

const app = express();

app.use((request, response, next) => {
    //Permite especificar quem serão os IPs que podem acessar a API (* -> ssignifica todos)
    response.header('Access-Control-Allow-Origin', '*');

    //Permite especificar quais serão os verbos ou métodos que a API irá reconhecer
    response.header('Access-Control-Allow-Methodos', 'GET, POST, PUT, DELETE, OPTIONS');

    //Estabelece que as permissões acima serão representadas pelo cors
    app.use(cors());

    next();
});

app.get('/informacoesDosCursos', cors(), async function(request, response, next){
    //recebe a sigla enviada por parametro no endpoint
    let cursos = iconeSigla();

    if(cursos){
        response.status(200);
        response.json(cursos);
    } else{
        response.status(404);
    }

})//Fazer o teste no Postman

app.get('/alunos/:curso', cors(), async function(request, response, next){
    //recebe a sigla enviada por parametro no endpoint
    let curso = request.params.curso;
    let status = request.query.status;
    //let curso = 'DS'
    let alunos = infoAlunos(curso, status);

    if(alunos){
        response.status(200);
        response.json(alunos);
    } else{
        response.status(404);
    }
})

app.get('/disciplinas/:matricula', cors(), async function(request, response, next){
    //recebe a sigla enviada por parametro no endpoint
    let aluno = request.params.matricula;
    //let curso = 'DS'
    let disciplinas = infoUmAluno(aluno);

    if(disciplinas){
        response.status(200);
        response.json(disciplinas);
    } else{
        response.status(404);
    }
})

app.get('/informacoes/:matricula', cors(), async function(request, response, next){
    //recebe a sigla enviada por parametro no endpoint
    let aluno = request.params.matricula;
    
    //let curso = 'DS'
    let informacoes = informationMatricula(aluno);
    
    if(informacoes){
        response.status(200);
        response.json(informacoes);
    } else{
        response.status(404);
    }
})

app.get('/status/:sigla', cors(), async function(request, response, next){
    //recebe a sigla enviada por parametro no endpoint
    let sigla = request.params.sigla;
    let status = request.query.status;
    
    //let curso = 'DS'
    let alunosStatus = statusAluno(sigla, status);
    
    if(alunosStatus){
        response.status(200);
        response.json(alunosStatus);
    } else{
        response.status(404);
    }
})

//Para que os EndPoints possam estar funcionando, precisamos obrigatoriamente finalizar a API nessa  function, que representa o start da API
app.listen(8080, function(){
    console.log('Servidor aguardando requisições...')
});