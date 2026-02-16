'use client';
import './Header.scss';

import {useState} from 'react';
import Link from 'next/link';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMini, setIsMini] = useState(false)

    // useEffect(() => {
    //
    //     function handleScroll(){
    //         const scrollTop = window.scrollY
    //         if scrollTop
    //     }
    //
    //
    //
    // }, []);


    return (
        <>
            <header className="header">
                <Link href="/">
                    <img src="/main_logo.svg" alt="Логотип" className="header__logo" />
                </Link>

                <nav className={`nav ${isMenuOpen ? 'nav--open' : ''}`}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link href="/" onClick={() => setIsMenuOpen(false)} className="nav__link">Главная</Link>
                        </li>
                        <li className="nav__item">
                            <Link href="/#about" onClick={() => setIsMenuOpen(false)} className="nav__link">О нас</Link>
                        </li>
                        <li className="nav__item">
                            <Link href="/#services" onClick={() => setIsMenuOpen(false)} className="nav__link">Наши услуги</Link>
                        </li>
                        <li className="nav__item">
                            <Link href="/News" onClick={() => setIsMenuOpen(false)} className="nav__link">Статьи</Link>
                        </li>
                        <li className="nav__item">
                            <Link href="/#contacts" onClick={() => setIsMenuOpen(false)} className="nav__link">Контакты</Link>
                        </li>
                    </ul>
                </nav>

                <div className="header__right">
                    <a href="tel:+375293411111" className="phone">
                        +375 29 341 11 11
                    </a>

                    <button
                        className={`burger ${isMenuOpen ? 'burger--open' : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Открыть меню"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>

            <div
                className={`menu-overlay ${isMenuOpen ? 'menu-overlay--visible' : ''}`}
                onClick={() => setIsMenuOpen(false)}
            />
        </>
    )
}

export default Header;