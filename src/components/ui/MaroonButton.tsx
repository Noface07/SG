import React from 'react';
import Link from 'next/link';

interface MaroonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    variant?: 'primary' | 'outline';
    fullWidth?: boolean;
}

export function MaroonButton({
    children,
    href,
    variant = 'primary',
    fullWidth = false,
    className = '',
    ...props
}: MaroonButtonProps) {
    const baseStyles = "inline-flex items-center justify-center font-label tracking-widest uppercase transition-all duration-300 text-sm py-3 px-8 border";

    const variants = {
        primary: "bg-maroon text-background border-maroon hover:bg-maroon-dark hover:border-maroon-dark",
        outline: "bg-transparent text-maroon border-maroon hover:bg-maroon hover:text-background",
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
