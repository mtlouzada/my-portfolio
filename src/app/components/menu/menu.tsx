import { SocialBtns } from '../social-btns/social-btns';
import './menu.scss';

export function Menu() {
    return(
        <div className='container-menu'>
            
            <div className='Logo'>
                <a href="mailto">Email.code</a>
                <button>PT-BR</button>
            </div>

            <div className="nav-bar">
                <a href="">Sobre</a>
                <a href="">Habilidades</a>
                <a href="">Projetos</a>
                <a href="">Contado</a>
            </div>

            <div className="Redes-sociais">
                <SocialBtns/>
            </div>
        </div>

    );
}