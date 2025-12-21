import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-sahayak-cream border-t border-sahayak-green/10 py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="font-bold text-sahayak-dark text-lg">Sahayak AI</h3>
                        <p className="text-sm text-sahayak-muted mt-1">
                            Open source classroom assistant.
                        </p>
                    </div>

                    <div className="flex gap-6 text-sm font-medium text-sahayak-muted">
                        <Link href="/docs" className="hover:text-sahayak-green transition-colors">Documentation</Link>
                        <Link href="/docs/privacy" className="hover:text-sahayak-green transition-colors">Privacy Policy</Link>
                    </div>

                    <div className="flex gap-4">
                        <a href="#" className="text-sahayak-muted hover:text-sahayak-dark transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="#" className="text-sahayak-muted hover:text-sahayak-dark transition-colors">
                            <Twitter size={20} />
                        </a>
                    </div>
                </div>
                <div className="mt-8 text-center text-xs text-sahayak-muted opacity-60">
                    © 2025 Sahayak Project. Not affiliated with Google or Government of India.
                    Educational research prototype.
                </div>
            </div>
        </footer>
    );
}
