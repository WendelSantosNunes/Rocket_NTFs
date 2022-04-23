import './style.css'

import LogoImg from "../../assets/logo.svg"
import Logo_Meta from "../../assets/logo_MetaMask.svg"

export function Header(){
    return (
        <header className="container">
            <img src={LogoImg} alt="Logo" className="logo" />
            <nav className="information">
                <a href="#">Comprar NFT</a>
                <a href="#">Sobre</a>
                <a href="#">FAQ</a>
            </nav>
            <div className="connect">
                <img src={Logo_Meta} alt="Logo_MetaMask" className="logo_MetaMask" />
                <p>Conectar carteira</p>
            </div>
        </header>
    )
}