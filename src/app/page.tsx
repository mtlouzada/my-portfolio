import { Experience } from "./components/experience/experience";
import { Header } from "./components/header";
import { Information } from "./components/information/information"
import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">

      <Header/>
      <Experience/>
      <Information/>

        <div>
          <button>contact me</button>
        </div >
    </main >
  );
}
