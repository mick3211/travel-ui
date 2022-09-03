import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    color?: 'primary' | 'light';
}

export const Button: React.FC<ButtonProps> = ({
    children,
    color = 'primary',
    ...props
}) => {
    const theme = `btn-${color}`;

    return (
        <button
            className={`btn ${
                color === 'primary' ? 'btn-primary' : 'btn-light'
            }`}
            {...props}
        >
            {children}
        </button>
    );
};
