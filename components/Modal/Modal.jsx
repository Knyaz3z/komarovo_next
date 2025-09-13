'use client';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

export default function Modal({ isOpen, onClose, children }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!isOpen || !mounted) return null;

    return ReactDOM.createPortal(
        <div className="modal__overlay" onClick={onClose}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                {/* Крестик закрытия */}
                <button className="modal__close" onClick={onClose}>
                    ×
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
}
