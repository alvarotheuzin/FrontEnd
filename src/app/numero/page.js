'use client'

import { useState } from "react";
import Pagina from "../components/Pagina";
import { Button } from "react-bootstrap";

export default function page() {

    const [numero, setNumero] = useState(0)
    function alterarNumero(operacao) {
        const novoNumero = operacao === '+' ? numero + 1 : numero - 1;
        setNumero(novoNumero)
    }
    return (
        <Pagina titulo="Número">
            <Button onClick={() => alterarNumero('-')}>-</Button>
            <h1>{numero}</h1>
            <Button onClick={() => alterarNumero('+')}>+</Button>
        </Pagina>

    )
}