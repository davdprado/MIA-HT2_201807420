const DataBase = require('../conexion')
exports.addUsuario= async(req,res)=>{
    try {
        const { nombre, email, password }=req.body
        console.log(req.body)
        let sql = `INSERT INTO UsuarioHT VALUES('${nombre}','${email}','${password}')`
        console.log(sql)
        await DataBase.Open(sql, [], true);
        res.json({"Info": "Usuario creado exitosamente"})
    } catch (error) {
        res.json({"Info": "Usuario no creado"})
        console.log("Error al crear el Usuario => ",error)
        res.json({})
    }
}

exports.MostrarUser = async (req, res) => {
    try{
        let query = "SELECT * FROM UsuarioHT";
        let result = await DataBase.Open(query, [], false);
        let usuarios = [];

        usuarios = result.rows.map(user =>{
            let usuariosSchema = {
                "nombre": user[0],
                "email": user[1],
                "password": user[2]
            }

            return usuariosSchema
        })
        res.json(usuarios);
    }
    catch(error)
    {
        console.log("Error al realizar la consulta => ",error)
        res.json({})
    }
}

exports.login = async (req, res) => {
    try{
        
        const {email, password } = req.body
        let query = `SELECT * FROM UsuarioHT WHERE Email='${email}' AND Contraseña='${password}'`
        let result = await DataBase.Open(query, [], false);
        let usuario = {};
        let auth = false;

        usuario = result.rows.map(user =>{
            let usuariosSchema = {
                "nombre": user[0],
                "email": user[1],
                "password": user[2]
            }

            return usuariosSchema
        })
        if (usuario.email == '' || usuario.password == '' || usuario == ''){
            auth = false
        }else{
            auth = true
        }
        autenticado = {"auth":auth}
        res.json(autenticado);
    }
    catch(error)
    {
        console.log("Error al realizar la consulta => ",error)
        res.json({})
    }
}