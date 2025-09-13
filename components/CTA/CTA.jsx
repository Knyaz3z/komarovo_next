'use client';
import { useState } from 'react';
import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";
import ApplicationForm from "@/components/ApplicationForm/ApplicationForm";

export default function CTA() {
    const [isOpen, setIsOpen] = useState(false);
    const [success, setSuccess] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)} size={'large'}>Забронировать</Button>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                {success ? (
                    <p>Заявка успешно отправлена!</p>
                ) : (
                    <ApplicationForm onSuccess={() => setSuccess(true)} />
                )}
            </Modal>
        </>
    )
}
