import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <h1 className="header__title">Press Start Store</h1>

            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <Link to="/" className="header__nav-link">
                            Início
                        </Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to="/produtos" className="header__nav-link">
                            Produtos
                        </Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to="/contato" className="header__nav-link">
                            Contato
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;