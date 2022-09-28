/*=========================================================
* Objetivo: Obter uma lista com as informações mais apropriadas de um curso
* Data: 09/15/22
* Autor: Gyovanne Martins
* Versão: 1.0.0
*/


var cursos = [
    {
        "nome"  :   "001 - Técnico em Desenvolvimento de Sistemas",
        "sigla" :   "DS",
        "icone" :   "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
        "carga" :   "1200",
    },
    {
        "nome"  :   "002 - Técnico em Redes de Computadores",
        "sigla" :   "RDS",
        "icone" :   "https://img.icons8.com/ultraviolet/344/thin-client.png",
        "carga" :   "1200"
    }
];



const iconeSigla = function(){
    let infoArray = [];
    let infoJson = {};
        //Percorre o array até achar a sigla ou o nome da matéria
        cursos.forEach(ListaCurso => {
            infoArray.push({Icone : ListaCurso.icone, Sigla : ListaCurso.sigla, Nome: ListaCurso.nome});
            infoJson.curso = infoArray;
        })
    return infoJson;
}

const nomeCurso = function(siglaCurso){
    let sigla = siglaCurso;
    let siglaArray = [];
    let siglaJson = {}
    let erro = true;
    if(sigla != ''){
        cursos.forEach(curso => {
            if(sigla.toUpperCase() == curso.sigla.toUpperCase()){
                siglaArray.push({Nome : curso.nome});
                siglaJson.Nome = siglaArray;
                erro = false
            }
        })
    }
    if(erro){
        return false;
    } else{
        return siglaJson
    }
}



module.exports = {
    iconeSigla, nomeCurso
}