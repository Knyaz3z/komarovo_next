import './Additional.scss'
import AdditionalModal from "@/app/home/Additional/AdditionalModal";
import Image from "next/image";


function Additional() {
    const additionalArr = [
        {
            title: 'Гидромассажный бассейн',
            desc: 'Просторный гидромассажный бассейн с подогревом. Доступен только при аренде бани.',
            additionalDesc: 'Работает круглогодично, под открытым небом, температура выставляется по желанию гостей от 26 до 39 градусов. 120 Br. на все время аренды бани',
            imgLink: '/additional_image_2.png',
        },
        {
            title: 'Аромапарение',
            desc: 'Натуральные масла и травы создают неповторимый аромат в парной и благотворно влияют на здоровье.',
            additionalDesc: 'Самостоятельное использование масел, трав, скрабов, масок в парной, комнате отдыха, других помещениях бани, и террасе оплачивается дополнительно 50 Br. В гидромассажном бассейне — ЗАПРЕЩЕНО',
            imgLink: '/additional_image_4.png',
        },
        {
            title: 'Услуги пармастера',
            desc: 'Профессиональное парение с натуральными вениками, ароматерапия и массаж для полного расслабления.',
            additionalDesc: 'Программа парения в среднем 3 часа на одного человека — от 300 Br. Строго по предварительному бронированию',
            imgLink: '/additional_image_1.png',
        },
        {
            title: 'Банкетное меню',
            desc: 'Организуем вкусный и красивый стол прямо в усадьбе — от закусок до горячих блюд.',
            additionalDesc: '*Доступно в скором времени',
            imgLink: '/additional_image_3.png',
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
