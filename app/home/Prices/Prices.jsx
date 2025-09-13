'use client';
import './Prices.scss'
import { useState } from "react";
import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";
import ApplicationForm from "@/components/ApplicationForm/ApplicationForm";
import Image from "next/image";

function Prices() {

    const pricesArr = [
        {
            id: 1,
            title: 'Русская баня на дровах',
            imgsLink: ["/hero_image_1.webp", "/hero_image_1.webp", "/hero_image_1.webp", "/hero_image_1.webp"],
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
            imgsLink: ["/hero_image_2.webp", "/hero_image_1.webp", "/hero_image_1.webp", "/hero_image_1.webp"],
            list: ['Предоставляются шампуры и решетка'],
            price: 60,
        },
        {
            id: 3,
            title: 'Веранда с газовым грилем',
            imgsLink: ["/hero_image_1.webp", "/hero_image_1.webp", "/hero_image_1.webp", "/hero_image_1.webp"],
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
            imgsLink: ["/hero_image_1.webp", "/hero_image_1.webp", "/hero_image_1.webp", "/hero_image_1.webp"],
            list: [
                'Проведение праздничных мероприятий, корпоративов и других знаменательных событий',
                'Для комфортного размещения до 35 человек'
            ],
            price: 60,
        },
    ];

    const [activePage, setActivePage] = useState(1);
    const [activeImage, setActiveImage] = useState(0);

    const activeItem = pricesArr.find(item => item.id === activePage);

    const [isOpen, setIsOpen] = useState(false);
    const [success, setSuccess] = useState(false);

    return (
        <div className="prices">
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                {success ? (
                    <p>Заявка успешно отправлена!</p>
                ) : (
                    <ApplicationForm onSuccess={() => setSuccess(true)} />
                )}
            </Modal>

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
                        <div className="gallery-big">
                            <Image
                                src={activeItem.imgsLink[activeImage]}
                                alt={activeItem.title}
                                width={600}
                                height={400}
                                className="gallery-big"
                                priority
                            />
                        </div>

                        {/* Малые изображения */}
                        <div className="gallery-small">
                            {activeItem.imgsLink.slice(1,4).map((img, index) => (
                                <Image
                                    key={index}
                                    src={img}
                                    alt={`${activeItem.title} ${index + 1}`}
                                    width={150}
                                    height={100}
                                    className={`gallery-item ${activeImage === index ? 'active' : ''}`}
                                    onClick={() => setActiveImage(index)}
                                />
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
