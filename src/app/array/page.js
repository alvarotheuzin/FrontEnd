'use client'

import Pagina2 from "../components/Pagina2";

export default function Array() {
    const carros = ['corsa', 'Celta', 'Ferrari', 'Fusca', 'Cobalt']
    const pessoas = ['Orion', 'Maria', 'Antônio']


    return (
        <Pagina2 titulo="Array">

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

        </Pagina2>

    )
}