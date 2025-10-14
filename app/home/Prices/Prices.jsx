'use client';
import './Prices.scss'
import {useEffect, useState} from 'react';
import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';
import ApplicationForm from '@/components/ApplicationForm/ApplicationForm';
import Image from 'next/image';

function Prices() {

    const pricesArr = [
        {
            id: 1,
            title: 'Русская баня на дровах',
            imgsLink: ["/prices/1/prices_photo_4.webp", "/prices/1/prices_photo_2.webp", "/prices/1/prices_photo_3.webp", "/prices/1/prices_photo_1.webp"],
            list: [
                'Стоимость указана для 8 человек, каждый последующий человек оплачивается отдельно',
                'Здесь укажем, что включено в цену',
                'Дополнительная услуга банщика(100Br.)',
                'пн-чт минимальное время пребывания 2 часа. пт-вс - 3 часа'
            ],
            price: 60,
        },
        {
            id: 2,
            title: 'Беседка с мангалом',
            imgsLink: ["/prices/2/prices_photo_1.webp", "/prices/2/prices_photo_2.webp", "/prices/2/prices_photo_3.webp", "/prices/2/prices_photo_4.webp"],
            list: ['Предоставляются шампуры и решетка'],
            price: 60,
        },
        {
            id: 3,
            title: 'Веранда с газовым грилем',
            imgsLink: ["/prices/3/prices_photo_4.webp", "/prices/3/prices_photo_2.webp", "/prices/3/prices_photo_3.webp", "/prices/3/prices_photo_1.webp"],
            list: [
                'Просторная уютная веранда на 12 человек',
                'Аренда газового гриля',
                'Музыкальная колонка',
                'Холодильник'
            ],
            price: 60,
        },
        {
            id: 4,
            title: 'Банкетный зал',
            imgsLink: ["/prices/4/prices_photo_1.webp", "/prices/4/prices_photo_2.webp", "/prices/4/prices_photo_3.webp", "/prices/4/prices_photo_4.webp"],
            list: [
                'Проведение праздничных мероприятий, корпоративов и других знаменательных событий',
                'Для комфортного размещения до 35 человек'
            ],
            price: 60,
        },
    ];

    const [activePage, setActivePage] = useState(1);
    const [activeImage, setActiveImage] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const activeItem = pricesArr.find(item => item.id === activePage);

    const [isOpen, setIsOpen] = useState(false);
    const [success, setSuccess] = useState(false);

    // Функции для навигации по изображениям
    const nextImage = () => {
        if (activeItem) {
            setActiveImage((prev) =>
                prev === activeItem.imgsLink.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        if (activeItem) {
            setActiveImage((prev) =>
                prev === 0 ? activeItem.imgsLink.length - 1 : prev - 1
            );
        }
    };

    // Обработчик клавиатуры для полноэкранного режима
    const handleKeyDown = (e) => {
        if (!isFullscreen) return;

        if (e.key === 'Escape') {
            setIsFullscreen(false);
        } else if (e.key === 'ArrowRight') {
            nextImage();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        }
    };

    // Добавляем обработчик клавиатуры
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isFullscreen, activeImage, activeItem]);

    return (
        <div className="prices">
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                {success ? (
                    <p>Заявка успешно отправлена!</p>
                ) : (
                    <ApplicationForm onSuccess={() => setSuccess(true)} />
                )}
            </Modal>

            {/* Модальное окно для полноэкранного просмотра */}
            {isFullscreen && activeItem && (
                <div className="fullscreen-overlay" onClick={() => setIsFullscreen(false)}>
                    <div className="fullscreen-content" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="fullscreen-close"
                            onClick={() => setIsFullscreen(false)}
                        >
                            ×
                        </button>

                        <button
                            className="nav-button prev-button"
                            onClick={prevImage}
                        >
                            ‹
                        </button>

                        <div className="fullscreen-image-container">
                            <Image
                                src={activeItem.imgsLink[activeImage]}
                                alt={activeItem.title}
                                fill
                                className="fullscreen-image"
                                style={{objectFit: 'contain'}}
                                priority
                            />
                        </div>

                        <button
                            className="nav-button next-button"
                            onClick={nextImage}
                        >
                            ›
                        </button>

                        <div className="image-counter">
                            {activeImage + 1} / {activeItem.imgsLink.length}
                        </div>
                    </div>
                </div>
            )}

            <div className="bg"></div>

            <div className="prices__wrapper container">

                <div className="prices__tabs">
                    {pricesArr.map(item => (
                        <button
                            key={item.id}
                            onClick={() => { setActivePage(item.id); setActiveImage(0); }}
                            className={`prices__tab ${activePage === item.id ? 'active' : ''}`}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>

                <div className="prices__content">
                    <div className="prices__gallery">
                        {/* Большое изображение */}
                        <div
                            className="gallery-big"
                            onClick={() => setIsFullscreen(true)}
                        >
                            <Image
                                src={activeItem.imgsLink[activeImage]}
                                alt={activeItem.title}
                                width={600}
                                height={400}
                                className="gallery-big-img"
                                priority
                            />
                            <div className="image-overlay">
                                <span>Нажмите для полноэкранного просмотра</span>
                            </div>
                        </div>

                        {/* Малые изображения */}
                        <div className="gallery-small">
                            {activeItem.imgsLink.map((img, index) => (
                                <div
                                    key={index}
                                    className={`gallery-item-wrapper ${activeImage === index ? 'active' : ''}`}
                                    onClick={() => setActiveImage(index)}
                                >
                                    <Image
                                        src={img}
                                        alt={`${activeItem.title} ${index + 1}`}
                                        width={150}
                                        height={100}
                                        className="gallery-item"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="prices__info">
                        <h3>{activeItem.title}</h3>
                        <ul>
                            {activeItem.list.filter(Boolean).map((item, index) => (
                                <li key={index}>• {item}</li>
                            ))}
                        </ul>
                        <p className="prices__price">{activeItem.price} Br / час</p>
                        <div className="prices__buttons">
                            <Button onClick={() => setIsOpen(true)}>Забронировать</Button>
                            <Button onClick={() => setIsOpen(true)} variant={'secondary'}>Есть вопрос?</Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Prices;