import logo from '../../assets/img/logo.svg'
import './styles.css'
function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="logodsmeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por<a href="https://instagram.com/davidgon_m"> @davidgon_m</a>
                </p>
            </div>
        </header>

    )
}

export default Header
