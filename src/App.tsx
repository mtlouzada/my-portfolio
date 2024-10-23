import './App.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { TfiEmail } from "react-icons/tfi";
import { GiCloudDownload } from "react-icons/gi";

function App() {

  return (
    <>
      <div>


        <header id='about' className='header-container'>

          <div className='menu-bar'>

            <div className='left-nav-bar mouse-transition'>
              <a href="mailto:matheuslouzadaa@gmail.com" target='black'><MdOutlineMailOutline />matheuslouzadaa</a>
            </div>

            <div className='center-nav-bar mouse-transition'>
              <a href="#about">about</a>
              <a href="#projects">projects</a>
              <a href="#contact">contact</a>
            </div>

            <div className='right-nav-bar mouse-transition-special'>
              <a href="https://www.linkedin.com/in/matheus-louzadaa/" target='black'><FaLinkedin /></a>
              <a href="https://github.com/mtlouzada" target='black'><FaGithub /></a>
            </div>

          </div>

          <div className='bio-container'>
            <img src="./ft-perfil.jpg" alt="Foto Perfil"/>

            <div className='text-container'>
              
              <h1>Matheus Louzada</h1>
              <h3>Desenvolvedor web</h3>
              

              
              <p>
                Me formei em ADS no fim de 2023, desde então estou fazendo cursos profissionalizantes focado no desenvolvimento Web2. Também participei de um BootCamp seguido de um Hackathon na ICP HUB Brasil, onde tive a experiência de desenvolver um projeto em equipe e apresentá-lo.

                Estudo sobre programação diariamente, me desafiando a criar projetos completos, utilizando bibliotecas, frameworks e banco de dados para isso. Desenvolvendo autonomia na criação de código e aprimorando o meu raciocínio lógico. Visando ser capaz de entregar soluções tecnológicas de forma rápida e eficaz.
              </p>
              

              
              <a href="" className='large-button'>Ver Currículo <FaCloudDownloadAlt className='icon-default'/><GiCloudDownload className='icon-hover'/></a>
              <a href="mailto:matheuslouzadaa@gmail.com" className='large-button'><TfiEmail  className='icon-default'/><HiOutlineMailOpen className='icon-hover'/> Enviar Email</a>
              
            </div>

          </div>

        </header>

        <main id='projects' className=''>

          <h2>Melhores Projetos</h2>

          <div>
            <a href="">projeto-1</a>
            <h3>projetos-1</h3>
            <p>about projeto</p>
            <a href="">ir ao site</a>
            <a href="">ver video</a>
          </div>

          <div>
            <a href="">projeto-1</a>
            <h3>projetos-1</h3>
            <p>about projeto</p>
            <a href="">ir ao site</a>
            <a href="">ver video</a>
          </div>

          <div>
            <a href="">projeto-1</a>
            <h3>projetos-1</h3>
            <p>about projeto</p>
            <a href="">ir ao site</a>
            <a href="">ver video</a>
          </div>

        </main>

        <footer id='contact' className=''>
          <div>
          <h3>Meu Email:</h3>
          <a href="">matheuslouzadaa@gmail.com</a>
          </div>

          <div>
            <a href="">Github</a>
            <a href="">LinkedIn</a>
          </div>
        
        </footer>

        
      </div>
    </>
  )
}

export default App
