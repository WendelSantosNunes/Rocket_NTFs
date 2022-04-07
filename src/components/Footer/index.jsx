import './style.css'

import LogoImg from '../../assets/logo.svg'
import ArrowBlackImg from '../../assets/arrow-black.svg'
import InstragramImg from '../../assets/instagram.svg'
import YoutubeImg from '../../assets/youtube.svg'
import TwitterImg from '../../assets/twitter.svg'
import LogoMetaImg from '../../assets/logo_MetaMask.svg'

export function Footer(){
    return (
        <footer>
            <div className="container back-to-top">
                <img src={LogoImg} alt="Logo" />
                <div>
                    <img src={ArrowBlackImg} alt="Arrow Black" />
                </div>
            </div>
            <div className="line">
                <div className="container contact">
                    <div className="form">
                        <p>Fique por dentro de <span>todas as novidades</span></p>
                        <form action="#">
                            <input type="text" placeholder="nft@rocketseat.com.brs"/>
                            <input type="submit" name="enviar" value="Enviar"/>    
                        </form>
                    </div>
                    <div className="company-information">
                        <div>
                            <strong>Empresa</strong>
                            <a href="#">Sobre</a>
                            <a href="#">Serviços</a>
                            <a href="#">Time</a>
                            <a href="#">Carreira</a>
                        </div>
                        <div>
                            <strong>Mapa</strong>
                            <a href="#">Galeria</a>
                            <a href="#">Popuplares</a>
                            <a href="#">Vendas</a>
                            <a href="#">Contato</a>
                        </div>
                        <div>
                            <strong>Links</strong>
                            <a href="#">FAQs</a>
                            <a href="#">Termos</a>
                            <a href="#">Política</a>
                            <a href="#">Ajuda</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="networks container">
                <a href="#">www.rocketseat.com.br</a>
                <div>
                    <a href="#"><img src={InstragramImg} alt="instagram" /></a>
                    <a href="#"><img src={YoutubeImg} alt="youtube" /></a>
                    <a href="#"><img src={TwitterImg} alt="twitter" /></a>
                    <a href="#"><img src={LogoMetaImg} alt="logo_MetaMask" /></a>
                </div>
            </div>
        </footer>
    )
}