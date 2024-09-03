const livro_controller = require("../controllers/livro.js")
const estudante_controller = require("../controllers/estudante.js")

let nextId = 1;

const model = (body, id = nextId++) => {

    if (livro_controller.show(body.livro_id) &&
        estudante_controller.show(body.estudante_id) &&
        body.data_aluguel != "" && body.data_aluguel != undefined &&
        body.data_devolucao != "" && body.data_devolucao != undefined
    ){
        return {
            id,
            livro_id: Number(body.livro_id),
            estudante_id: Number(body.estudante_id),
            data_aluguel: body.data_aluguel,
            data_devolucao: body.data_devolucao
        } 
    }
    nextId--
}

module.exports = model