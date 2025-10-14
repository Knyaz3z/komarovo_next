import './Rest.scss'
import Image from 'next/image';

function Rest() {

    return (
        <div className="rest">
            <h2>Ваш идеальный отдых в нашем банном комплексе!</h2>
            <Image height={150} width={1920} src="/rest__image.webp" alt="Банный комплекс"/>
        </div>
    )
}

export default Rest