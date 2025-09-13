// app/news/[id]/page.jsx
import './NewsItem.scss';
import Link from 'next/link';
import newsArr from '@/app/News/data';
import Header from "@/layouts/Header/Header";
import Footer from "@/layouts/Footer/Footer";
import './NewsItem.scss'
import Button from "@/components/Button/Button";

export default function NewsItem({ params }) {
    const news = newsArr.find(n => n.id === params.id);

    if (!news) return <p>Новость не найдена</p>;

    return (
        <>
            <Header />
            <div className="news-item container">
                <h1>{news.title}</h1>
                <span>{news.date}</span>
                <img src={news.imgLink} alt={news.title} />
                <p>{news.fullText}</p>
                <Button isLink href="/News" className="back-button">← Все новости</Button>
            </div>
            <Footer />
        </>
    );
}
