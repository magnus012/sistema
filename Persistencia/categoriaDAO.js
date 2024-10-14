import conectar from "./Conexao.js";
import Categoria from "../Modelo/categoria.js";

export default class CategoriaDAO{
    constructor(){
        this.init();
    }

    async init(){
        try{
            const conexao = await conectar(); //retorna uma conexão
            const sql = `
            CREATE TABLE IF NOT EXISTS produto(
                codigo INT NOT NULL AUTO_INCREMENT,
                descricao VARCHAR(200) NOT NULL,
                CONSTRAINT pk_produto PRIMARY KEY(codigo)
            )
        `;
            await conexao.execute(sql);
            await conexao.release();
        }
        catch(e){
            console.log("Não foi possível iniciar o banco de dados: " + e.message);
        }
    }
    async gravar(categoria){
        if(categoria instanceof Categoria){
            const conexao = await conectar();
            const sql = "INSERT INTO categoria(descricao) VALUES ?";
            const parametros = [categoria.descricao];
            const resultado = await conexao.execute(sql,parametros);
            categoria.codigo = resultado[0].insertId;
            await conexao.release();
        }
    }
    async editar(categoria){
        if(categoria instanceof Categoria){
            const conexao = await conectar();
            const sql = "UPDATE categoria SET descricao = ?";
            const parametros = [categoria.descricao];
            await conexao.execute(sql,parametros);
            await conexao.release();
        }
    }

    async excluir(categoria){
        if(categoria instanceof Categoria){
            const conexao = await conectar();
            const sql = "DELETE FROM categoria WHERE codigo = ?";
            const parametros = [categoria.codigo];
            await conexao.execute(sql,parametros);
            await conexao.release();
        }
    }

    async consultar(){
        const conexao = await conectar();
        const sql = "SELECT * FROM categoria ORDER BY descricao";
        const [registros, campos] = await conexao.query(sql);
        let listaCategoria=[];
        for(const registro of registros){
            const categoria = new Categoria(registro['codigo'],
                                            registro['descricao']
            );
            listaCategoria.push(categoria);
        }
        return listaCategoria
    }
}