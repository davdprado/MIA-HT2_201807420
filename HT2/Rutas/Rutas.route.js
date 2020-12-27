const express = require("express")
const router = express.Router()
const UserController = require("../controladores/Usuario.controller")

router.post("/registro", UserController.addUsuario)
router.get('/Lista',UserController.MostrarUser)
router.get('/login',UserController.login)
module.exports = router