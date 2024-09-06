import { SocialBtns } from "../social-btns/social-btns";
import { EmailIcon } from "../icons/email-icon";
import { Menu } from "../menu/menu";
import { Logo } from "../Logo/logo";
import "./header.scss";


export function Header() {
  return (
    
    <div>
      <Logo/>
      <Menu/>
      <SocialBtns />
    </div>
  );
}