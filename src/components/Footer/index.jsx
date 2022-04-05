import './style.css'

export function Footer(){
    return (
        <footer>
            <div className="container back-to-top">
                <img src="../../assets/logo.svg" alt="Logo" />
                <div>
                    <img src="../../assets/arrow-black.svg" alt="Arrow Black" />
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
                    <a href="#"><img src="../../assets/instagram.svg" alt="instagram" /></a>
                    <a href="#"><img src="../../assets/youtube.svg" alt="youtube" /></a>
                    <a href="#"><img src="../../assets/twitter.svg" alt="twitter" /></a>
                    <a href="#"><img src="../../assets/logo_MetaMask.svg" alt="logo_MetaMask" /></a>
                </div>
            </div>
        </footer>
    )
}