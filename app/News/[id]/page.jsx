// app/news/[id]/page.jsx
import './NewsItem.scss';
import Button from '@/components/Button/Button';

import newsArr from '@/app/News/data';

export async function generateMetadata({ params }) {
    const news = newsArr.find((n) => n.id === params.id);

    if (!news) {
        return {
            title: 'Новость не найдена',
            description: 'Страница не найдена',
        }
    }

    return {
        title: `${news.title} | Новости Усадьбы Комарово`,
        description: news.fullText.slice(0, 160), // берём первые 160 символов
        openGraph: {
            title: news.title,
            description: news.fullText.slice(0, 160),
            images: [
                {
                    url: news.imgLink,
                    width: 1200,
                    height: 630,
                    alt: news.title,
                }
            ],
        },
    }
}


export default function NewsItem({ params }) {
    const news = newsArr.find(n => n.id === params.id);

    if (!news) return <p>Новость не найдена</p>;

    return (
        <>
            <div className="news-item container">
                <h1>{news.title}</h1>
                <span>{news.date}</span>
                <img src={news.imgLink} alt={news.title} />
                <p dangerouslySetInnerHTML={{ __html: news.fullText }}></p>
                <Button isLink href="/News" className="back-button">← Все новости</Button>
            </div>
        </>
    );
}
