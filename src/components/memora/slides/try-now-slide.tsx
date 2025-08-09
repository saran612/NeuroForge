import { Button } from "@/components/ui/button";

export function TryNowSlide({ id }: { id: string }) {
    return (
        <>
            <h2 className="text-4xl md:text-6xl font-black text-primary max-w-3xl">
                Experience the Future of Knowledge Access
            </h2>
            <p className="mt-4 mb-12 text-lg md:text-xl text-muted-foreground">
                Instantly test Memora with a live demo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground rounded-full font-bold shadow-lg transition-colors duration-300">
                    Try Memora
                </Button>
            </div>
        </>
    );
}
