import { SlideHeader, SlideSubHeader } from "../slide";
import { Button } from "@/components/ui/button";
import { Globe, Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
    { name: 'Email', icon: Mail, href: 'mailto:contact@neuroforge.ai' },
    { name: 'Website', icon: Globe, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' },
];

export function ContactSlide({ id }: { id: string }) {
    return (
        <>
            <SlideHeader>Get in Touch</SlideHeader>
            <SlideSubHeader>We're excited to hear from you. Reach out to Team NeuroForge.</SlideSubHeader>

            <div className="flex flex-col sm:flex-row items-center gap-6">
                {socialLinks.map((link) => (
                    <Button key={link.name} variant="outline" size="lg" asChild>
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                            <link.icon className="mr-2 h-5 w-5" />
                            {link.name}
                        </a>
                    </Button>
                ))}
            </div>
        </>
    );
}
