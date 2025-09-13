'use client';
import './Application.scss'
import Button from "@/components/Button/Button";
import { useState } from "react";

function Application() {
    const [phone, setPhone] = useState('')
    const [isAgreed, setIsAgreed] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Phone:', phone)
        // Здесь будет отправка формы
    }

    const socialLinks = [
        { name: 'Viber', icon: '📞', link: 'viber://chat?number=375293411111' },
        { name: 'Telegram', icon: '✈️', link: 'https://t.me/username' },
        { name: 'WhatsApp', icon: '💬', link: 'https://wa.me/375293411111' },
        { name: 'Instagram', icon: '📷', link: 'https://instagram.com/username' }
    ]

    return (
        <div className='application'>
            <div className="application__wrapper container">
                <div className="application__content">
                    <h2>Оставьте заявку на отдых</h2>
                    <p>Мы перезвоним вам в течение 15 минут</p>

                    <form className="application__form" onSubmit={handleSubmit}>
                        <div className="form__group">
                            <input
                                type="tel"
                                placeholder="+375 (__) ___ __ __"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="form__input"
                                required
                            />
                        </div>

                        <div className="form__agreement">
                            <label className="checkbox__label">
                                <input
                                    type="checkbox"
                                    checked={isAgreed}
                                    onChange={(e) => setIsAgreed(e.target.checked)}
                                    required
                                />
                                <span className="checkbox__custom"></span>
                                <span className="checkbox__text">
                                    Согласен на обработку персональных данных
                                </span>
                            </label>
                        </div>

                        <Button
                            type="submit"
                            variant="primary"
                            size="large"
                            className="form__button"
                            disabled={!isAgreed}
                        >
                            Перезвоните мне!
                        </Button>
                    </form>

                    <div className="application__alternative">
                        <p>Или перезвоните нам самостоятельно:</p>
                        <a href="tel:+375293411111" className="phone__link">
                            +375 29 341 11 11
                        </a>
                    </div>

                    <div className="application__social">
                        <p>Мы в социальных сетях:</p>
                        <div className="social__buttons">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social__button"
                                    aria-label={social.name}
                                >
                                    <span className="social__icon">{social.icon}</span>
                                    <span className="social__name">{social.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Application