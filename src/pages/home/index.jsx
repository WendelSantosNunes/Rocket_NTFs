import './style.css'

import {Header} from '../../components/Header'

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
                            <strong>200K+</strong>
                            <p>Vendas</p>
                        </div>
                        <div>
                            <strong>20</strong>
                            <p>Artistas</p>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div className="products-inf">
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id <a href="#">potenti diam</a> et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.</p>
                                <a href="#">Lorem</a>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id <a href="#">potenti diam</a> et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.</p>
                                <a href="#">Lorem</a>
                            </div>
                        </div>
                        <div className="banner">
                            <img src="../../assets/banner2.png" alt="Banner" />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}