let nextId = 1;

const model = (body, id = nextId++) => {

    if (body.titulo.length >= 3 && body.titulo != undefined &&
        body.autor.length >= 3 && body.autor != undefined &&
        !isNaN(Number(body.ano)) && body.ano.length == 4 && body.ano != undefined &&
        body.genero.length >= 3 && body.genero != undefined
    ){
        return {
            id,
            titulo: body.titulo,
            autor: body.autor,
            ano: Number(body.ano),
            genero: body.genero
        }
    }
    nextId--
}

module.exports = model