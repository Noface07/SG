import React from 'react';

export function GoldDivider({ className = '' }: { className?: string }) {
    return (
        <div className={`flex items-center justify-center space-x-4 ${className}`}>
            <div className="h-px bg-gold flex-1 max-w-[100px] opacity-50"></div>
            <div className="w-2 h-2 rotate-45 border border-gold"></div>
            <div className="h-px bg-gold flex-1 max-w-[100px] opacity-50"></div>
        </div>
    );
}
