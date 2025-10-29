import './Hero.scss'
import CTA from "@/components/CTA/CTA"
import Image from "next/image"

export default function Hero() {
    return (
        <section className='hero'>
            <h1 className='hero__head'>
                УСАДЬБА КОМАРОВО В ВИТЕБСКЕ
                <span>Русская баня на дровах и отдых на природе</span>
            </h1>

            <CTA />

            <div className="hero__images">
                <Image
                    className="hero__item"
                    width={480}
                    height={600}
                    src="/hero_image_1.webp"
                    alt="Усадьба Комарово фото"
                    priority
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 25vw"
                />
                <Image
                    className="hero__item"
                    width={480}
                    height={600}
                    src="/hero_image_2.webp"
                    alt="Усадьба Комарово фото"
                    loading="lazy"
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 25vw"
                />
                <Image
                    className="hero__item"
                    width={480}
                    height={600}
                    src="/hero_image_3.webp"
                    alt="Усадьба Комарово фото"
                    loading="lazy"
                    sizes="(max-width: 768px) 90vw, 25vw"
                />
                <Image
                    className="hero__item"
                    width={480}
                    height={600}
                    src="/hero_image_4.webp"
                    alt="Усадьба Комарово фото"
                    loading="lazy"
                    sizes="(max-width: 768px) 90vw, 25vw"
                />
            </div>
        </section>
    )
}
