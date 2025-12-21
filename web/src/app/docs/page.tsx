"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { FileText, Smartphone, Book, Settings, Shield } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";

const docs = [
    {
        category: "Getting Started",
        items: [
            { title: "Installation Guide (APK)", icon: Smartphone, href: "/docs/install" },
            { title: "System Requirements", icon: Settings, href: "/docs/requirements" },
        ]
    },
    {
        category: "User Guides",
        items: [
            { title: "Teacher's Handbook", icon: Book, href: "/docs/teacher-guide" },
            { title: "Student Mode", icon: Book, href: "/docs/student-guide" },
        ]
    },
    {
        category: "Legal & Privacy",
        items: [
            { title: "Privacy Policy", icon: Shield, href: "/docs/privacy" },
            { title: "Data Safety", icon: Shield, href: "/docs/data-safety" },
        ]
    }
];

export default function DocsPage() {
    return (
        <main className="min-h-screen bg-sahayak-cream pt-24">
            <Section>
                <div className="mb-12 text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold text-sahayak-dark mb-4">Documentation Hub</h1>
                    <p className="text-lg text-sahayak-muted">All the resources you need to deploy and use Sahayak effectively.</p>
                </div>

                <div className="grid gap-16 max-w-4xl mx-auto">
                    {docs.map((section, idx) => (
                        <div key={idx} className="text-center">
                            <h2 className="text-2xl font-bold text-sahayak-dark mb-8 inline-block border-b-2 border-sahayak-green/10 pb-2 px-8">
                                {section.category}
                            </h2>
                            <div className="flex flex-wrap justify-center gap-6">
                                {section.items.map((item, i) => (
                                    <Link href={item.href} key={i} className="w-full sm:w-[calc(50%-12px)] md:w-[280px]">
                                        <Card className="hover:border-sahayak-green/30 hover:shadow-lg transition-all h-full flex flex-col items-center justify-center gap-4 p-8 cursor-pointer text-center group bg-white border-sahayak-green/10">
                                            <div className="bg-sahayak-green/5 p-4 rounded-2xl text-sahayak-green group-hover:bg-sahayak-green group-hover:text-white transition-colors">
                                                <item.icon size={32} strokeWidth={1.5} />
                                            </div>
                                            <span className="font-bold text-lg text-sahayak-dark">{item.title}</span>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
            <Footer />
        </main>
    );
}
