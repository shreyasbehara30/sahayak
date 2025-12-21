"use client";

import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { ArrowRight } from "lucide-react";

const steps = [
    {
        step: "01",
        title: "Teacher Setup",
        desc: "Teacher selects the grade and subject. Sahayak instantly generates a lesson plan tailored to the curriculum.",
    },
    {
        step: "02",
        title: "Interactive Class",
        desc: "Sahayak assists by explaining concepts. Students can ask doubts via voice in their native language.",
    },
    {
        step: "03",
        title: "Visual Aid",
        desc: "For complex topics, Sahayak displays simple, clear animations and diagrams on the tablet screen.",
    },
    {
        step: "04",
        title: "Progress Sync",
        desc: "Learning progress is stored locally. When reliable internet is available, data syncs to the cloud securely.",
    },
];

export function SystemFlow() {
    return (
        <Section className="bg-white">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-sahayak-dark mb-4">
                    How it works in the classroom
                </h2>
                <p className="text-lg text-sahayak-muted">
                    Designed to be a seamless companion, not a distraction.
                </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-[24px] left-0 w-full h-[2px] bg-sahayak-green/10 -z-0" />

                {steps.map((item, idx) => (
                    <div key={idx} className="relative z-10 group">
                        <div className="w-12 h-12 bg-sahayak-cream border-2 border-sahayak-green rounded-full flex items-center justify-center font-bold text-sahayak-green mb-6 mx-auto md:mx-0 transition-transform group-hover:scale-110">
                            {item.step}
                        </div>

                        <div className="text-center md:text-left">
                            <h3 className="text-xl font-bold text-sahayak-dark mb-2">{item.title}</h3>
                            <p className="text-sm text-sahayak-muted leading-relaxed">{item.desc}</p>
                        </div>

                        {/* Arrow for mobile flow */}
                        {idx !== steps.length - 1 && (
                            <div className="md:hidden flex justify-center my-4 opacity-20">
                                <ArrowRight />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    );
}
