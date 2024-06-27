import { Experience } from "./components/experience/experience";
import { Header } from "./components/header";
import { EmailIcon } from "./components/icons/email-icon";
import { Information } from "./components/information/information"
import { SocialBtns } from "./components/social-btns/social-btns";
import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">

      <Header/>
      <Experience/>
      <Information/>
      <div className="buttons">
        <SocialBtns/>
        <div>
          <a className="btn-primary" href="mailto:mtlouzadaw3d@gmail.com">
            contact me
           <EmailIcon/>
          </a>
        </div >
      </div>
    </main >
  );
}
