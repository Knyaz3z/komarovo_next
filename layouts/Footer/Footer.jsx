// Footer.jsx
import "./Footer.scss";
import { FaTelegramPlane, FaWhatsapp, FaInstagram, FaViber } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                {/* Логотип или название */}
                <div className="footer__logo">Усадьба Комарово</div>

                {/* Навигация */}
                <nav className="footer__nav">
                    <a href="#services">Услуги</a>
                    <a href="#gallery">Галерея</a>
                    <a href="#contacts">Контакты</a>
                </nav>

                {/* Соцсети */}
                <div className="footer__socials">
                    <a href="viber://chat?number=%2B375293411111" aria-label="Viber">
                        <FaViber />
                    </a>
                    <a href="https://t.me/komarovo" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                        <FaTelegramPlane />
                    </a>
                    <a href="https://wa.me/375293411111" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <FaWhatsapp />
                    </a>
                    <a href="https://instagram.com/komarovo" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                </div>

                {/* Копирайт */}
                <div className="footer__copy">
                    © {new Date().getFullYear()} Усадьба Комарово. Все права защищены.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
