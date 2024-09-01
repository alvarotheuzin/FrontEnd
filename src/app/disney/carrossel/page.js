'use client'

import Pagina from "@/app/components/Pagina";
import apiDisney from "@/app/services/apiDisney";
import { useState } from "react";
import { Carousel } from "react-bootstrap";

export default function Page() {
  const [personagens, setPersonagens] = useState([]);

  apiDisney.get("/character").then((resultado) => {
    setPersonagens(resultado.data.data);
  });

  return (
    <Pagina titulo="Disney Carrosel">
      <div style={{ marginBottom: "40px" }}></div>
      
      <Carousel>
        {personagens.map((item) => (
          <Carousel.Item key={item._id}>
            <img
              className="d-block w-100"
              src={item.imageUrl}
              style={{ height: "100%", objectFit: "cover" }}
            />
            <Carousel.Caption key={item._id}>
              <h3>{item.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}

      </Carousel>
    </Pagina>
  );
}
