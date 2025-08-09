'use client';

import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import React from 'react';

type AnimatedSlideProps = {
  children: React.ReactNode;
  className?: string;
  id: string;
};

export const AnimatedSlide = React.forwardRef<HTMLDivElement, AnimatedSlideProps>(
  ({ children, className, id }, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const slideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      if (slideRef.current) {
        observer.observe(slideRef.current);
      }

      return () => {
        if (slideRef.current) {
          observer.unobserve(slideRef.current);
        }
      };
    }, []);

    return (
      <section
        id={id}
        ref={slideRef}
        className={cn(
          "flex min-h-dvh w-full flex-col items-center justify-center p-8 md:p-16 lg:p-24 overflow-hidden border-b transition-opacity duration-700 ease-in-out",
          isVisible ? 'opacity-100' : 'opacity-0',
          className
        )}
      >
        <div className={cn(
          "w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center transition-transform duration-700 ease-in-out",
           isVisible ? 'translate-y-0' : 'translate-y-10'
        )}>
          {children}
        </div>
      </section>
    );
  }
);
AnimatedSlide.displayName = 'AnimatedSlide';
