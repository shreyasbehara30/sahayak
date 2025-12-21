"use client";

import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { User } from "lucide-react";

const team = [
    {
        role: "Lead Developers",
        members: [
            { name: "Shreyas Behara", title: "Lead Developer" },
            { name: "Vansh Bhadani", title: "Lead Developer" },
        ]
    },
    {
        role: "Research Team",
        members: [
            { name: "Hansika Belgavi", title: "Researcher" },
            { name: "Alok Singh", title: "Researcher" },
        ]
    }
];

export function AboutSection() {
    return (
        <Section id="about" className="bg-white">
            <div className="max-w-4xl mx-auto mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-sahayak-dark mb-6">
                    About Sahayak
                </h2>
                <p className="text-lg md:text-xl text-sahayak-muted leading-relaxed">
                    Sahayak is an open-source initiative dedicated to bridging the digital divide in education.
                    By leveraging offline-first AI and multilingual voice technology, we bring personalized learning assistants to classrooms that need them the most—without relying on the internet.
                </p>
            </div>

            <div className="grid gap-12 max-w-5xl mx-auto">
                {team.map((group, idx) => (
                    <div key={idx}>
                        <h3 className="text-xl font-bold text-sahayak-green mb-6 text-center uppercase tracking-wide opacity-80">
                            {group.role}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6 md:gap-8 justify-center">
                            {group.members.map((member, mIdx) => (
                                <Card key={mIdx} className="flex items-center gap-4 p-4 hover:border-sahayak-green/30 transition-colors">
                                    <div className="w-16 h-16 rounded-full bg-sahayak-cream border border-sahayak-green/20 flex items-center justify-center text-sahayak-green shrink-0">
                                        {/* Placeholder for actual photo - using Initials/Icon style suitable for privacy/prototype */}
                                        <User size={24} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg text-sahayak-dark">{member.name}</div>
                                        <div className="text-sahayak-muted text-sm">{member.title}</div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
