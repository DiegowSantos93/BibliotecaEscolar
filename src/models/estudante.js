let nextId = 1;

const model = (body, id = nextId++) => {

    if (body.nome.length >= 3 && body.nome != undefined &&
        body.matricula.length >= 3 && body.matricula != undefined &&
        body.curso.length >= 3 && body.curso != undefined &&
        !isNaN(Number(body.ano)) && body.ano.length == 4 && body.ano != undefined
    ){
        return {
            id,
            nome: body.nome,
            matricula: body.matricula,
            curso: body.curso,
            ano: Number(body.ano)
        }
    }
    nextId--
}

module.exports = model