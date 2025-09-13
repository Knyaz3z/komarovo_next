'use client';
import './Prices.scss'
import {useState} from "react";
import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";
import ApplicationForm from "@/components/ApplicationForm/ApplicationForm";

function Prices() {

    const pricesArr = [
        {
            id: 1,
            title: 'Русская баня на дровах',
            imgsLink: ['', '', '', ''],
            list: [
                'Стоимость указана для 8 человек, каждый последующий человек оплачивается отдельно',
                'Здесь укажем, что включено в цену',
                'Дополнительная услуга банщика(100Br.)',
                'пн-чт минимальное время пребывания 2 часа. пт-вс - 3 часа'],
            price: 60,
        },
        {
            id: 2,
            title: 'Беседка с мангалом',
            imgsLink: ['', '', '', ''],
            list: ['Предоставляются шампуры и решетка', '', '', ''],
            price: 60,
        },
        {
            id: 3,
            title: 'Веранда с газовым грилем',
            imgsLink: ['', '', '', ''],
            list: [
                'Просторная уютная веранда на 12 человек',
                'Аренда газового гриля',
                'Музыкальная колонка',
                'Холодильник'],
            price: 60,

        },
        {
            id: 4,
            title: 'Банкетный зал',
            imgsLink: ['', '', '', ''],
            list: [
                'Проведение праздничных мероприятий, корпоративов и других знаменательных событий',
                'Для комфортного размещения до 35 человек',
                '',
                '',
            ],
            price: 60,

        },
    ]

    const [activePage, setActivePage] = useState(1)
    const [activeImage, setActiveImage] = useState()

    console.log(activeImage);

    function handleActiveImage(id){
        setActiveImage(id)
    }

    function changePage(page) {
        setActivePage(page)
    }

    const activeItem = pricesArr.find(item => item.id === activePage)

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
                            onClick={() => changePage(item.id)}
                            className={`prices__tab ${activePage === item.id ? 'active' : ''}`}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>

                <div className="prices__content">
                    <div className="prices__gallery">
                            <img onClick={()=>handleActiveImage(1)} className="gallery-big" src="/hero_image_1.webp" alt=""/>

                        <div className="gallery-small">
                            <img onClick={()=>handleActiveImage(2)} src="/hero_image_1.webp" alt=""/>
                            <img onClick={()=>handleActiveImage(3)} src="/hero_image_1.webp" alt=""/>
                            <img onClick={()=>handleActiveImage(4)} src="/hero_image_1.webp" alt=""/>
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

export default Prices