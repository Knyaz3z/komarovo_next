'use client'

import {useEffect, useState} from 'react'
import './Hero.scss'
import CTA from '@/components/CTA/CTA'
import Image from 'next/image'

const IMAGES = Array.from({ length: 12 }, (_, i) => `/heroImages/hero_image_${i + 1}.webp`)

export default function Hero() {


    const [page, setPage] = useState(0)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)

        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const imagesPerPage = isMobile ? 1 : 4
    const totalPages = Math.ceil(IMAGES.length / imagesPerPage)

    useEffect(() => {
        const interval = setInterval(() => {
            setPage(prev => (prev + 1) % totalPages)
        }, 4000)

        return () => clearInterval(interval)
    }, [totalPages])

    const visibleImages = IMAGES.slice(
        page * imagesPerPage,
        page * imagesPerPage + imagesPerPage
    )

    return (
        <section className="hero">
            <h1 className="hero__head">
                УСАДЬБА КОМАРОВО В ВИТЕБСКЕ
                <span>Русская баня на дровах и отдых на природе</span>
            </h1>

            <CTA />

            <div className={`hero__images ${isMobile ? 'is-mobile' : ''}`}>
                {visibleImages.map((src) => (
                    <Image
                        key={src}
                        className="hero__item"
                        width={480}
                        height={600}
                        src={src}
                        alt="Усадьба Комарово фото"
                        priority
                    />
                ))}
            </div>

            <div className="hero__dots">
                {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                        key={i}
                        className={`hero__dot ${i === page ? 'is-active' : ''}`}
                        onClick={() => setPage(i)}
                        aria-label={`Слайд ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}
