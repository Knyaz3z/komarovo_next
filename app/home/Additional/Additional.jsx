import './Additional.scss'
import AdditionalModal from "@/app/home/Additional/AdditionalModal";
import Image from "next/image";


function Additional() {
    const additionalArr = [
        {
            title: 'Услуги пармастера',
            desc: 'Профессиональное парение с натуральными вениками, ароматерапия и массаж для полного расслабления.',
            imgLink: '/additional_image_1.png',
        },
        {
            title: 'Гидромассажный бассейн',
            desc: 'Просторный гидромассажный бассейн с подогревом. Доступен только при аренде бани.',
            imgLink: '/additional_image_2.png',
        },
        {
            title: 'Банкетное меню',
            desc: 'Организуем вкусный и красивый стол прямо в усадьбе — от закусок до горячих блюд.',
            imgLink: '/additional_image_3.png',
        },
        {
            title: 'Аромапарение',
            desc: 'Натуральные масла и травы создают неповторимый аромат в парной и благотворно влияют на здоровье.',
            imgLink: '/additional_image_4.png',
        },
    ];

    return (
        <div className='additional'>
            <div className="additional__wrapper container">
                <h2>Дополнительные услуги для вашего отдыха</h2>
                <p>
                    Сделайте визит в «Усадьбу Комарово» ещё более приятным — добавьте к бронированию уникальные
                    сервисы.
                </p>

                <div className="additional__inner">
                    {additionalArr.map((item, index) => (
                        <div key={index} className="additional__inner-card">
                            <Image
                                width={293}
                                height={195}
                                src={item.imgLink}
                                alt={item.title}/>
                            <div className="card__content-additional">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                                {/* Вставляем клиентскую модалку */}
                                <AdditionalModal item={item}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Additional;
