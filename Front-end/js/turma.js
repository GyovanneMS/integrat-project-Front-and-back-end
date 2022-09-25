'use strict'

import { infoAlunos } from './api.js'
//import { criarAlunos } from './app.js'

const titulo = async () => {
    const titulo = document.getElementsByClassName('h1')
    
    titulo.innerHTML = `${localStorage.getItem('registration')}`
}

const cardAlunos = (object) => {
    let alunos = object;
    let card = document.createElement('a');
    card.classList.add(`alunos`);
    card.setAttribute("id", `${alunos.Matricula} ${alunos.Conclusao} `)
    if(alunos.Status == "Cursando"){
        card.classList.add('cursando');
        //card.setAttribute("id", "cursando")
    } else if(alunos.Status == "Finalizado"){
        card.classList.add('finalizado');
       // card.setAttribute("id", "finalizado")
    } else {
        card.classList.add('sem-informacao')
    } 
    card.href = './aluno.html'
    card.innerHTML = `<img src="${alunos.Icone}" alt=""> <p>${alunos.Nome.toUpperCase()}</p>`
    card.onclick = abrir
    return card;
}

const showCards = async () => {
    const curso = localStorage.getItem('registration')
    const cards = await infoAlunos(curso);
    let cardsShow = cards.map(cardAlunos);
    alunos.replaceChildren(...cardsShow);
}

const abrir = (card) => {
    const nomeAluno = card.currentTarget.id
    localStorage.setItem('aluno', nomeAluno)
}


showCards()
titulo()

