'use client'

import { useState } from "react";
import Pagina from "../components/Pagina";
import { Button } from "react-bootstrap";

export default function page() {

    const [nome, setNome] = useState('Alvaro')

    function alterarNome(){
        const novoNome = nome == 'Alvaro' ? 'Alvaro Matheus Alves da Silva' : 'Alvaro'
        setNome(novoNome)
    }

    return (
        <Pagina titulo={"Nomes: " + nome}>
            <h1>{nome}</h1>
            <Button onClick={alterarNome}>Alterar Nome</Button>
        </Pagina>

    )
}