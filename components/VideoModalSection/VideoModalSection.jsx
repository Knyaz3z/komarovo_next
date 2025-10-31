'use client';
import React, { useState } from 'react';

import './VideoModalSection.scss';
import Modal from '@/components/Modal/Modal';

export default function VideoModalSection() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <section className="video-section">
            <button className="video-section__button" onClick={openModal}>
                ▶ Смотреть видео
            </button>

            <Modal isOpen={isOpen} onClose={closeModal}>
                <div className="video-section__video-wrapper">
                    <video
                        className="video-section__video"
                        src="/video_modal.MP4"
                        controls
                        playsInline
                        preload="metadata"
                    />
                </div>
            </Modal>
        </section>
    );
}
