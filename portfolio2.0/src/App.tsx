import React from 'react';

function App() {

  return (
    <>
      <body>
        <div className="preloader" data-preloader>
          <div className="circle"></div>
        </div>

        <header className="header" data-header>

          <div className="container">

            <div className="logo-pt">
              <a href="mailto:mtlouzadaw3d@gmail.com" target="_blank" className="logo">
                Email
              </a>
            </div>

            <nav className="navbar" data-navbar>

              <div className="navbar-top">
                <a href="mailto:mtlouzadaw3d@gmail.com" target="_blank" className="logo">
                  Email
                </a>

               

              </div>

              <ul className="navbar-list">

                <li>
                  <a href="#sobre" className="navbar-link">SOBRE</a>
                </li>

                <li>
                  <a href="#projetos" className="navbar-link">SERVIÇOS</a>
                </li>

                <li>
                  <a href="#habilidades" className="navbar-link">PROJETOS</a>
                </li>

              </ul>
              <div className="wrapper">
                <a href="mailto:mtlouzadaw3d@gmail.com" target="_blank" className="contact-link">mtlouzadaW3D@gmail.com</a>
              </div>
              <ul className="social-list">
                <li>
                  <a href="https://github.com/mtlouzada" target="_blank" className="social-link">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
              </ul>
            </nav>

            <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
              {/* <ion-icon name="menu-outline" aria-hidden="true"></ion-icon> */}
            </button>

            <div className="overlay" data-nav-toggler data-overlay></div>

          </div>
        </header>

        <main>
          <article>
            <section id="sobre" className="section hero" aria-label="home">
              <div className="container">



                <div className="hero-content">


                  <div className="hero-banner">


                    <img className="img-perfil" src="./src/imgs/perfil.png" width="425px" alt="perfil" />


                  </div>


                  <h1 className="h1 hero-title">M Louzada</h1>

                  <p className="hero-subtitle">
                    Desenvolvedor Web
                  </p>



                  <p className="section-text">
                    Atuo no desenvolvimento web há pouco mais de 5 meses, contribuindo em um projeto Web3 com TypeScript, JavaScript e Chakra UI. No dia a dia, colaboro com uma equipe de 11 dev's, utilizando Git para versionar o código por meio de forks, commits e pull requests. Juntos, criamos novas funcionalidades, mantemos a documentação atualizada e refatoramos o código sempre que necessário. Também estou desenvolvendo um app para controle de finanças, que ainda está no começo, mas tem sido um ótimo espaço para me aprofundar em validações, implementar testes e dar continuidade ao projeto de forma autônoma e prática.
                  </p>

           
                </div>
              </div>

            </section>
            <section id="projetos" className="section blog fade-in" aria-labelledby="blog-label">
              <div className="container">

                <p className="section-subtitle" id="blog-label">Trabalhos</p>

                <h2 className="h2 section-title">Projetos</h2>

                <ul className="blog-list">

                  <li>
                    <div className="blog-card fade-in">

                      <a href="https://github.com/mtlouzada/turing-Challenger" target="_blank">
                        <figure className="card-banner img-holder" style={{ "--width": 650, "--height": 470 } as React.CSSProperties}>
                          <img src="./src/imgs/turingchallenger.png" width="650" height="470" loading="lazy"
                            alt="Project-1" className="img-cover" />
                        </figure>
                      </a>
                      <div className="card-content">
                        <div>
                          <h3 className="h3 card-title">Turing Challenger</h3>

                          <p className="card-text">
                            O objetivo deste projeto é proporcionar uma experiência informativa e educacional, onde cada pergunta busca promover o aprendizado e a compreensão sobre o legado de Turing. A implementação usa JavaScript para construir a lógica interativa, enquanto o backend com Node.js gerencia a distribuição das perguntas e respostas, garantindo a aleatoriedade e o armazenamento das informações.
                          </p>

                          <div className="site-videos">
                            <a href="https://github.com/mtlouzada/turing-Challenger" className="btn has-before" target="_blank">

                              <span className="span">IR AO PROJETO</span>

                              {/* <ion-icon name="arrow-forward"></ion-icon> */}

                            </a>
                          </div>

                        </div>

                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="blog-card fade-in">

                      <a href="https://github.com/mtlouzada/salary-VS-inflation" className="card-banner" target="_blank">
                        <figure className="img-holder" style={{ "--width": 650, "--height": 470 } as React.CSSProperties}>

                          <img src="./src/imgs/salarioXiflacao.png" width="650" height="470" loading="lazy"
                            alt="salarioXiflacao" className="img-cover" />

                        </figure>
                      </a>

                      <div className="card-content">
                        <div>
                          <h3 className="h3 card-title">Salary VS Inflation</h3>

                          <p className="card-text">
                            Este projeto foi feito para testar minhas habilidades técnicas e de lógica de programação, usando a linguagem JavaScript, para construir uma aplicação que resolve um desafio envolvendo dados bancários e dados do IPCA.
                          </p>

                          <div className="site-videos">
                            <a href="https://github.com/mtlouzada/salary-VS-inflation" className="btn has-before" target="_blank">
                              <span className="span">IR AO PROJETO</span>

                              {/* <ion-icon name="arrow-forward"></ion-icon> */}
                            </a>
                          </div>

                        </div>

                      </div>

                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </article>
        </main>
        <section id="habilidades" className="service fade-in" aria-labelledby="service-label">
          <div className="container">

            <div className="title-wrapper">
              <div>
                <p className="section-subtitle">
                  Habilidades Técnicas
                </p>
                <h2 className="h2 section-title" id="service-label">Avanço Web</h2>
              </div>
            </div>

            <div className="slider" data-slider>

              <ul className="slider-container service-list" data-slider-container>
                <li className="slider-item" data-slider-item>
                  <div className="service-card">

                    <div className="card-icon">
                      <i className="fab fa-js-square"></i>
                    </div>

                    <h3 className="h3 card-title">JAVASCRIPT E BIBLIOTECAS/
                      FRAMEWORKS JS
                    </h3>

                    <p className="card-text">
                      - React
                      <br />
                      - Node.Js
                      <br />
                      - Jest.Js
                      <br />
                      - Sintax
                      <br />
                      - DOM
                      <br />
                      - Fetch API
                    </p>
                  </div>
                </li>

                <li className="slider-item" data-slider-item>
                  <div className="service-card">

                    <div className="card-icon">
                      <i className="fab fa-git"></i>
                    </div>

                    <h3 className="h3 card-title">VERSIONAMENTO DE CÓDIGO</h3>
                    <p className="card-text">
                      - Git
                      <br />
                      - GitHub
                    </p>
                  </div>
                </li>

                <li className="slider-item" data-slider-item>
                  <div className="service-card">

                    <div className="card-icon">
                      <i className="fab fa-npm"></i>
                    </div>

                    <h3 className="h3 card-title">GERENCIADOR DE PACOTES E TESTES</h3>
                    <p className="card-text">
                      - NPM
                      <br />
                      - PNPM
                    </p>
                  </div>
                </li>

                <li className="slider-item" data-slider-item>
                  <div className="service-card">

                    <div className="card-icon">
                      <i className="fa-solid fa-code"></i>
                    </div>
                    <h3 className="h3 card-title">OUTROS</h3>
                    <p className="card-text">
                      - Typescript
                      <br />
                      - Python
                      <br />
                      - Redux
                      <br />
                      - Vite
                      <br />
                      - Visual Studio Code (VScode)
                    </p>
                  </div>
                </li>

              </ul>
              <div className="slider-controls">
                <button className="slider-control prev" data-slider-prev aria-label="Slide to previous item">
                  <div className="line"></div>
                  <div className="arrow"></div>
                </button>

                <button className="slider-control next" data-slider-next aria-label="Slide to next item">
                  <div className="line"></div>
                  <div className="arrow"></div>
                </button>
              </div>

            </div>

          </div>
        </section>

      <section className="section portfolio fade-in" aria-labelledby="portfolio-label">

        <div className="title-wrapper container">

          <div>
            <p className="section-subtitle" id="portfolio-label">Trabalhos Antigos</p>

            <h2 className="h2 section-title">Outros Projetos</h2>
          </div>

          <p className="section-text">
            Estes são alguns dos projetos que desenvolvi durante meu primeiro curso de programação, em uma plataforma focada em estabelecer uma base sólida nos fundamentos do desenvolvimento front-end e back-end.
          </p>
        </div>

        <div className="slider fade-in" data-slider>

          <ul className="slider-container" data-slider-container>

            <li className="slider-item">
              <div className="portfolio-card img-holder" style={{ "--width": 600, "--height": 600 } as React.CSSProperties}>

                <img src="./src/imgs/coffe-house.png" width="600" height="600" loading="lazy" alt="portfolio"
                  className="img-cover" />

                <div className="card-content">
                  <h3 className="h3 card-title">Coffe House</h3>

                  <p className="card-text">Site Ecommerce</p>
                </div>

                <a href="https://mtlouzada.github.io/Manhattan-Coffee-House/" target="_blank" className="layer-link"></a>

              </div>
            </li>

            <li className="slider-item">
              <div className="portfolio-card img-holder" style={{ "--width": 600, "--height": 600 } as React.CSSProperties}>

                <img src="./src/imgs/clinica.png" width="600" height="600" loading="lazy" alt="portfolio"
                  className="img-cover" />
                <div className="card-content">
                  <h3 className="h3 card-title">Clínica</h3>

                  <p className="card-text">Site Ecommerce</p>
                </div>
                <a href="https://mtlouzada.github.io/clinica/" target="_blank" className="layer-link"></a>
              </div>
            </li>

            <li className="slider-item">
              <div className="portfolio-card img-holder" style={{ "--width": 600, "--height": 600 } as React.CSSProperties}>

                <img src="./src/imgs/host-site.png" width="600" height="600" loading="lazy" alt="portfolio"
                  className="img-cover" />

                <div className="card-content">
                  <h3 className="h3 card-title">Hospedagem</h3>

                  <p className="card-text">Site Ecommerce</p>
                </div>

                <a href="https://github.com/mtlouzada/Provedor" target="_blank" className="layer-link"></a>

              </div>
            </li>

          </ul>

          <div className="slider-controls">
            <button className="slider-control prev" data-slider-prev aria-label="Slide to previous item">
              <div className="line"></div>
              <div className="arrow"></div>
            </button>
            <button className="slider-control next" data-slider-next aria-label="Slide to next item">
              <div className="line"></div>
              <div className="arrow"></div>
            </button>
          </div>
        </div>
      </section>
      <br />
                  <a
                    href="#theme"
                    className="theme-btn"
                    onClick={() => {
                      // Implement your theme toggle logic here
                      // Example: toggleTheme();
                    }}
                  >
                    <i className="fa-solid fa-moon"></i>
                  </a>

                  <a href="https://www.linkedin.com/in/matheus-louzadaa/" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                  </a>

                  <a href="#top" className="back-top-btn" aria-label="back to top" data-back-top-btn>
                    {/* <ion-icon name="caret-up-sharp" aria-hidden="true"></ion-icon> */}
                  </a>
                  <script src="./src/app.js"></script>
                  {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

                  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
                  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script> */}

                </body >



              </>
              )
}

export default App
