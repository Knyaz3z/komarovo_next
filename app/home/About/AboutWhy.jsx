import './aboutWhy.scss'
import Image from 'next/image';

function AboutWhy() {

    return (
        <div className="about__why">
            <div className="about__why-item">
                <p className={'about__why-item-head'}>Традиции и натуральные материалы</p>
                <Image
                    width={628}
                    height={510}
                    src={'/about_photo_2.webp'}
                    alt={'Фото усадьбы Комарово'}/>
            </div>

            <div className="about__why-item">
                <p className={'about__why-item-head'}>Индивидуальный подход к каждому гостю</p>
                <Image
                    width={628}
                    height={510}
                    src={'/about_photo_2.webp'}
                    alt={'Фото усадьбы Комарово'}/>
            </div>

            <div className="about__why-item">
                <p className={'about__why-item-head'}>Безупречная чистота</p>
                <Image
                    width={628}
                    height={510}
                    src={'/about_photo_2.webp'}
                    alt={'Фото усадьбы Комарово'}/>
            </div>

            <div className="about__why-item">
                <p className={'about__why-item-head'}>Умиротворяющая природа</p>
                <Image
                    width={628}
                    height={510}
                    src={'/about_photo_2.webp'}
                    alt={'Фото усадьбы Комарово'}/>
            </div>


        </div>
    )
}

export default AboutWhy