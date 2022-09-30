'use strict'

//import { infoUmAluno } from "./api";
import { infoUmAlunoMatricula, infoUmAluno } from "./api.js";

/*Div na esquerda, onde fica as informações*/
const infoAlunoInfo = (object) => {
    let div = document.createElement('div');
    div.classList.add('informationsAluno');
    div.innerHTML = `<img src="${object.Icone}" alt=""> <p>${object.Nome}</p>`
    return div;
}

const showInfoAluno = async () => {
    let divInfo = document.querySelector('.infoAluno')
    let infoAluno = localStorage.getItem('aluno');
    let matriculaId = await infoUmAlunoMatricula(infoAluno)
    let cardsShow = matriculaId.map(infoAlunoInfo);
    divInfo.append(...cardsShow);
}
showInfoAluno()

/*Div na direita, onde fica as notas*/


const nota = (valorNota) => {
    let divNota = document.createElement('div');
    let classe
    if(valorNota.Status == "Aprovado"){
        classe = 'blue'
    } else if (valorNota.Status == "Exame"){
        classe = 'yellow'
    } else if (valorNota.Status == "Reprovado"){
        classe = 'red'
    } 
    
    divNota.classList.add(`${classe}`)
    divNota.classList.add('nota')
    divNota.innerHTML = `
    <div class='valorNota numeroNota'>${valorNota.Nota}</div>
    <progress value="${valorNota.Nota}" nivelNota" max=100></progress>
    <div class='valorNota'>${valorNota.Nome}</div>`
    
    return divNota
    
}

const notasResult = async () => {
    let divLocalNotas = document.querySelector('.notas')
    let divCorNotas = document.createElement('div')
    divCorNotas.classList.add('color')
    let alunoMatricula = localStorage.getItem('aluno')
    let matriculaAluno = await infoUmAluno(alunoMatricula)
    let mA = matriculaAluno.map(nota)
    divCorNotas.append(...mA)
    divLocalNotas.append(divCorNotas)
}

notasResult()
