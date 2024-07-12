import { SocialBtns } from "../social-btns/social-btns";
import { EmailIcon } from "../icons/email-icon";
import { Menu } from "../menu/menu";
import "./header.scss";


export function Header() {
  return (
    
    <div className="header">
      <Menu/>

      <div>
        <img className="me" src="/perfil-portfolio.jpg" alt="Foto Perfil" />
        <h1>Matheus Louzada</h1>
        <h2>Desenvolvedor Web</h2>
      </div>

      <div className="buttons">
        <SocialBtns />

        <div>
          <a className="btn-primary" href="mailto:mtlouzadaw3d@gmail.com">
            Entre em contato
            <EmailIcon />
          </a>
        </div >

      </div>

    </div>
  );
}