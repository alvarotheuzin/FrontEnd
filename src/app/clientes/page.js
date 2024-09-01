import { Alert, Container } from "react-bootstrap";
import Cabecalho from "../components/Cabecalho";
import Link from "next/link";
import Pagina from "../components/Pagina";

export default function Fundamentos(){


    return (
        <Pagina titulo="Clientes">
        <Cabecalho titulo="Clientes" subtitulo="Página de clientes usando o cabeçalho"/>
        <Link href="/">Página Inicial</Link><br />
        <Link href="/fundamentos">Página Fundamentos</Link><br />

        </Pagina>
        )
    }