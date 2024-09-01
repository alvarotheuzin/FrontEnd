'use client'

import Pagina from "@/app/components/Pagina";
import apiDisney from "@/app/services/apiDisney";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export default function Page() {
  const [personagens, setPersonagens] = useState([]);
  useEffect(() => {
    apiDisney.get("character").then((resultado) => {
      setPersonagens(resultado.data.data);
    });
  }, []);

  return (
    <Pagina titulo="Disney Tabela">

    <div style={{ marginBottom: "40px" }}></div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Foto</th>
          </tr>
        </thead>
        <tbody>
          {personagens.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
        
      </Table>
    </Pagina>
  );
}
