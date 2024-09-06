import { Header } from "../app/components/header/header";
import { Information } from "./components/information/information"
import { Projects } from "./components/projects/projects";
import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">

      <Header/>
      <Information/>
      <div>
        <img className="me" src="/perfil-portfolio.jpg" alt="Foto Perfil" />
        <h1>Matheus Louzada</h1>
        <h2>Desenvolvedor Web</h2>
      </div>

      <div className="buttons">

        <div>
          <a className="btn-primary" href="mailto:mtlouzadaw3d@gmail.com">
            Entre em contato
           
          </a>
        </div >

      </div>
      <Projects/>
    </main >
  );
}
