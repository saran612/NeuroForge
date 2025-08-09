import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TeamCardProps {
    name: string;
    role: string;
    avatar: string;
    dataAiHint?: string;
}

export function TeamCard({ name, role, avatar, dataAiHint }: TeamCardProps) {
    return (
        <Card className="text-center bg-secondary/30 border-0 shadow-lg hover:bg-secondary/50 transition-colors duration-300">
            <CardHeader>
                <Avatar className="mx-auto h-24 w-24 border-4 border-background shadow-md">
                    <AvatarImage src={avatar} alt={name} data-ai-hint={dataAiHint} />
                    <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                </Avatar>
            </CardHeader>
            <CardContent>
                <h3 className="text-xl font-bold text-primary">{name}</h3>
                <p className="text-accent font-medium">{role}</p>
            </CardContent>
            <CardFooter className="justify-center gap-2">
                <Button variant="ghost" size="icon" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label={`${name}'s LinkedIn`}>
                        <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
                    </a>
                </Button>
                 <Button variant="ghost" size="icon" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label={`${name}'s GitHub`}>
                        <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
                    </a>
                </Button>
            </CardFooter>
        </Card>
    );
}
