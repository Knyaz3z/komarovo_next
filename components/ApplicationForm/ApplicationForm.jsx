'use client';
import { useState } from "react";
import './ApplicationForm.scss';

export default function ApplicationForm({ onSuccess }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Здесь укажи свой endpoint для заявки
            const response = await fetch('/api/send-application', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, phone }),
            });

            if (!response.ok) {
                throw new Error('Ошибка при отправке заявки');
            }

            setName('');
            setPhone('');
            if (onSuccess) onSuccess();
        } catch (err) {
            setError(err.message || 'Что-то пошло не так');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="application-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="tel"
                placeholder="Телефон"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
            <button type="submit" disabled={loading}>
                {loading ? 'Отправка...' : 'Отправить'}
            </button>
            {error && <p className="application-form__error">{error}</p>}
        </form>
    );
}
