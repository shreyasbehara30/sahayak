"use client";

import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { BookOpen, Calendar, HelpCircle, Layers, Mic, PenTool } from "lucide-react";

export function FeatureDeepDive() {
    return (
        <Section id="features" className="bg-sahayak-cream">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-sahayak-dark mb-4">
                    Built for the whole classroom
                </h2>
                <p className="text-lg text-sahayak-muted">
                    Specific tools for teachers to manage, and students to learn.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* Teacher Column */}
                <div>
                    <h3 className="text-2xl font-bold text-sahayak-dark mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-sahayak-green text-white flex items-center justify-center text-sm">T</span>
                        For Teachers
                    </h3>
                    <div className="space-y-4">
                        {[
                            { icon: Calendar, title: "Multi-grade Logic", desc: "Plan lessons for Grades 1-5 simultaneously." },
                            { icon: PenTool, title: "Auto-Worksheets", desc: "Generate quizzes and homework in seconds." },
                            { icon: Layers, title: "Progress Tracking", desc: "Monitor student performance offline." },
                        ].map((f, i) => (
                            <Card key={i} className="flex gap-4 items-start p-5 hover:shadow-md transition-shadow">
                                <div className="text-sahayak-green bg-sahayak-green/10 p-2 rounded-lg">
                                    <f.icon size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sahayak-dark">{f.title}</h4>
                                    <p className="text-sm text-sahayak-muted">{f.desc}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Student Column */}
                <div>
                    <h3 className="text-2xl font-bold text-sahayak-dark mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm">S</span>
                        For Students
                    </h3>
                    <div className="space-y-4">
                        {[
                            { icon: Mic, title: "Voice Doubts", desc: "Ask questions in Hindi, Telugu, or English." },
                            { icon: BookOpen, title: "Visual Stories", desc: "Concepts explained through simple animations." },
                            { icon: HelpCircle, title: "Self-Paced Practice", desc: "AI adapts difficulty based on answers." },
                        ].map((f, i) => (
                            <Card key={i} className="flex gap-4 items-start p-5 hover:shadow-md transition-shadow">
                                <div className="text-orange-600 bg-orange-100 p-2 rounded-lg">
                                    <f.icon size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sahayak-dark">{f.title}</h4>
                                    <p className="text-sm text-sahayak-muted">{f.desc}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
