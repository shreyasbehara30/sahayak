"use client";

import { useEffect, useRef, useState } from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { Download, BookOpen } from "lucide-react";

export function HeroSection() {
    const vantaRef = useRef<HTMLDivElement>(null);
    const vantaEffect = useRef<any>(null);
    const [vantaLoaded, setVantaLoaded] = useState(false);

    useEffect(() => {
        if (!vantaRef.current || vantaEffect.current) return;

        // Dynamically import Vanta and Three.js
        const loadVanta = async () => {
            try {
                // Import Three.js
                const THREE = await import('three');

                // Import Vanta Birds effect
                const VantaModule = await import('vanta/dist/vanta.birds.min.js');
                const VANTA = VantaModule.default || VantaModule;

                if (typeof VANTA !== 'function') {
                    console.error('VANTA is not a function', VANTA);
                    return;
                }

                vantaEffect.current = VANTA({
                    el: vantaRef.current,
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    backgroundColor: 0xFDF5E6, // sahayak-cream
                    color1: 0x2D5A27, // sahayak-green
                    color2: 0x3D7A37, // lighter green
                    colorMode: 'lerp',
                    birdSize: 1.2,
                    wingSpan: 25.00,
                    speedLimit: 5.00,
                    separation: 40.00,
                    alignment: 40.00,
                    cohesion: 30.00,
                    quantity: 3.00,
                });

                setVantaLoaded(true);
            } catch (error) {
                console.error('Vanta.js failed to load:', error);
                // Fallback to static background
                setVantaLoaded(false);
            }
        };

        // Add a small delay to ensure DOM is ready
        const timer = setTimeout(loadVanta, 100);

        return () => {
            clearTimeout(timer);
            if (vantaEffect.current) {
                try {
                    vantaEffect.current.destroy();
                } catch (e) {
                    console.error('Error destroying Vanta:', e);
                }
                vantaEffect.current = null;
            }
        };
    }, []);

    return (
        <LazyMotion features={domAnimation} strict>
            <Section className="min-h-[90vh] flex flex-col justify-center items-center text-center relative overflow-hidden bg-sahayak-cream">
                {/* Vanta Birds Background */}
                <div
                    ref={vantaRef}
                    className="absolute inset-0 z-0"
                    style={{ width: '100%', height: '100%' }}
                />

                {/* Fallback background if Vanta doesn't load */}
                {!vantaLoaded && (
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-sahayak-green/5 rounded-full blur-3xl opacity-50" />
                        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-sahayak-green/10 rounded-full blur-3xl opacity-60" />
                    </div>
                )}

                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-sahayak-cream/20 z-[1]" />

                <m.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl relative z-10 text-center mx-auto w-full px-4"
                >
                    <div className="flex flex-col items-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-sahayak-green/10 text-sahayak-green text-sm font-medium mb-6 backdrop-blur-sm">
                            v1.0 Now Available
                        </span>
                        <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-sahayak-dark mb-6 leading-[1.1] drop-shadow-sm text-center">
                            AI assistance for classrooms
                            <br />
                            <span className="text-sahayak-green">that work offline.</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-sahayak-muted mb-8 md:mb-10 max-w-2xl leading-relaxed text-center">
                            Sahayak empowers teachers in rural schools with multilingual lesson plans,
                            voice-based doubts, and visual learning—no internet required.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-6 md:px-0">
                        <a href="/apk/app-release.apk" download>
                            <Button size="lg" className="group rounded-full px-8 w-full md:w-auto">
                                <Download className="mr-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
                                Download APK
                            </Button>
                        </a>
                        <Link href="/docs">
                            <Button variant="outline" size="lg" className="rounded-full px-8 w-full md:w-auto">
                                <BookOpen className="mr-2 h-5 w-5" />
                                View Documentation
                            </Button>
                        </Link>
                    </div>
                </m.div>

                {/* Subtle gradient overlay at bottom */}
                <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-sahayak-cream to-transparent pointer-events-none z-20"
                />
            </Section>
        </LazyMotion>
    );
}
