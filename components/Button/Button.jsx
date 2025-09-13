'use client';

import './Button.scss'

function Button({
                    children,
                    variant = 'primary',
                    size = 'medium',
                    onClick,
                    className = '',
                    type = 'button',
                    disabled = false,
                    isLink,
                    href,
                }) {
    if (isLink) {
        return (
            <a
                type={type}
                className={`btn btn--${variant} btn--${size} ${className}`}
                onClick={onClick}
                href={href}
            >
                {children}
            </a>
        )
    }
    return (
        <button
            type={type}
            className={`btn btn--${variant} btn--${size} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button