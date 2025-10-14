import '@/styles/null.scss'
import '@/styles/global.scss'
import './News.scss';
import newsArr from '@/app/News/data';
import Button from '@/components/Button/Button';

export default function NewsPage() {
    return (
        <>
            <div className="news-page container">
                <h1>Новости комплекса Усадьба Комарово</h1>
                <div className="news__list">
                    {newsArr.map(({id, title, desc, date, imgLink}) => (
                        <div key={id} className="news__card">
                            <img src={imgLink} alt={title} />
                            <span>{date}</span>
                            <h3>{title}</h3>
                            <p>{desc}</p>
                            <Button variant={'primary'} isLink href={`/News/${id}`}>
                                Читать подробнее
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
}
