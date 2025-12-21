"use client";

import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { Play } from "lucide-react";

export function VisualLearning() {
    return (
        <Section className="bg-sahayak-dark text-sahayak-cream py-24 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        Learning, visualized.
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        Textbooks can be abstract. Sahayak brings concepts to life with lightweight, offline-ready animations.
                        Whether it's the solar system or photosynthesis, students see it to believe it.
                    </p>
                    <ul className="space-y-3 mb-8 text-gray-400">
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-sahayak-green" />
                            Vector-based (Lottie) for crisp quality
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-sahayak-green" />
                            Tiny file sizes (optimized for storage)
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-sahayak-green" />
                            Synced with voice narration
                        </li>
                    </ul>

                    <Button className="bg-white text-sahayak-dark hover:bg-gray-100 rounded-full">
                        View Example
                    </Button>
                </div>

                <div className="md:w-1/2 w-full">
                    {/* Video Player */}
                    <div className="aspect-video bg-gray-800 rounded-2xl border border-gray-700 flex items-center justify-center relative overflow-hidden">
                        <video 
                            className="w-full h-full object-cover rounded-2xl"
                            controls
                            preload="metadata"
                        >
                            <source src="/water-cycle.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute bottom-4 left-4 text-sm font-medium text-gray-200 bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                            Concept: The Water Cycle
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
