import './Hero.scss'
import Button from "@/components/Button/Button";

function Hero() {

    return (
        <div className='hero'>
            <h1 className='hero__head'>УСАДЬБА КОМАРОВО В ВИТЕБСКЕ <span>Русская баня на дровах, джакузи и отдых на природе</span></h1>
            <Button size={'large'}>Забронировать</Button>
            <div className="hero__images">
                <img src="/hero_image_1.webp" alt="" className="hero__item"/>
                <img src="/hero_image_2.webp" alt="" className="hero__item"/>
                <img src="/hero_image_3.webp" alt="" className="hero__item"/>
                <img src="/hero_image_4.webp" alt="" className="hero__item"/>
            </div>
        </div>
    )
}

export default Hero