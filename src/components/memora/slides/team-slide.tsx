import { TeamCard } from "../team-card";
import { SlideHeader, SlideSubHeader } from "../slide";

const teamMembers = [
    {
        name: "Dr. Anya Sharma",
        role: "Lead AI Scientist",
        avatar: "https://placehold.co/100x100.png",
        dataAiHint: 'woman scientist',
    },
    {
        name: "Ben Carter",
        role: "Systems Architect",
        avatar: "https://placehold.co/100x100.png",
        dataAiHint: 'man developer',
    },
    {
        name: "Chloe Davis",
        role: "Product Lead",
        avatar: "https://placehold.co/100x100.png",
        dataAiHint: 'woman product manager',
    },
];

export function TeamSlide({ id }: { id: string }) {
    return (
        <>
            <SlideHeader>Meet Team NeuroForge</SlideHeader>
            <SlideSubHeader>The minds behind Memora, dedicated to building the future of knowledge access.</SlideSubHeader>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {teamMembers.map((member) => (
                    <TeamCard key={member.name} {...member} />
                ))}
            </div>
        </>
    );
}
