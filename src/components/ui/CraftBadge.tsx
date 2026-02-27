import React from 'react';

export function CraftBadge({ technique }: { technique: string }) {
    return (
        <span className="inline-block px-3 py-1 border border-gold/30 text-gold text-xs font-label uppercase tracking-widest bg-gold/5">
            {technique}
        </span>
    );
}
