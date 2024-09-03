const express = require("express")
const livro_router = require("./routes/livro.js")
const estudante_router = require("./routes/estudante.js")
const aluguel_router = require("./routes/aluguel.js")
const app = express()
const port = 8800

app.use(express.json())

app.use("/livro", livro_router)

app.use("/estudante", estudante_router)

app.use("/aluguel", aluguel_router)

app.listen(port, () => {
    console.log(`Server is running in ${port} port`)
})

