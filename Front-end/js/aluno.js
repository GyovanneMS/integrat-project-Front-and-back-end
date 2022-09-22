'use strict'

const cardAlunos = (object) => {
    let alunos = object;
    let div = document.createElement('div');
    div.classList.add('infoAluno quadrado')
    div.innerHTML = `<img src="${alunos.Icone}" alt=""> <p>${alunos.Nome.toUpperCase()}</p>`
    return card;
}

const showCards = async () => {
    const curso = localStorage.getItem('aluno')
    console.log(curso)
    const cards = await infoAlunos(curso);
    let cardsShow = cards.map(cardAlunos);
    main.replaceChildren(...cardsShow);
}

showCards()