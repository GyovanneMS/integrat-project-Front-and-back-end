'use strict'

import { infoAlunos, infoUmAluno } from "./api";

/*Div na esquerda, onde fica as informações*/
const infoAlunos = (object) => {
    let div = document.createElement('div');
    div.classList.add('infoAluno quadrado');
    div.innerHTML = `<img src="${object.Icone}" alt=""> <p>${object.Nome.toUpperCase()}</p>`
    return card;
}

const showInfoAluno = async () => {
    const divInfo = document.querySelector('.infoAluno')
    const infoAluno = localStorage.getItem('aluno')
    const cards = await infoAlunos(infoAluno);
    const cardsShow = cards.map(cards);
    divInfo.appendChildren(...cardsShow);
}

showCards()

/*Div na direita, onde fica as notas*/

const nota = (valorNota) => {
    const divNota = document.createElement('div');
    divNota.innerHTML = ´
    <div>${valorNota.Nota}</div>
    <progress value="${valorNota.media}" max=100></progress>
    <div>${valorNota.Nome}</div>´
    let class
    if(valorNota == "Aprovado"){
        class = 'green'
    } else if (valorNota == "Exame"){
        class = 'yellow'
    } else if (valorNota == "Reprovado"){
        class = 'red'
    } else {
        class = 'blue'
    }
    divNota.classList.add(´${class} notas´)
    
    return divNota
    
}

const notasResult = async () => {
    const divLocalNotas = document.querySelector('.notas')
    const divCorNotas = document.createElement('div')
    divCorNotas.classList.add('color')
    const alunoMatricula = localStorage.getItem('aluno')
    const matriculaAluno = await infoUmAluno(alunoMatricula)
    const mA = matriculaAluno.map(nota)
    divCorNotas.append(...mA)
    divLocalNotas(divCorNotas)
}
















































/*
const subjectsSpawner = async () => {
    const main = document.querySelector('main')
    const container = document.createElement('div')
    container.classList.add('subjects')

    const studentRegistration = localStorage.getItem('registration')

    const subject = await subjectInfo(studentRegistration)

    const spawner = subject.map(subjectCreator)
    container.append(...spawner)
    main.append(container)
}
*/




/*

const subjectCreator = (item) => {
    const element = document.createElement('div')
    element.innerHTML = `
    <span class="nota">${item.media}</span>
    <progress value="${item.media}" max="100"></progress>
    <span class="subject-name">${item.nome}</span>
    `
    if(item.status == 'Aprovado') 
        element.classList.add('aproved')
    else if(item.status == 'Reprovado') 
        element.classList.add('reproved')
    else 
        element.classList.add('exam')

    element.classList.add('subject-info')

    return element
}

const infoCreator = (item) => {
    const card = document.createElement('div')
    card.innerHTML = `<img src="${item.foto}" class="student-photo"> <span>${item.nome}</span>`
    card.classList.add('student')

    return card
}


const studentSpawnerInfo = async () => {
    const main = document.querySelector('main')
    const studentRegistration = localStorage.getItem('registration')

    const student = await studentInfo(studentRegistration)

    const spawner = student.map(infoCreator)
    main.appendChild(...spawner)
}



studentSpawnerInfo()
subjectsSpawner()
*/
