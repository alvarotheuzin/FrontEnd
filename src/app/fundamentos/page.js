import { Alert, Container } from "react-bootstrap";
import Cabecalho from "../components/Cabecalho";
import Link from "next/link";
import Pagina from "../components/Pagina";

export default function Fundamentos(){


    return (
        <Pagina titulo="Fundamentos">
            <Cabecalho titulo="Fundamentos"/>

            <Container>
                <Alert>
                    Ateção! Preste muita atenção.
                </Alert>

                <h1>Fundamentos</h1>
                <p>Sucesso</p>
                <Cabecalho titulo="FIM" />
            </Container>
            <Link href="/">Página Inicial</Link><br />
        </Pagina>
    )
}