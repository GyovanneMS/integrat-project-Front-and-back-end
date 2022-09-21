'use strict'

const infoCursos = async () => {
    const cursos = `http://localhost:8080/informacoesDosCursos`

    const response = await fetch(cursos);

    const listaCursos = await response.json();

    return listaCursos.curso
}

export {
    infoCursos
}