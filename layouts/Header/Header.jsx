'use client';
import './Header.scss';

import {useState} from 'react';
import Link from "next/link";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className='header container'>
                <Link href="/"><img src='/main_logo.svg' alt="Логотип" className="header__logo"/></Link>

                <nav className={`nav ${isMenuOpen ? 'nav--open' : ''}`}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link href="/" className="nav__link">Главная</Link>
                        </li>
                        <li className="nav__item">
                            <Link href="/" className="nav__link">О нас</Link>
                        </li>
                        <li className="nav__item">
                            <Link href="/" className="nav__link">Наши услуги</Link>
                        </li>
                        <li className="nav__item">
                            <Link href="/" className="nav__link">Контакты</Link>
                        </li>
                    </ul>
                </nav>

                {/* Кнопка бургер-меню для мобильных */}
                <button
                    className={`burger ${isMenuOpen ? 'burger--open' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Открыть меню"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </header>
            <div
                className={`menu-overlay ${isMenuOpen ? 'menu-overlay--visible' : ''}`}
                onClick={() => setIsMenuOpen(false)}
            />
        </>
    )
}

export default Header;