import Cabecalho from "./Cabecalho";
import Menu from "./Menu";
export default function Pagina(props)
{
    return(
        <>
        <Cabecalho titulo ="Sistema de Controle Gerencial"/>
        <Menu/>
        {
            props.children
        }
        </>

    );
}