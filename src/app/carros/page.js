import Container from "react-bootstrap/Container";
import Pagina2 from "../components/Pagina2";
import Cardcarros from "../components/Cardcarros";

const cars = [
    {
      title: "GM - Opala",
      text: "Ano: 1982",
      imageSrc: "https://i.pinimg.com/564x/98/5e/e7/985ee75ee7704d1d4ce23170e8186821.jpg",
      buttonText: "Detalhe",
    },
    {
      title: "GM - Monza",
      text: "Ano: 1985",
      imageSrc: "https://i.pinimg.com/564x/95/64/d1/9564d1e0e8e464e7da18b86060d2a3b1.jpg",
      buttonText: "Detalhe",
    },
    {
      title: "VW - Gol",
      text: "Ano: 2020",
      imageSrc: "https://i.pinimg.com/736x/17/eb/23/17eb235d67a1e666ff9839feceec0d04.jpg",
      buttonText: "Detalhe",
    },
    {
      title: "Toyota - Supra",
      text: "Ano: 2016",
      imageSrc: "https://i.pinimg.com/564x/38/e4/80/38e48009a7a82cda3b9fffd102bc9dd7.jpg",
      buttonText: "Detalhe",
    },
    {
      title: "Tesla - Model S",
      text: "Ano: 2018",
      imageSrc: "https://i.pinimg.com/564x/a4/ed/10/a4ed1038b33101fedf41e0bcddc4dcb8.jpg",
      buttonText: "Detalhe",
    },
    {
      title: "Fiat - Marea",
      text: "Ano: 1995",
      imageSrc: "https://i.pinimg.com/564x/f2/00/a7/f200a7769c267796b22bf30182275695.jpg",
      buttonText: "Detalhe",
    },
  ];


export default function carros() {
    return (
      <Pagina2 titulo="Carros">
        <main>
        <Container className="d-flex flex-wrap justify-content-start" style={{ gap: '10px' }}>
            {cars.map((car, index) => (

              <Cardcarros
                key={index}
                title={car.title}
                text={car.text}
                imageSrc={car.imageSrc}
                buttonText={car.buttonText}
              />
            ))}
             </Container>

        </main>
      </Pagina2>
    );
  }

