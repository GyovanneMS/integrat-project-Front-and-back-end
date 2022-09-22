'use strict'

const infoCursos = async () => {
    const cursos = `http://localhost:8080/informacoesDosCursos`

    const response = await fetch(cursos);

    const listaCursos = await response.json();

    return listaCursos.curso
}

const infoAlunos = async (nomeCurso) => {
    const alunos = `http://localhost:8080/alunos/${nomeCurso}`

    const response = await fetch(alunos);

    const listaAlunos = await response.json();

    return listaAlunos.alunos;
}

const infoUmAluno = async (nomeAluno) => {
    const aluno = `http://localhost:8080/disciplinas/${nomeAluno}`

    const response = await fetch(aluno);

    const listaDisciplinas = await response.json();

    return listaDisciplinas.Disciplinas;
}

export {
    infoCursos, infoAlunos, infoUmAluno
} 