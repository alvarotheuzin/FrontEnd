'use client'

import Pagina from "../components/Pagina";

export default function Array() {
    const carros = ['corsa', 'Celta', 'Ferrari', 'Fusca', 'Cobalt']
    const pessoas = ['Orion', 'Maria', 'Antônio']


    return (
        <Pagina titulo="Array">

            {pessoas.map(item => (
                <p>{item}</p>
            ))}

            {carros.map(item => (
                <p>{item}</p>
            ))}

            <ul>
                {carros.map(item => (
                    <li>{item}</li>
                ))}
            </ul>

        </Pagina>

    )
}