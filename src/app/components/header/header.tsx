import { SocialBtns } from "../social-btns/social-btns";
import { EmailIcon } from "../icons/email-icon";
import "./header.scss";


export function Header() {
  return (
    <div className="header">
      <div>
        <h1>Matheus Louzada</h1>
        <h2>Web Developer</h2>
      </div>

      <div className="buttons">
        <SocialBtns />
        <div>
          <a className="btn-primary" href="mailto:mtlouzadaw3d@gmail.com">
            contact me
            <EmailIcon />
          </a>
        </div >
      </div>
    </div>
  );
}