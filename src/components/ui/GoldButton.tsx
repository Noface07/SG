import React from 'react';
import Link from 'next/link';

interface GoldButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    variant?: 'primary' | 'outline' | 'ghost';
    fullWidth?: boolean;
}

export function GoldButton({
    children,
    href,
    variant = 'primary',
    fullWidth = false,
    className = '',
    ...props
}: GoldButtonProps) {
    const baseStyles = "inline-flex items-center justify-center font-label tracking-widest uppercase transition-all duration-300 text-sm py-3 px-8 border";

    const variants = {
        primary: "bg-gold text-white border-gold hover:bg-gold-dark hover:border-gold-dark",
        outline: "bg-transparent text-gold border-gold hover:bg-gold hover:text-white",
        ghost: "bg-transparent text-gold border-transparent hover:text-gold-dark"
    };

    const widthStyle = fullWidth ? "w-full" : "";
    const composedClassName = `${baseStyles} ${variants[variant]} ${widthStyle} ${className}`;

    if (href) {
        return (
            <Link href={href} className={composedClassName}>
                {children}
            </Link>
        );
    }

    return (
        <button className={composedClassName} {...props}>
            {children}
        </button>
    );
}
