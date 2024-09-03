const express = require("express")
const router = express.Router()
const aluguel_controller = require("../controllers/aluguel.js")

router.get("/", (req, res) => {
    res.json(aluguel_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(aluguel_controller.show(req.params.id))
})

router.post("/", (req, res) => {
    const code = aluguel_controller.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = aluguel_controller.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    const code = aluguel_controller.destroy(req.params.id)
    res.status(code).json()
})

module.exports = router