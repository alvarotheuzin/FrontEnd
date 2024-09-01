'use client'

import Pagina from "@/app/components/Pagina";
import apiDisney from "@/app/services/apiDisney";
import { useState } from "react";
import {Card, Col, Row } from "react-bootstrap";

export default function Page() {
  const [personagens, setPersonagens] = useState([]);

  apiDisney.get("/character").then((resultado) => {
    setPersonagens(resultado.data.data);
  });

  return (
    <Pagina titulo="Disney cards">
      <div style={{ marginBottom: "40px" }}></div>

      <Row md={3}>
        {personagens.map((item) => (
          <Col key={item._id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={item.imageUrl} style={{ width: '100%', height: '250px', objectFit: 'cover'}} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
    </Pagina>
  );
}
