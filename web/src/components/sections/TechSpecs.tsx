"use client";

import { Section } from "../ui/Section";
import { Database, Server, Smartphone, Cpu } from "lucide-react";

export function TechSpecs() {
    return (
        <Section className="bg-white">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-sahayak-dark mb-4">
                    Under the hood
                </h2>
                <p className="text-lg text-sahayak-muted">
                    A purely local AI architecture designed for low-power Android devices.
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                    {/* Device Node */}
                    <div className="text-center p-6 border-2 border-sahayak-dark rounded-2xl bg-sahayak-cream relative">
                        <Smartphone className="mx-auto mb-4 text-sahayak-dark" size={32} />
                        <h3 className="font-bold">Android Tablet</h3>
                        <p className="text-sm text-sahayak-muted">Flutter UI Layer</p>

                        {/* Connector Line */}
                        <div className="hidden md:block absolute top-1/2 -right-[26px] w-[24px] h-[2px] bg-sahayak-dark" />
                    </div>

                    {/* Core Logic Node */}
                    <div className="text-center p-8 border-2 border-[dashed] border-sahayak-muted rounded-2xl bg-white relative">
                        <div className="absolute top-[-12px] left-1/2 -translate-x-1/2 bg-white px-3 text-xs font-bold text-sahayak-muted uppercase tracking-widest">
                            On-Device Core
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2 justify-center bg-gray-50 p-2 rounded">
                                <Cpu size={16} /> <span className="text-sm font-medium">Local LLM (Ollama)</span>
                            </div>
                            <div className="flex items-center gap-2 justify-center bg-gray-50 p-2 rounded">
                                <Database size={16} /> <span className="text-sm font-medium">SQLite Vector DB</span>
                            </div>
                        </div>

                        {/* Connector Line */}
                        <div className="hidden md:block absolute top-1/2 -right-[26px] w-[24px] h-[2px] bg-sahayak-dark opacity-30" />
                    </div>

                    {/* Cloud Node */}
                    <div className="text-center p-6 border-2 border-gray-200 rounded-2xl bg-gray-50 opacity-60">
                        <Server className="mx-auto mb-4 text-gray-400" size={32} />
                        <h3 className="font-bold text-gray-400">Cloud Sync</h3>
                        <p className="text-sm text-gray-400">Optional Backup</p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
