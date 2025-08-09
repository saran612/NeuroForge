'use client';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function Loader() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 500),   // Reveal logo
      setTimeout(() => setStep(2), 2500),  // Start moving logo
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  // Use a separate step for rendering to avoid being unmounted by the Home component's timer
  const [renderStep, setRenderStep] = useState(0);
  useEffect(() => {
    if (step > renderStep) {
      setRenderStep(step);
    }
  }, [step]);


  if (step >= 3) { 
    return null;
  }

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex items-center justify-center bg-black'
      )}
    >
      <div
        className={cn(
          'absolute font-headline font-bold text-2xl text-white transition-all duration-1000 ease-in-out',
          'opacity-0', // Start invisible
          step >= 1 && 'opacity-100', // Fade in
          step >= 2 ? 'top-[0.75rem] left-[50px]' : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        )}
        style={{ fontFamily: 'Orbitron, sans-serif' }}
      >
        NEUROFORGE
      </div>
    </div>
  );
}
