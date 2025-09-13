import './Contacts.scss'
import { FaViber, FaTelegramPlane, FaWhatsapp, FaInstagram } from "react-icons/fa";

function Contacts() {
    return (
        <section className="contacts" id="contacts">
            <div className="contacts__wrapper container">
                <h2 className="contacts__title">Контакты</h2>

                <div className="contacts__info">
                    <p className="contacts__phone">
                        Телефон: <a href="tel:+375293411111">+375 (29) 341-11-11</a>
                    </p>

                    <div className="contacts__socials">
                        <a href="viber://chat?number=%2B375293411111" target="_blank" rel="noopener noreferrer">
                            <FaViber /> Viber
                        </a>
                        <a href="https://t.me/komarovovitebsk" target="_blank" rel="noopener noreferrer">
                            <FaTelegramPlane /> Telegram
                        </a>
                        <a href="https://wa.me/375293411111" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp /> WhatsApp
                        </a>
                        <a href="https://www.instagram.com/komarovovitebsk" target="_blank" rel="noopener noreferrer">
                            <FaInstagram /> Instagram
                        </a>
                    </div>
                </div>

                <div className="contacts__map">

                    <iframe
                       src="https://yandex.ru/map-widget/v1/org/kompleks_komarovo/157751121881/?ll=30.106029%2C55.167653&z=12.78"
                        width="100%"
                        height="400"
                        frameBorder="0"
                        title="map"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export default Contacts
