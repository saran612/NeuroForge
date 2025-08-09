import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SlideHeader, SlideSubHeader } from "../slide";
import { Layers, Clock, ShieldOff, type LucideProps } from "lucide-react";
import React from "react";

const problems = [
    {
        title: "Information Overload",
        description: "Crucial knowledge is buried in vast, unstructured data silos, making it hard to find.",
        icon: Layers,
    },
    {
        title: "Outdated & Inaccurate",
        description: "Dynamic information becomes stale quickly, leading to unreliable, legacy answers.",
        icon: Clock,
    },
    {
        title: "Lack of Trust",
        description: "Generative AI can 'hallucinate' facts, eroding trust and creating risk.",
        icon: ShieldOff,
    },
];

export function ProblemSlide({ id }: { id: string }) {
    return (
        <>
            <SlideHeader>The Knowledge Problem</SlideHeader>
            <SlideSubHeader>
                In today's large-scale environments, accessing reliable, up-to-date knowledge is a fundamental challenge.
            </SlideSubHeader>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {problems.map((problem) => (
                    <Card key={problem.title} className="text-center border-2 border-primary/10 bg-transparent shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                        <CardHeader>
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                <problem.icon className="h-6 w-6" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="mb-2 text-xl font-bold">{problem.title}</CardTitle>
                            <p className="text-muted-foreground">{problem.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    );
}
