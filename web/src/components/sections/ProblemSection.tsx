"use client";

import { m, LazyMotion, domAnimation } from "framer-motion";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Users, WifiOff, Languages, Frown } from "lucide-react";

const problems = [
    {
        icon: Users,
        title: "One Teacher, Many Grades",
        description: "In rural schools, a single teacher often manages multiple grades simultaneously, making personalized attention impossible.",
    },
    {
        icon: WifiOff,
        title: "No Reliable Internet",
        description: "Cloud-based EdTech tools fail in remote villages where connectivity is spotty or non-existent.",
    },
    {
        icon: Languages,
        title: "Language Barriers",
        description: "English-only content alienates students who think and learn best in their mother tongue.",
    },
];

export function ProblemSection() {
    return (
        <LazyMotion features={domAnimation} strict>
        <Section className="bg-white">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-sahayak-dark mb-4">
                    Why traditional EdTech fails in rural India
                </h2>
                <p className="text-lg text-sahayak-muted">
                    Reliable technology shouldn't assume reliable infrastructure.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {problems.map((item, index) => (
                    <m.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <Card className="h-full border-sahayak-green/5 hover:border-sahayak-green/20 transition-colors">
                            <div className="w-12 h-12 bg-sahayak-cream rounded-full flex items-center justify-center mb-6 text-sahayak-green">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-sahayak-dark mb-3">
                                {item.title}
                            </h3>
                            <p className="text-sahayak-muted leading-relaxed">
                                {item.description}
                            </p>
                        </Card>
                    </m.div>
                ))}
            </div>
        </Section>
        </LazyMotion>
    );
}
