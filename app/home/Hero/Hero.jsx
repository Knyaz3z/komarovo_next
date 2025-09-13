import './Hero.scss';
import CTA from "@/components/CTA/CTA";
import Image from "next/image";
import dynamic from "next/dynamic";

export default function Hero() {
    return (
        <div className='hero'>
            <h1 className='hero__head'>
                УСАДЬБА КОМАРОВО В ВИТЕБСКЕ
                <span>Русская баня на дровах, джакузи и отдых на природе</span>
            </h1>

            {/* Кнопка и модалка */}
            <CTA/>
            <div className="hero__images">
                <Image
                    className={"hero__item"}
                    width={380}
                    height={500}
                    src={"/hero_image_1.webp"}
                    alt={"Усадьба Комарово фото"}/>
                <Image
                    className={"hero__item"}
                    width={380}
                    height={500}
                    src={"/hero_image_2.webp"}
                    alt={"Усадьба Комарово фото"}/>
                <Image
                    className={"hero__item"}
                    width={380}
                    height={500}
                    src={"/hero_image_3.webp"}
                    alt={"Усадьба Комарово фото"}/>
                <Image
                    className={"hero__item"}
                    width={380}
                    height={500}
                    src={"/hero_image_4.webp"}
                    alt={"Усадьба Комарово фото"}/>
            </div>
        </div>
    )
}
