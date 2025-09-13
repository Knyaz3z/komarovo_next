'use client';
import './serviceCard.scss'
import {useState} from "react";
import Button from "@/components/Button/Button";

function ServiceCard() {
    const servicesArr = [
        {
            title: 'Баня',
            list: ['Русская баня', 'Услуги банщика', 'Баня на дровах'],
            imgLink: '/services_card_1.webp'
        },
        {
            title: 'Беседка',
            list: ['Шампура и решетка', 'Свежий воздух', 'Угли можно приобрести'],
            imgLink: '/services_card_2.webp'
        },
        {
            title: 'Банкетный зал',
            list: ['Банкетное меню', 'Организация', 'Музыка'],
            imgLink: '/services_card_3.webp'
        },
        {
            title: 'Веранда',
            list: ['Панорамный вид', 'Гриль', 'Барбекю зона'],
            imgLink: '/services_card_4.webp'
        },
    ];

    return (
        <div className='services__wrapper'>
            <div className="services container">
                {servicesArr.map((service, index) => (
                    <CardItem
                        key={index}
                        title={service.title}
                        list={service.list}
                        img={service.imgLink}
                    />
                ))}
            </div>
        </div>
    );
}

function CardItem({title, list, img}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`card ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsHovered(!isHovered)}
        >
            <div className={`card__image ${isHovered ? 'hovered' : ''}`}>
                <img width={'300'} height={'400'} src={img} alt={title}/>
                <h3 className="card__title">{title}</h3>
            </div>

            <div className={`card__content ${isHovered ? 'hovered' : ''}`}>
                <ul className="card__list">
                    {list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <Button size={'small'}>Подробнее</Button>
            </div>
        </div>
    );
}

export default ServiceCard;
