import { cn } from '@/lib/utils';
import React from 'react';

export const MemoraLogo = ({ className }: { className?: string }) => (
    <div className={cn('font-headline font-black text-8xl md:text-9xl text-primary-foreground', className)} style={{ fontFamily: 'Poppins, sans-serif' }}>
        MEMORA
    </div>
);
