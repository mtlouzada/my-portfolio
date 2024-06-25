import { Header } from "./components/header";
import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">

      <Header/>
        
        <div className="experience">
          <h3>About me</h3>
          <p>Tech enthusiast</p>
        </div>

        <div className="infos">
          <span>🇺🇸 EN Intermediary</span>
          <span>🇧🇷 PT BR Native Speaker</span>
        </div>

        <h3>Education</h3>
        <div className="educational-info">
          <span>🎓</span>
          <span>Systems Analysis and Development - Universidade Estásio de Sá</span>
          <div className="buttons">
            <div className="social">

            </div>
            <button>contact me</button>
          </div>
        </div>
    </main>
  );
}
