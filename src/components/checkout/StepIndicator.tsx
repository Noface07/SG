import React from 'react';

export function StepIndicator({ currentStep }: { currentStep: number }) {
    const steps = [
        { id: 1, label: 'Safe Passage' },
        { id: 2, label: 'Order Review' },
        { id: 3, label: 'Secure Reserve' }
    ];

    return (
        <div className="flex justify-between items-center relative w-full max-w-2xl mx-auto">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gold/20 -z-10 -translate-y-1/2"></div>

            {steps.map((step) => {
                const isActive = currentStep === step.id;
                const isPast = currentStep > step.id;

                return (
                    <div key={step.id} className="flex flex-col items-center bg-[#F9F7F2] px-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-label text-sm transition-colors duration-300 border
              ${isActive ? 'bg-maroon text-[#F5EDD8] border-maroon' :
                                isPast ? 'bg-gold/20 text-maroon border-gold' : 'bg-white text-foreground/40 border-gold/20'}`}
                        >
                            {isPast ? '✓' : step.id}
                        </div>
                        <span className={`mt-3 font-label text-[10px] tracking-widest uppercase transition-colors
              ${isActive || isPast ? 'text-maroon' : 'text-foreground/40'}`}>
                            {step.label}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}
