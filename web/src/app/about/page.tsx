"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { m, LazyMotion, domAnimation, type Variants } from "framer-motion";

const team = [
    {
        role: "Lead Developers",
        members: [
            { name: "Shreyas Behara", title: "Lead Developer", image: "/images/shreyas.jpg" },
            { name: "Vansh Bhadani", title: "Lead Developer", image: "/images/vansh.avif" },
        ]
    },
    {
        role: "Research Team",
        members: [
            { name: "Hansika Belgavi", title: "Researcher", image: "/images/hnsika.png" },
            { name: "Alok Singh", title: "Researcher", image: "/images/image.png" },
        ]
    }
];

// Animation variants - Google Antigravity style
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 50
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

const headingVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

export default function AboutPage() {
    return (
        <LazyMotion features={domAnimation} strict>
            <main className="min-h-screen bg-sahayak-cream pt-24">
                {/* Introduction Section */}
                <Section className="bg-white rounded-b-[40px] shadow-sm mb-12 border-b border-sahayak-green/10">
                    <m.div
                        className="max-w-4xl mx-auto text-center"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={headingVariants}
                    >
                        <span className="text-sahayak-green font-bold tracking-wide uppercase text-sm mb-4 block">Our Mission</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-sahayak-dark mb-8">
                            Bridging the digital divide in education.
                        </h1>
                        <p className="text-lg md:text-xl text-sahayak-muted leading-relaxed">
                            Sahayak is an open-source initiative built to assist teachers in rural classrooms.
                            By leveraging offline-first AI and multilingual voice technology, we bring personalized learning assistants to schools without reliable internet derived from the need for equitable access to technology.
                        </p>
                    </m.div>
                </Section>

                {/* Team Section */}
                <Section>
                    <div className="max-w-5xl mx-auto">
                        <m.div
                            className="text-center mb-16"
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, margin: "-50px" }}
                            variants={headingVariants}
                        >
                            <h2 className="text-3xl font-bold text-sahayak-dark">Meet the Team</h2>
                            <p className="text-sahayak-muted mt-2">The minds building Sahayak.</p>
                        </m.div>

                        <div className="grid gap-16">
                            {team.map((group, idx) => (
                                <div key={idx}>
                                    <m.h3
                                        className="text-xl font-bold text-sahayak-green mb-8 text-center uppercase tracking-widest opacity-80 border-b border-sahayak-green/10 pb-4 max-w-xs mx-auto"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 0.8, y: 0 }}
                                        viewport={{ once: false, margin: "-50px" }}
                                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        {group.role}
                                    </m.h3>
                                    <m.div
                                        className="grid md:grid-cols-2 gap-8 justify-center max-w-3xl mx-auto"
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: false, margin: "-50px" }}
                                        variants={containerVariants}
                                    >
                                        {group.members.map((member, mIdx) => (
                                            <m.div
                                                key={mIdx}
                                                variants={cardVariants}
                                                whileHover={{ y: -4 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                            >
                                                <Card className="flex items-center gap-6 p-6 border-none bg-white/50 h-full">
                                                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md shrink-0">
                                                        <Image
                                                            src={member.image}
                                                            alt={member.name}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-xl text-sahayak-dark mb-1">{member.name}</div>
                                                        <div className="text-sahayak-muted font-medium bg-sahayak-green/5 inline-block px-3 py-1 rounded-full text-sm">
                                                            {member.title}
                                                        </div>
                                                    </div>
                                                </Card>
                                            </m.div>
                                        ))}
                                    </m.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                <Footer />
            </main>
        </LazyMotion>
    );
}
