import './style.css'

export function Header(){
    return (
        <header>
            <img src="../../assets/logo.svg" alt="Logo" />
            <nav class="information">
                <a href="#">Comprar NFT</a>
                <a href="#">Sobre</a>
                <a href="#">FAQ</a>
            </nav>
            <div class="connect">
                <img src="../../assets/logo_MetaMask.svg" alt="" />
                <p>Conectar carteira</p>
            </div>
        </header>
    )
}