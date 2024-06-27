import { Experience } from "./components/experience/experience";
import { Header } from "./components/header";
import { EmailIcon } from "./components/icons/email-icon";
import { Information } from "./components/information/information"
import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">

      <Header/>
      <Experience/>
      <Information/>
      <div className="buttons">
      <div className="social"></div>

        <div>
          <button className="btn-primary">
            contact me
           <EmailIcon/>
          </button>
        </div >
      </div>
    </main >
  );
}
