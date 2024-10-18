import mysql from 'mysql2/promise';

//Lembre-se, nossa aplicação neste momento estará se comunicando com outra aplicação.
//Desse modo, nossa aplicação não tem controle sobre a outra.
//O que exige uma comunicação assíncrona.
export default async function conectar(){
    
    if (global.poolConexoes){
        return await poolConexoes.getConnection();
    }
    else{
        global.poolConexoes = mysql.createPool({
            "host": process.env.HOST,
            "port": process.env.PORTA,
            "database": process.env.DATABASE,
            "user": process.env.USER,
            "password": process.env.PASSWORD,
            "connectTimeout": 60000,
            "waitForConnections": true,
            "queueLimit": 20
        });
        return await global.poolConexoes.getConnection();
    }
}