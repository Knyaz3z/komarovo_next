import './About.scss'

function About() {

    return (
        <div className='about'>
            <div className="about__wrapper container">
                <h2>О банном комплексе "Усадьба Комарово"</h2>
                <div className="about__content">
                    <img src="/about_photo.webp" alt=""/>
                    <div className="about__content-text">
                        <p>
                            «Усадьба Комарово» — это место, где традиции русской бани сочетаются с комфортом и
                            современным сервисом.
                        </p>
                        <hr/>
                        <p>
                            Наши гости могут насладиться настоящим паром на дровах, расслабиться в гидромассажном
                            бассейне с джакузи и провести время на просторной веранде с грилем.
                        </p>
                        <hr/>
                        <p>
                            Особенность комплекса — профессиональный банщик, который подберёт оптимальную программу
                            парения и сделает ваш отдых по-настоящему целебным и приятным.
                        </p>
                    </div>
                </div>
                <div className="about__why">
                    <div className="about__why-left">
                        <h3>Почему выбирают нас?</h3>
                        <p>Традиции и натуральные материалы</p>
                        <p>Индивидуальный подход к каждому гостю</p>
                        <p>Уникальные услуги банщика</p>
                    </div>
                    <img src="/about_photo.webp" alt=""/>

                </div>
            </div>
        </div>
    )
}

export default About