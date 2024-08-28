import Cabecalho from "./components/Cabecalho";
import { Button } from "react-bootstrap";
import Link from "next/link";
import Pagina2 from "./components/Pagina2";

export default function Home() {
  return (
    <main>
      <Pagina2 titulo="Principal">
      <Button variant="primary">Primary</Button>{' '}

      <Cabecalho titulo="Alvaro" subtitulo="Agora vai"/>
      <Cabecalho titulo="Matheus"/>
      <Cabecalho titulo="Alves"/>
      <Cabecalho titulo="Silva"/>


      <Link href="/fundamentos">Página Fundamentos</Link><br />
      </Pagina2>
    </main>
  );
}
