"use client";

import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { Download, ShieldCheck, FileCode } from "lucide-react";

export function DownloadSection() {
    return (
        <Section className="bg-sahayak-cream py-24" container>
            <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-sahayak-green/10 text-center max-w-3xl mx-auto">
                <div className="w-16 h-16 bg-sahayak-green/10 rounded-full flex items-center justify-center mx-auto mb-6 text-sahayak-green">
                    <Download size={32} />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-sahayak-dark mb-4">
                    Ready to deploy?
                </h2>
                <p className="text-lg text-sahayak-muted mb-8">
                    Download the latest stable release. Designed for Android 10+ tablets.
                </p>

                <div className="flex flex-col gap-4 max-w-sm mx-auto mb-8 w-full">
                    <a href="/apk/app-release.apk" download className="w-full">
                        <Button size="lg" className="w-full rounded-xl h-14 md:h-16 text-base md:text-lg">
                            Download Sahayak v1.0.4 (APK)
                        </Button>
                    </a>
                    <div className="text-xs text-sahayak-muted font-mono flex items-center justify-center gap-2">
                        <ShieldCheck size={12} />
                        SHA-256: 7a8f...9c2d
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left bg-gray-50 p-6 rounded-2xl text-sm border border-gray-100">
                    <div>
                        <p className="text-gray-500 mb-1">Requirements</p>
                        <p className="font-medium text-sahayak-dark">Android 10+</p>
                        <p className="font-medium text-sahayak-dark">4GB RAM Min</p>
                    </div>
                    <div>
                        <p className="text-gray-500 mb-1">Release Date</p>
                        <p className="font-medium text-sahayak-dark">Dec 20, 2025</p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
