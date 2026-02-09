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
            list: ['Русская баня на дровах', 'Гидромассажный бассейн с подогревом', 'Ароматное парение и веник'],
            imgLink: '/services_card_1.jpg',
            alt: 'Русская баня на дровах в комплексе Усадьба Комарово',
            description: 'Насладитесь настоящей русской баней на дровах. ' +
                'Расслабление, оздоровление и уникальные ритуалы парения.' +
                ' от 60 руб./час'
        },
        {
            title: 'Банкетный зал',
            list: ['Аренда зала для мероприятий', 'Банкетное меню', 'Предоставление дополнительных услуг'],
            imgLink: '/services_card_2.jpg',
            alt: 'Банкетный зал для праздников и корпоративов в Усадьбе Комарово',
            description: 'Аутентичный банкетный зал с обслуживанием. Идеально для праздников, дней рождений и корпоративов. от 440 руб.'
        },
        {
            title: 'Аренда усадьбы',
            list: ['Аренда всего комплекса для крупных мероприятий', 'Банкетный зал с верандой, баня, просторная территория', ],
            imgLink: '/services_card_3.jpg',
            alt: 'Веранда с грилем и панорамным видом в Усадьбе Комарово',
            description: 'В Вашем распоряжении банкетный зал с верандой, беседка, баня, гриль зона, просторная территория для воплощения Ваших сценариев. Цена договорная'
        },
        {
            title: 'Веранда',
            list: ['Панорамный вид на природу', 'Гриль, печь+казан+садж', 'Комфортное место для отдыха'],
            imgLink: '/services_card_4.jpg',
            alt: 'Веранда с грилем и панорамным видом в Усадьбе Комарово',
            description: 'Просторная веранда с грилем и панорамным видом вместимостью до 12 человек. Отличное место для барбекю, дружеских встреч и семейного отдыха на природе. От 240 руб.'
        },
        {
            title: 'Бассейн',
            list: ['Летний бассейн с кристальной водой', 'Шезлонги', 'Комфортное место для отдыха'],
            imgLink: '/services_card_5.jpg',
            alt: 'Веранда с грилем и панорамным видом в Усадьбе Комарово',
            description: 'Зона релаксации у бассейна с шезлонгами для загара. Эффект морской воды. Камерная атмосфера уединения. от 15 руб./чел'
        },
        {
            title: 'Беседка',
            list: ['С мангальной зоной и качелями', 'Отдых на свежем воздухе', 'Дополнительные услуги предоставляются'],
            imgLink: '/services_card_2.webp',
            alt: 'Беседка с мангалом и зоной отдыха на свежем воздухе',
            description: 'Просторная электрофицированная беседка, с подводом воды, мангальной зоной на свежем воздухе, вместимостью до 12 человек. Отличное место для отдыха с друзьями и семьей, шашлыков и уютных вечеров. от 150 руб.'
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
            onClick={() => setIsOpen(true)}
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
                    <Button size={'small'}>Подробнее</Button>
                </div>
            </div>
        </article>
    );
}

export default ServiceCard;
