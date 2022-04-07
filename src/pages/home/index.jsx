import './style.css'

import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'

import GroupAvarts from '../../assets/group-avarts.png'
import Badge from '../../assets/badge.svg'
import Galeria1 from '../../assets/galeria-1.png'
import Galeria2 from '../../assets/galeria-2.png'
import Galeria3 from '../../assets/galeria-3.png'
import Galeria4 from '../../assets/galeria-4.png'
import Galeria5 from '../../assets/galeria-5.png'
import Galeria6 from '../../assets/galeria-6.png'
import Galeria7 from '../../assets/galeria-7.png'
import Galeria8 from '../../assets/galeria-8.png'
import Banner2 from '../../assets/banner2.png'
import ArrowWhite from '../../assets/arrow-white.svg'
import ArrowOrange from '../../assets/arrow-orange.svg'
import Astronauta1 from '../../assets/astronauta-1.png'
import Astronauta2 from '../../assets/astronauta-2.png'
import Astronauta3 from '../../assets/astronauta-3.png'
import Astronauta4 from '../../assets/astronauta-4.png'
import Artista1 from '../../assets/artista-1.png'
import Artista2 from '../../assets/artista-2.png'
import Artista3 from '../../assets/artista-3.png'
import Artista4 from '../../assets/artista-4.png'
import Artista5 from '../../assets/artista-5.png'
import Artista6 from '../../assets/artista-6.png'

export function Home(){
    return (
        <>
            <div className="background_fundo">
                <Header/>
                <div className="artists-inf container">
                    <div className="artists">
                        <p>Mercado digital para colecionáveis em criptos e tokens não fungível (NFT). 
                          Compre, venda e descubra ativos digitais exclusivos para você.</p>
                          <div>
                                <img src={GroupAvarts} alt="group" />
                                <div className="inf">
                                    <strong>+10</strong>
                                    <p>Artistas selecionados</p>
                                </div>
                          </div>
                    </div>
                    <div className="description">
                        <p>Descubra a verdadeira arte digital e colecione diversas NFTs</p>
                    </div>
                    <div className="badge">
                        <img src={Badge} alt="Badge" />
                    </div>
                </div>
                <div className="gallery container">
                    <img src={Galeria1} alt="galeria 1" />
                    <img src={Galeria2} alt="galeria 2" />
                    <img src={Galeria3} alt="galeria 3" />
                    <img src={Galeria4} alt="galeria 4" />
                    <img src={Galeria5} alt="galeria 5" />
                    <img src={Galeria6} alt="galeria 6" />
                    <img src={Galeria7} alt="galeria 7" />
                    <img src={Galeria8} alt="galeria 8" />
                </div>
            </div>
            <main>
                <section className="products"> 
                    <div className="results">
                        <div>
                            <strong>10K+</strong>
                            <p>Artes</p>
                        </div>
                        <div>
                            <strong>200+</strong>
                            <p>Vendas</p>
                        </div>
                        <div>
                            <strong>20</strong>
                            <p>Artistas</p>
                        </div>
                    </div>
                    <div className="products-inf">
                        <div className="inf">
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id <a href="#">potenti diam</a> et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.</p>
                                <a href="#">Lorem</a>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id <a href="#">potenti diam</a> et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.</p>
                                <a href="#">Lorem</a>
                            </div>
                        </div>
                        <img src={Banner2} alt="Banner" />
                    </div>
                </section>
                <section className="popular container">
                    <h2><span>Populares</span> da semana</h2>
                    <div className="artists-popular">
                        <div>
                            <div className="selected-artists artists">
                                <div>
                                    <strong>Astrounauta 1</strong>
                                    <img src={ArrowWhite} alt="Arrow white" />
                                </div>
                                <div>
                                    <p>Mayk Brito</p>
                                    <p>1.50 RKT</p>
                                </div>
                                <img src={Astronauta1} alt="Astronauta 1" />
                            </div>
                            <div className="artists">
                                <div>
                                    <strong>Astrounauta 3</strong>
                                    <img src={ArrowWhite} alt="Arrow white" />
                                </div>
                                <div>
                                    <p>João Inácio (Biro)o</p>
                                    <p>3.75 RKT</p>
                                </div>
                                <img src={Astronauta2} alt="Astronauta 3" />
                            </div>
                        </div>
                        <hr />
                        <div>
                            <div className="selected-artists artists">
                                <div>
                                    <strong>Astrounauta 2</strong>
                                    <img src={ArrowWhite} alt="Arrow white" />
                                </div>
                                <div>
                                    <p>Jakeliny Gracielly</p>
                                    <p>2.0 RKT</p>
                                </div>
                                <img src={Astronauta3} alt="Astronauta 2" />
                            </div>
                            <div className="artists">
                                <div>
                                    <strong>Astrounauta 4</strong>
                                    <img src={ArrowWhite} alt="Arrow white" />
                                </div>
                                <div>
                                    <p>Tamires Santos</p>
                                    <p>4.30 RKT</p>
                                </div>
                                <img src={Astronauta4} alt="Astronauta 4" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="best-artists container">
                    <h2><span>Melhores</span> artistas</h2>
                    <div className="best-artists-collection">
                        <div className="best-artists-inf">
                            <img src={Artista1} alt="artista 1" />
                            <div>
                                <p>Mayk Brito</p>
                                <span>80 Fotografias</span>
                            </div>
                        </div>
                        <div className="best-artists-inf">
                            <img src={Artista2} alt="artista 2" />
                            <div>
                                <p>Jakeliny G.</p>
                                <span>99 Fotografias</span>
                            </div>
                        </div>
                        <div className="best-artists-inf">
                            <img src={Artista3} alt="artista 3" />
                            <div>
                                <p>João I. (Biro)</p>
                                <span>50 Fotografias</span>
                            </div>                          
                        </div>
                        <div className="best-artists-inf">
                            <img src={Artista4} alt="artista 4" />
                            <div>
                                <p>Tamires Santos</p>
                                <span>43 Fotografias</span>
                            </div>
                        </div>
                        <div className="best-artists-inf">
                            <img src={Artista5} alt="artista 5" />
                            <div>
                                <p>Ana Silva</p>
                                <span>28 Fotografias</span>
                            </div> 
                        </div>
                        <div className="best-artists-inf">
                            <img src={Artista6} alt="artista 6" />
                            <div>
                                <p>Diego F.</p>
                                <span>20 Fotografias</span>
                            </div>                          
                        </div>
                    </div>
                    <div>
                        <a href="#">Ver todos os artistas</a>
                        <img src={ArrowOrange} alt="Arrow orange" />
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}