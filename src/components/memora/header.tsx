import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: 'Problem', href: '#problem' },
    { name: 'Solution', href: '#solution' },
    { name: 'Impact', href: '#impact' },
    { name: 'Research', href: '#research' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
];

export function Header() {
    return (
        <header id="main-header" className="fixed top-0 left-0 right-0 z-50 bg-background shadow-md shadow-black/10">
            <div className="flex h-12 items-center justify-between px-[50px]">
                <Link href="#home" id="header-logo" className="font-headline font-bold text-2xl text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    NEUROFORGE
                </Link>
                <div className="flex items-center gap-4">
                    <nav className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300">
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                    <Button asChild size="sm" className="rounded-full w-24 bg-transparent border border-white text-white hover:bg-white hover:text-black">
                        <a href="#try-now">Try Now</a>
                    </Button>
                </div>
            </div>
        </header>
    );
}
