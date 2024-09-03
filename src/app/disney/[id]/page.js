'use client'

import Pagina from "@/app/components/Pagina";
import apiDisney from "@/app/services/apiDisney";
import { useEffect, useState } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";

export default function Page({ params }) {

    const [personagem, setPertsonagem] = useState([])

    useEffect(() => {
        apiDisney.get(`character/${params.id}`).then(resultado => {
            setPertsonagem(resultado.data.data)
        })
    }, [])

    return (
        <Pagina titulo="Disney Detalhes">

            {
                personagem._id &&
                <div>
                    <Row className="mt-3">
                        <Col md={4}>
                            <img src={personagem.imageUrl} />
                        </Col>
                        <Col md={8}>
                            <p><b>Nome: </b>{personagem.name}</p>
                            <p><b>Data Criação: </b>{personagem.createdAt}</p>
                            <p><a target="_blank" href={personagem.sourceUrl}>Ver página</a></p>
                        </Col>
                        <Col md={6}>
                            <Card border="primary">
                                <Card.Header className="bg-primary text-white">Filmes</Card.Header>
                                <Card.Body>
                                    <ListGroup>
                                        {personagem.films.map(item => (
                                            <ListGroup.Item key={item}>
                                                {item}
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card border="primary">
                                <Card.Header className="bg-primary text-white">Séries</Card.Header>
                                <Card.Body>
                                    <ListGroup>
                                        {personagem.tvShows.map(item => (
                                            <ListGroup.Item key={item}>
                                                {item}
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            }
        </Pagina>

    )
}  
