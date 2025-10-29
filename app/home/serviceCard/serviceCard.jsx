'use client';
import './serviceCard.scss';
import {useState} from 'react';
import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';
import CTA from '@/components/CTA/CTA';
import Image from 'next/image';

function ServiceCard() {
    const servicesArr = [
        {
            title: 'Баня',
            list: ['Русская баня на дровах', 'Профессиональный банщик', 'Ароматное парение и веник'],
            imgLink: '/services_card_1.webp',
            alt: 'Русская баня на дровах в комплексе Усадьба Комарово',
            description: 'Насладитесь настоящей русской баней на дровах с профессиональным банщиком. Расслабление, оздоровление и уникальные ритуалы парения.'
        },
        {
            title: 'Беседка',
            list: ['Мангал с шампурами и решеткой', 'Отдых на свежем воздухе', 'Уголь для гриля предоставляется'],
            imgLink: '/services_card_2.webp',
            alt: 'Беседка с мангалом и зоной отдыха на свежем воздухе',
            description: 'Просторная беседка с гриль-зоной и свежим воздухом. Отличное место для отдыха с друзьями и семьей, шашлыков и уютных вечеров.'
        },
        {
            title: 'Банкетный зал',
            list: ['Банкетное меню', 'Организация мероприятий', 'Музыкальное сопровождение'],
            imgLink: '/services_card_3.webp',
            alt: 'Банкетный зал для праздников и корпоративов в Усадьбе Комарово',
            description: 'Современный банкетный зал с полным обслуживанием: меню, организация и музыка. Идеально для праздников, дней рождения и корпоративов.'
        },
        {
            title: 'Веранда',
            list: ['Панорамный вид на природу', 'Гриль и барбекю зона', 'Комфортное место для отдыха'],
            imgLink: '/services_card_4.webp',
            alt: 'Веранда с грилем и панорамным видом в Усадьбе Комарово',
            description: 'Просторная веранда с грилем и панорамным видом. Отличное место для барбекю, дружеских встреч и семейного отдыха на природе.'
        },
    ];

    return (
        <div className='services__wrapper'>
            <div className="services container" role="list">
                {servicesArr.map((service, index) => (
                    <CardItem
                        key={index}
                        service={service}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}

function CardItem({ service, index }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <article
            className={`card ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            role="listitem"
            aria-labelledby={`card-title-${index}`}
        >
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'1em'}} className="modal__apl-pro">
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                    <CTA/>
                </div>
            </Modal>

            <div className="card__media">
                {/* приоритетную загрузку можно оставить только на первой карточке */}
                <Image
                    src={service.imgLink}
                    alt={service.alt}
                    width={900}
                    height={600}
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 300px"
                    priority={index === 0}
                    className="card__img"
                />
                <h3 id={`card-title-${index}`} className="card__title">{service.title}</h3>
            </div>

            <div className="card__content">
                <ul className="card__list" aria-hidden={isHovered ? "false" : "true"}>
                    {service.list.map((item, i) => <li key={i}>• {item}</li>)}
                </ul>

                <div className="card__actions">
                    <Button size={'small'} onClick={() => setIsOpen(true)}>Подробнее</Button>
                </div>
            </div>
        </article>
    );
}

export default ServiceCard;
