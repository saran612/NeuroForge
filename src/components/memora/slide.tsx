import { cn } from "@/lib/utils"
import React from "react"

export const Slide = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={cn(
        "flex min-h-dvh w-full flex-col items-center justify-center p-8 md:p-16 lg:p-24 overflow-hidden border-b",
        className
      )}
      {...props}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
        {children}
      </div>
    </section>
  )
})
Slide.displayName = "Slide"

export function SlideHeader({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <h2 className={cn("text-4xl md:text-5xl font-black tracking-tight text-primary mb-3", className)}>
      {children}
    </h2>
  );
}

export function SlideSubHeader({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <p className={cn("text-lg md:text-xl text-muted-foreground max-w-3xl mb-12", className)}>
      {children}
    </p>
  );
}
