export function Footer() {
    return (
        <footer className="bg-background border-t">
            <div className="container mx-auto py-6 px-6 text-center text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} NeuroForge. All rights reserved.</p>
            </div>
        </footer>
    );
}
