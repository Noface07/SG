import React from 'react';
import { formatPrice } from '@/lib/utils';

interface PriceDisplayProps {
    amount: number;
    className?: string;
    showStrikethrough?: boolean;
    originalAmount?: number;
}

export function PriceDisplay({ amount, className = '', showStrikethrough, originalAmount }: PriceDisplayProps) {
    return (
        <div className={`flex items-center space-x-2 font-body ${className}`}>
            <span className="text-foreground tracking-wide font-medium">
                {formatPrice(amount)}
            </span>
            {showStrikethrough && originalAmount && (
                <span className="text-foreground/50 line-through text-sm">
                    {formatPrice(originalAmount)}
                </span>
            )}
        </div>
    );
}
