import './style.css'

export function Header(){
    return (
        <header className="container">
            <img src="../../assets/logo.svg" alt="Logo" />
            <nav className="information">
                <a href="#">Comprar NFT</a>
                <a href="#">Sobre</a>
                <a href="#">FAQ</a>
            </nav>
            <div className="connect">
                <img src="../../assets/logo_MetaMask.svg" alt="" />
                <p>Conectar carteira</p>
            </div>
        </header>
    )
}