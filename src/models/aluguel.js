const livro_controller = require("../controllers/livro.js")
const estudante_controller = require("../controllers/estudante.js")

let nextId = 1;

const model = (body, id = nextId++) => {

    if (livro_controller.show(body.livro_id) &&
        estudante_controller.show(body.estudante_id) &&
        body.data_aluguel != "" && body.data_aluguel != undefined &&
        body.data_devolucao != "" && body.data_devolucao != undefined
    ){
        const dataAluguelISO = new Date(body.data_aluguel).toISOString().split`T`[0];
        const dataDevolucaoISO = new Date(body.data_devolucao).toISOString().split`T`[0];

        return {
            id,
            livro_id: Number(body.livro_id),
            estudante_id: Number(body.estudante_id),
            data_aluguel: dataAluguelISO,
            data_devolucao: dataDevolucaoISO
        } 
    }
    nextId--
}

module.exports = model