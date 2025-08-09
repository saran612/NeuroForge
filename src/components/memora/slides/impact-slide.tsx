import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SlideHeader, SlideSubHeader } from "../slide";
import { Zap, Target, Sparkles, Building2, type LucideProps } from "lucide-react";
import React from "react";

const impacts = [
    {
        title: "80% Time Saved",
        description: "Instantly find verified answers, eliminating manual search and verification.",
        icon: Zap,
    },
    {
        title: "95% Accuracy Boost",
        description: "Drastically improve decision-making with precise, context-aware information.",
        icon: Target,
    },
    {
        title: "Reduced Hallucinations",
        description: "Grounded in your data, Memora provides answers you can trust.",
        icon: Sparkles,
    },
    {
        title: "Enterprise Scalability",
        description: "Built to handle vast, dynamic knowledge bases with robust security.",
        icon: Building2,
    },
];

export function ImpactSlide({ id }: { id: string }) {
    return (
        <>
            <SlideHeader>The Memora Impact</SlideHeader>
            <SlideSubHeader>
                Transforming how organizations access knowledge, driving efficiency and innovation.
            </SlideSubHeader>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {impacts.map((impact) => (
                    <Card key={impact.title} className="text-center border-0 shadow-none bg-transparent">
                        <CardHeader>
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                                <impact.icon className="h-8 w-8" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="mb-2 text-xl font-bold">{impact.title}</CardTitle>
                            <p className="text-muted-foreground">{impact.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    );
}
