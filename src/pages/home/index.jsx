import './style.css'

import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'

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
                                <img src="../../assets/group-avarts.png" alt="group" />
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
                        <img src="../../assets/badge.svg" alt="Badge" />
                    </div>
                </div>
                <div className="gallery container">
                    <img src="../../assets/galeria-1.png" alt="galeria 1" />
                    <img src="../../assets/galeria-2.png" alt="galeria 2" />
                    <img src="../../assets/galeria-3.png" alt="galeria 3" />
                    <img src="../../assets/galeria-4.png" alt="galeria 4" />
                    <img src="../../assets/galeria-5.png" alt="galeria 5" />
                    <img src="../../assets/galeria-6.png" alt="galeria 6" />
                    <img src="../../assets/galeria-7.png" alt="galeria 7" />
                    <img src="../../assets/galeria-8.png" alt="galeria 8" />
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
                        <img src="../../assets/banner2.png" alt="Banner" />
                    </div>
                </section>
                <section className="popular container">
                    <h2><span>Populares</span> da semana</h2>
                    <div className="artists-popular">
                        <div>
                            <div className="selected-artists artists">
                                <div>
                                    <strong>Astrounauta 1</strong>
                                    <img src="../../assets/arrow-white.svg" alt="" />
                                </div>
                                <div>
                                    <p>Mayk Brito</p>
                                    <p>1.50 RKT</p>
                                </div>
                                <img src="../../assets/astronauta-1.png" alt="" />
                            </div>
                            <div className="artists">
                                <div>
                                    <strong>Astrounauta 3</strong>
                                    <img src="../../assets/arrow-white.svg" alt="" />
                                </div>
                                <div>
                                    <p>João Inácio (Biro)o</p>
                                    <p>3.75 RKT</p>
                                </div>
                                <img src="../../assets/astronauta-2.png" alt="" />
                            </div>
                        </div>
                        <hr />
                        <div>
                            <div className="selected-artists artists">
                                <div>
                                    <strong>Astrounauta 2</strong>
                                    <img src="../../assets/arrow-white.svg" alt="" />
                                </div>
                                <div>
                                    <p>Jakeliny Gracielly</p>
                                    <p>2.0 RKT</p>
                                </div>
                                <img src="../../assets/astronauta-2.png" alt="" />
                            </div>
                            <div className="artists">
                                <div>
                                    <strong>Astrounauta 4</strong>
                                    <img src="../../assets/arrow-white.svg" alt="" />
                                </div>
                                <div>
                                    <p>Tamires Santos</p>
                                    <p>4.30 RKT</p>
                                </div>
                                <img src="../../assets/astronauta-4.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="best-artists container">
                    <h2><span>Melhores</span> artistas</h2>
                    <div className="best-artists-collection">
                        <div className="best-artists-inf">
                            <img src="../../assets/artista-1.png" alt="artista 1" />
                            <div>
                                <p>Mayk Brito</p>
                                <span>80 Fotografias</span>
                            </div>
                        </div>
                        <div className="best-artists-inf">
                            <img src="../../assets/artista-2.png" alt="artista 2" />
                            <div>
                                <p>Jakeliny G.</p>
                                <span>99 Fotografias</span>
                            </div>
                        </div>
                        <div className="best-artists-inf">
                            <img src="../../assets/artista-3.png" alt="artista 3" />
                            <div>
                                <p>João I. (Biro)</p>
                                <span>50 Fotografias</span>
                            </div>                          
                        </div>
                        <div className="best-artists-inf">
                            <img src="../../assets/artista-4.png" alt="artista 4" />
                            <div>
                                <p>Tamires Santos</p>
                                <span>43 Fotografias</span>
                            </div>
                        </div>
                        <div className="best-artists-inf">
                            <img src="../../assets/artista-5.png" alt="artista 5" />
                            <div>
                                <p>Ana Silva</p>
                                <span>28 Fotografias</span>
                            </div> 
                        </div>
                        <div className="best-artists-inf">
                            <img src="../../assets/artista-6.png" alt="artista 6" />
                            <div>
                                <p>Diego F.</p>
                                <span>20 Fotografias</span>
                            </div>                          
                        </div>
                    </div>
                    <div>
                        <a href="#">Ver todos os artistas</a>
                        <img src="../../assets/arrow-orange.svg" alt="Arrow orange" />
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}