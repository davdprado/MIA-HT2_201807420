const oracledb = require('oracledb');
credentials={
    user:"daviddiaz",
    password:"201807420",
    connectString:"localhost/ORCL18"
}
try{
    oracledb.initOracleClient({configDir: '/opt/oracle/your_config_dir'});
    console.log('Base Conectada! :)');
} catch (err){
    console.error('No se puede conectar a la base de datos');
}

async function Open(query,binds,autoCommit) {
    let connection = await oracledb.getConnection(credentials);
    let result = await connection.execute(query,binds,{ autoCommit });
    connection.release();
    return result;
}
exports.Open=Open;