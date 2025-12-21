"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/Button";
import { Download, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
                    scrolled || isMobileMenuOpen ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-sahayak-green/10" : "bg-transparent"
                )}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center relative z-50">
                        <div className="relative h-20 w-80">
                            <Image
                                src="/sahayak-logo-new.png"
                                alt="Sahayak Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/docs" className="text-sm font-medium text-sahayak-muted hover:text-sahayak-green transition-colors">
                            Documentation
                        </Link>
                        <Link href="/about" className="text-sm font-medium text-sahayak-muted hover:text-sahayak-green transition-colors">
                            About
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="text-sm font-medium text-sahayak-muted hover:text-sahayak-dark transition-colors">
                            GitHub
                        </a>
                        <a href="/apk/app-release.apk" download>
                            <Button size="sm" className="rounded-full px-6 h-10">
                                <Download size={16} className="mr-2" />
                                Download
                            </Button>
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden relative z-50 p-2 text-sahayak-dark"
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <Menu />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-sahayak-cream flex flex-col pt-32 px-6 md:hidden">
                    <div className="flex flex-col gap-6 text-xl font-bold text-sahayak-dark">
                        <Link href="/docs" onClick={() => setMobileMenuOpen(false)}>Documentation</Link>
                        <Link href="#features" onClick={() => setMobileMenuOpen(false)}>Features</Link>
                        <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
                        <a href="https://github.com" target="_blank" rel="noreferrer" onClick={() => setMobileMenuOpen(false)}>GitHub</a>
                    </div>
                    <div className="mt-8">
                        <a href="/apk/app-release.apk" download className="w-full">
                            <Button className="w-full rounded-xl h-14 text-lg">
                                <Download className="mr-2" /> Download App
                            </Button>
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
