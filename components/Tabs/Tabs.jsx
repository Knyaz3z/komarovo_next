'use client';
import { useEffect, useRef } from 'react';
import './Tabs.scss';

export default function Tabs({ items, activeId, onChange }) {
    const tabsRef = useRef(null);

    const scrollTabs = (direction) => {
        if (!tabsRef.current) return;

        const container = tabsRef.current;
        const scrollAmount = container.offsetWidth * 0.7;

        container.scrollBy({
            left: direction === 'next' ? scrollAmount : -scrollAmount,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const activeButton = tabsRef.current?.querySelector('.tabs__tab--active');
        activeButton?.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest'
        });
    }, [activeId]);

    return (
        <div className="tabs">
            <button
                className="tabs__arrow tabs__arrow--prev"
                onClick={() => scrollTabs('prev')}
            >
                ‹
            </button>

            <div className="tabs__viewport">
                <div className="tabs__list" ref={tabsRef}>
                    {items.map(item => (
                        <button
                            key={item.id}
                            onClick={() => onChange(item.id)}
                            className={`tabs__tab ${
                                activeId === item.id ? 'tabs__tab--active' : ''
                            }`}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>
            </div>

            <button
                className="tabs__arrow tabs__arrow--next"
                onClick={() => scrollTabs('next')}
            >
                ›
            </button>
        </div>
    );
}
