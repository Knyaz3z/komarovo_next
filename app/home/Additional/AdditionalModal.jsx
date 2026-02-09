'use client';
import { useState } from 'react';
import Modal from '@/components/Modal/Modal';
import Button from '@/components/Button/Button';

export default function AdditionalModal({ item }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Подробнее</Button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em'}}>
                    <h2>{item.title}</h2>
                    <p>{item.additionalDesc}</p>
                    <Button onClick={() => setIsOpen(false)}>Связаться</Button>
                </div>
            </Modal>
        </>
    );
}
