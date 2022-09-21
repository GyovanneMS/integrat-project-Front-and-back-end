'use strict'

import { infoCursos } from './api.js'

const cardCursos = (object) => {
    const cursos = object;
    let card = document.createElement('a');
    card.classList.add('card')
    card.href = './pages/turma.html'
    card.innerHTML = `<img src="${cursos.Icone}" alt=""> <span>${cursos.Sigla}</span>`;
    return card
}

const showCards = async () => {
    const cards = await infoCursos();
    let cardsShow = cards.map(cardCursos)
    cursos.replaceChildren(...cardsShow)
}


showCards()