"use client";

import { Section } from "../ui/Section";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { Mic, Smartphone, BookOpen } from "lucide-react";

export function ProductShowcase() {
    return (
        <LazyMotion features={domAnimation} strict>
            <Section className="bg-sahayak-cream overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <div className="lg:w-1/2 order-1 lg:order-1 relative mt-8 lg:mt-0">
                    {/* Abstract Device Mockup Placeholder */}
                    <div className="relative mx-auto w-full max-w-[280px] md:max-w-[350px] aspect-[9/18] bg-sahayak-dark rounded-[32px] md:rounded-[40px] border-4 md:border-8 border-sahayak-dark shadow-2xl p-3 md:p-4">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-sahayak-dark rounded-b-2xl z-20" />
                        <div className="w-full h-full bg-white rounded-[32px] overflow-hidden flex flex-col relative">
                            {/* Fake UI Header */}
                            <div className="h-16 bg-sahayak-green flex items-center px-4">
                                <div className="w-6 h-6 rounded-full bg-white/20" />
                                <div className="ml-4 h-3 w-24 bg-white/20 rounded-full" />
                            </div>
                            {/* Fake UI Content */}
                            <div className="p-4 space-y-4">
                                <div className="h-32 bg-sahayak-green/10 rounded-2xl" />
                                <div className="space-y-2">
                                    <div className="h-2 w-3/4 bg-gray-100 rounded-full" />
                                    <div className="h-2 w-1/2 bg-gray-100 rounded-full" />
                                </div>
                                <div className="h-24 bg-sahayak-green/5 rounded-2xl border border-sahayak-green/10" />
                            </div>

                            {/* Floating Badge */}
                            <m.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute bottom-8 right-4 bg-white shadow-xl p-3 rounded-2xl flex items-center gap-3 border border-sahayak-green/10"
                            >
                                <div className="bg-sahayak-green/10 p-2 rounded-full text-sahayak-green">
                                    <Mic size={20} />
                                </div>
                                <div className="text-sm">
                                    <p className="font-bold text-sahayak-dark">Voice Active</p>
                                    <p className="text-xs text-sahayak-muted">Listening...</p>
                                </div>
                            </m.div>
                        </div>
                    </div>

                    {/* Decorative Blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-sahayak-green/5 rounded-full blur-3xl -z-10" />
                </div>

                <div className="lg:w-1/2 order-1 lg:order-2">
                    <span className="text-sahayak-green font-semibold tracking-wide uppercase text-xs md:text-sm">Product Overview</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-sahayak-dark mt-3 md:mt-4 mb-4 md:mb-6 leading-tight">
                        Offline intelligence for <br className="hidden md:block" />every student.
                    </h2>
                    <p className="text-base md:text-lg text-sahayak-muted mb-6 md:mb-8 leading-relaxed">
                        Sahayak converts the Android device into a powerful teaching assistant. It plans lessons, answers questions using local AI, and explains complex topics through generated animations—all without touching the internet.
                    </p>

                    <div className="space-y-6">
                        {[
                            { title: "Fully Offline", desc: "No data plan needed. Works in the most remote areas.", icon: Smartphone },
                            { title: "Multilingual Voice", desc: "Speaks and understands local Indian languages.", icon: Mic },
                            { title: "Visual Explanations", desc: "Generates diagrams and animations on the fly.", icon: BookOpen },
                        ].map((feature, idx) => (
                            <div key={idx} className="flex gap-4 items-start">
                                <div className="bg-white p-3 rounded-2xl border border-sahayak-green/10 shrink-0 text-sahayak-green shadow-sm">
                                    <feature.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-sahayak-dark">{feature.title}</h3>
                                    <p className="text-sahayak-muted">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
        </LazyMotion>
    );
}
