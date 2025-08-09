import { SlideHeader, SlideSubHeader } from "../slide";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BotMessageSquare, Database, PlugZap, RefreshCw, Search } from "lucide-react";

export function SolutionSlide({ id }: { id: string }) {
    return (
        <>
            <SlideHeader>The Solution: Memora</SlideHeader>
            <SlideSubHeader>
                An AI Retrieval-Augmented Generation (RAG) system that delivers accurate, up-to-date, and contextual answers from your organization's dynamic knowledge.
            </SlideSubHeader>
            
            <div className="w-full max-w-4xl p-8 mb-12 bg-secondary/30 rounded-lg">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-primary">
                    <div className="flex flex-col items-center text-center gap-2">
                        <Search className="h-10 w-10" />
                        <span className="font-semibold">User Query</span>
                    </div>
                    <ArrowRight className="h-8 w-8 mt-4 sm:mt-0 transform sm:rotate-0 rotate-90" />
                     <div className="flex flex-col items-center text-center gap-2 p-4 bg-background rounded-lg shadow-md">
                        <span className="font-bold text-lg text-accent">Memora</span>
                        <p className="text-xs text-muted-foreground">Retrieves & Augments</p>
                    </div>
                    <ArrowRight className="h-8 w-8 mt-4 sm:mt-0 transform sm:rotate-0 rotate-90" />
                    <div className="flex flex-col items-center text-center gap-2">
                        <Database className="h-10 w-10" />
                        <span className="font-semibold">Knowledge Base</span>
                    </div>
                    <ArrowRight className="h-8 w-8 mt-4 sm:mt-0 transform sm:rotate-0 rotate-90" />
                     <div className="flex flex-col items-center text-center gap-2">
                        <BotMessageSquare className="h-10 w-10 text-accent" />
                        <span className="font-semibold text-accent">Accurate Answer</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <FeatureCard 
                    icon={BotMessageSquare} 
                    title="Accurate & Contextual"
                    description="Generates human-like answers grounded in your verified data sources."
                />
                <FeatureCard 
                    icon={RefreshCw} 
                    title="Always Up-to-Date"
                    description="Connects to dynamic knowledge bases to provide real-time information."
                />
                <FeatureCard 
                    icon={PlugZap} 
                    title="Seamless Integration"
                    description="Plug-and-play with your existing systems via simple API connectors."
                />
            </div>
        </>
    );
}

function FeatureCard({icon: Icon, title, description}: {icon: React.ElementType, title: string, description: string}) {
    return (
        <Card className="bg-transparent border-0 shadow-none">
            <CardHeader className="flex flex-row items-center gap-4 p-0 pb-4">
                 <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <Icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <p className="text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    );
}
