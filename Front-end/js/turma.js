'use strict'

import { infoAlunos } from './api.js'


const cardAlunos = (object) => {
    let alunos = object;
    let card = document.createElement('a');
    card.classList.add('alunos');
    card.setAttribute("id", `${alunos.Conclusao}`) 
    if(alunos.Status = "Finalizado"){
        card.classList.add('finalizado');
        card.setAttribute("id", "finalizado")
    } else if(alunos.Status = "Cursando"){
        card.classList.add('cursando');
        card.setAttribute("id", "cursando")
    } else {
        card.classList.add('sem-informacao')
    } 

    card.innerHTML = `<img src="${alunos.Icone}" alt=""> <p>${alunos.Nome.toUpperCase()}</p>`
    return card;
}

const showCards = async (curso) => {
    const cards = await infoAlunos(curso);
    let cardsShow = cards.map(cardAlunos);
    alunos.replaceChildren(...cardsShow)
}

showCards('DS')