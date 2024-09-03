const express = require("express")
const router = express.Router()
const livro_controller = require("../controllers/livro.js")

router.get("/", (req, res) => {
    res.json(livro_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(livro_controller.show(req.params.id))
})

router.post("/", (req, res) => {
    const code = livro_controller.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = livro_controller.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    const code = livro_controller.destroy(req.params.id)
    res.status(code).json()
})

module.exports = router