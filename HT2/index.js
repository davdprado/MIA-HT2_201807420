const express = require("express");
const app = express();
const usuarioRouter = require('./Rutas/Rutas.route.js')
const cors = require('cors');
const bodyParser = require('body-parser');
const port= 3000;



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());

app.use("/usuario", usuarioRouter)


app.listen(port, () => {
 console.log("El servidor está inicializado en el puerto",port);
});