import { MemoraLogo } from "../logo";
import { Slide } from "../slide";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function TitleSlide({ id }: { id: string }) {
    return (
        <Slide 
            id={id} 
            className="bg-cover bg-center"
            style={{ 
                backgroundImage: "url('https://github.com/saran612/saran612.github.io/blob/main/asset/image/Frame%204925.png?raw=true')",
                animation: "fadeIn 2s ease-in-out forwards"
            }}
        >
            <div className="flex flex-col items-center justify-center space-y-6 text-white">
                <div style={{ animation: "fadeIn 1s ease-in-out 0.5s forwards", opacity: 0 }}>
                    <MemoraLogo className="text-white" />
                </div>
                <div className="my-4" style={{ animation: "fadeIn 1s ease-in-out 1.5s forwards", opacity: 0 }}>
                    <Image 
                        src="https://raw.githubusercontent.com/saran612/NeuroForge/1360d2a5af427b37164506cf77dabba99a510d73/public/Nciipc.svg" 
                        alt="Built for NCIIPC Startup India AI Grand Challenge 2026"
                        width={385}
                        height={77}
                        data-ai-hint="logo text"
                        className="brightness-0 invert"
                    />
                </div>
                <p className="text-lg text-white/80 font-body" style={{ fontWeight: 200, animation: "fadeIn 1s ease-in-out 1.5s forwards", opacity: 0 }}>
                    When Accuracy Matters — Ask with <span className="text-white/90 font-medium">MEMORA</span>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6" style={{ animation: "fadeIn 1s ease-in-out 2.5s forwards", opacity: 0 }}>
                    <Button size="sm" variant="outline" className="rounded-full border-2 border-white text-black bg-white hover:bg-white/90 hover:text-black w-28" asChild>
                        <a href="#problem">View Pitch</a>
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-full border-2 border-white text-white bg-transparent hover:bg-white hover:text-black w-28" asChild>
                        <a href="#try-now">Try Now</a>
                    </Button>
                </div>
            </div>
        </Slide>
    );
}
