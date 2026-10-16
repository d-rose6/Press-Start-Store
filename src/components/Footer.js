import "./Footer.css";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">© 2026 Davi da Rosa Santos - Press Start Store</p>

            <nav className="footer__nav">
                <ul className="footer__nav-list">
                    <li className="footer__nav-item">
                        <a href="#" className="footer__nav-link">
                            <FaInstagram /> @pressstartstore
                        </a>
                    </li>
                    <li className="footer__nav-item">
                        <a href="#" className="footer__nav-link">
                            <FaXTwitter /> @pressstartstore
                        </a>
                    </li>
                    <li className="footer__nav-item">
                        <a href="#" className="footer__nav-link">
                            <FaYoutube /> @pressstartstore
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;