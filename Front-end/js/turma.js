'use strict'

import { infoAlunos } from './api.js'
//import { criarAlunos } from './app.js'

const titulo = async () => {
    const titulo = document.getElementsByClassName('h1')
    
    titulo.innerHTML = `${localStorage.getItem('registration')}`
}

const filtro = async () => {
    let status = document.getElementById('status-dos-alunos').value
    let curso = localStorage.getItem('registration')
    let cards = await infoAlunos(curso, status)
    let cardsShow = cards.map(cardAlunos);
    alunos.replaceChildren(...cardsShow);
}


const cardAlunos = (object) => {
    let alunos = object;
    let card = document.createElement('a');
    card.classList.add(`alunos`);
    //Id
    card.setAttribute('id', `${alunos.Matricula}`)
    if(alunos.Status == "Cursando"){
        card.classList.add('cursando');
<<<<<<< HEAD
    } else if(alunos.Status == "Finalizado"){
        card.classList.add('finalizado');
=======
        //card.setAttribute("id", "cursando")
    } else if(alunos.Status == "Finalizado"){
        card.classList.add('finalizado');
       // card.setAttribute("id", "finalizado")
>>>>>>> 5e8cf6e89026b9c9c21286cb0a6e616b0ad4155d
    } else {
        card.classList.add('sem-informacao') 
    } 
    card.href = './aluno.html'
    card.innerHTML = `<img src="${alunos.Icone}" alt=""> <p>${alunos.Nome.toUpperCase()}</p>`
    card.onclick = abrir
    return card;
}

const showCards = async () => {
    let curso = localStorage.getItem('registration')
    let cards = await infoAlunos(curso);
    let cardsShow = cards.map(cardAlunos);
    alunos.replaceChildren(...cardsShow);
}

const abrir = (card) => {
    const nomeAluno = card.currentTarget.id
    localStorage.setItem('aluno', matricula)
}

document.getElementById('status-dos-alunos').addEventListener('change', filtro)
showCards()
titulo()

