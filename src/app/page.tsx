import { Header } from "../app/components/header/header";
import { Information } from "./components/information/information"
import { Projects } from "./components/projects/projects";
import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">

      <Header/>
      <Information/>
      <Projects/>
    </main >
  );
}
