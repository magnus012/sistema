import mysql from 'mysql2/promise';

//Lembre-se, nossa aplicação neste momento estará se comunicando com outra aplicação.
//Desse modo, nossa aplicação não tem controle sobre a outra.
//O que exige uma comunicação assíncrona.
export default async function conectar(){
    
    if (global.poolConexoes){
        //retorna do pool uma conexão
        return await poolConexoes.getConnection();
    }
    else{
        global.poolConexoes = await mysql.createPool({
            "host":'132.226.245.178',
            "port":3306,
            "database":"LP2_102317321",
            "user":"102317321",
            "password":"102317321",
            "connectTimeout":60000,
            "waitForConnections":true,
            "queueLimit":20
        });
        return await global.poolConexoes.getConnection();
    }
}