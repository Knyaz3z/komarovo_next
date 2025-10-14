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
            <header className='header'>
                <Link href="/"><img src='/main_logo.svg' alt="Логотип" className="header__logo"/></Link>

                <nav className={`nav ${isMenuOpen ? 'nav--open' : ''}`}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link href="/" className="nav__link">Главная</Link>
                        </li>
                        <li className="nav__item">
                            <Link href="/#about" className="nav__link">О нас</Link>
                        </li>
                        <li className="nav__item">
                            <Link href="/#services" className="nav__link">Наши услуги</Link>
                        </li>
                        <li className="nav__item">
                            <Link href="/News" className="nav__link">Статьи</Link>
                        </li>
                        <li className="nav__item">
                            <Link href="/#contacts" className="nav__link">Контакты</Link>
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