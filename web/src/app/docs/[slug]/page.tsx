import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, Download, ShieldCheck, AlertTriangle, CheckCircle, Settings, Smartphone, Wifi, Mic, Book, FileText } from "lucide-react";

export default async function DocPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    // Content Mapping
    const contentMap: Record<string, React.ReactNode> = {
        "install": (
            <div className="space-y-8 max-w-3xl mx-auto text-center">
                <div className="border-b border-sahayak-green/10 pb-8">
                    <h1 className="text-4xl font-bold text-sahayak-dark mb-4 drop-shadow-sm">Installation Guide (Android)</h1>
                    <p className="text-xl text-sahayak-muted max-w-2xl mx-auto">
                        Step-by-step instructions to deploy Sahayak on your Android devices.
                    </p>
                </div>

                {/* Overview */}
                <div className="bg-sahayak-green/5 p-8 rounded-3xl border border-sahayak-green/10 max-w-2xl mx-auto">
                    <h3 className="font-bold text-sahayak-green mb-3 flex items-center justify-center gap-2 text-lg">
                        <Smartphone size={24} /> Overview
                    </h3>
                    <p className="text-sahayak-dark leading-relaxed">
                        Sahayak is an offline-first mobile application designed for rural and low-resource classrooms.
                        Once installed, the app works fully <strong>without internet</strong> and can be used on shared tablets or phones.
                    </p>
                </div>

                {/* Requirements */}
                <section className="max-w-2xl mx-auto w-full">
                    <h2 className="text-2xl font-bold text-sahayak-dark mb-6 flex items-center justify-center gap-3">
                        <CheckCircle className="text-sahayak-green" /> System Requirements
                    </h2>
                    <ul className="space-y-4 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-left">
                        <li className="flex gap-4 items-start">
                            <div className="bg-sahayak-green/10 p-2 rounded-lg shrink-0 mt-0.5">
                                <Smartphone size={16} className="text-sahayak-green text-opacity-80" />
                            </div>
                            <div>
                                <span className="font-bold block text-sahayak-dark">Device</span>
                                <span className="text-sahayak-muted">Android smartphone or tablet</span>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="bg-sahayak-green/10 p-2 rounded-lg shrink-0 mt-0.5">
                                <Settings size={16} className="text-sahayak-green text-opacity-80" />
                            </div>
                            <div>
                                <span className="font-bold block text-sahayak-dark">Android Version</span>
                                <span className="text-sahayak-muted">Android 8.0 (Oreo) or above</span>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="bg-sahayak-green/10 p-2 rounded-lg shrink-0 mt-0.5">
                                <Download size={16} className="text-sahayak-green text-opacity-80" />
                            </div>
                            <div>
                                <span className="font-bold block text-sahayak-dark">Storage Space</span>
                                <span className="text-sahayak-muted">Minimum 300 MB free</span>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="bg-sahayak-green/10 p-2 rounded-lg shrink-0 mt-0.5">
                                <Wifi size={16} className="text-sahayak-green text-opacity-80" />
                            </div>
                            <div>
                                <span className="font-bold block text-sahayak-dark">Internet</span>
                                <span className="text-sahayak-muted">Required only for initial download</span>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="bg-sahayak-green/10 p-2 rounded-lg shrink-0 mt-0.5">
                                <Mic size={16} className="text-sahayak-green text-opacity-80" />
                            </div>
                            <div>
                                <span className="font-bold block text-sahayak-dark">Microphone</span>
                                <span className="text-sahayak-muted">Required for voice interaction (recommended)</span>
                            </div>
                        </li>
                    </ul>
                </section>

                {/* Step 1 */}
                <section className="max-w-2xl mx-auto w-full">
                    <h2 className="text-2xl font-bold text-sahayak-dark mb-4">📥 Step 1: Download the App</h2>
                    <div className="flex flex-col items-center gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                        <p className="text-sahayak-muted">Open the website on your device and tap below.</p>
                        <Button size="lg" className="rounded-full px-8 shadow-lg shadow-sahayak-green/20">
                            <Download className="mr-2" size={20} /> Download Sahayak APK
                        </Button>
                        <p className="text-sm text-sahayak-muted italic">File name: <code className="bg-white border px-2 py-1 rounded text-sahayak-dark font-mono">sahayak.apk</code></p>
                        <div className="bg-blue-50 text-blue-800 text-sm p-3 rounded-lg flex items-center gap-2 mt-2">
                            <ShieldCheck size={16} />
                            <span>Safe for school deployment</span>
                        </div>
                    </div>
                </section>

                {/* Step 2 */}
                <section className="max-w-2xl mx-auto w-full">
                    <h2 className="text-2xl font-bold text-sahayak-dark mb-4">🔐 Step 2: Allow Unknown Sources</h2>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-left">
                        <p className="text-sahayak-muted mb-4 text-center">Allow installing apps from outside the Play Store.</p>
                        <ol className="list-decimal list-inside space-y-3 text-sahayak-dark font-medium bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                            <li>Tap <strong>Settings</strong> when prompted.</li>
                            <li>Enable <strong>Allow from this source</strong>.</li>
                            <li>Tap <strong>Back</strong> to return to installer.</li>
                        </ol>
                    </div>
                </section>

                {/* Step 3 */}
                <section className="max-w-2xl mx-auto w-full">
                    <h2 className="text-2xl font-bold text-sahayak-dark mb-4">⚙️ Step 3: Install the App</h2>
                    <div className="flex flex-col items-center gap-6 bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <div className="flex items-center gap-4 text-left">
                            <div className="w-12 h-12 rounded-full bg-sahayak-green text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-sahayak-green/20">1</div>
                            <span className="font-bold text-sahayak-dark text-lg">Tap Install</span>
                        </div>
                        <div className="w-px h-8 bg-gray-200"></div>
                        <div className="flex items-center gap-4 text-left">
                            <div className="w-12 h-12 rounded-full bg-white border-2 border-sahayak-green text-sahayak-green flex items-center justify-center font-bold text-xl">2</div>
                            <span className="font-bold text-sahayak-dark text-lg">Wait ~30s</span>
                        </div>
                        <div className="w-px h-8 bg-gray-200"></div>
                        <div className="flex items-center gap-4 text-left">
                            <div className="w-12 h-12 rounded-full bg-sahayak-dark text-white flex items-center justify-center font-bold text-xl shadow-md">3</div>
                            <span className="font-bold text-sahayak-dark text-lg">Tap Open</span>
                        </div>
                    </div>
                </section>

                {/* Step 4 */}
                <section className="max-w-2xl mx-auto w-full">
                    <h2 className="text-2xl font-bold text-sahayak-dark mb-4">🎙️ Step 4: Grant Permissions</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="border border-sahayak-green/20 bg-sahayak-green/5 p-6 rounded-2xl flex flex-col items-center gap-2 transition-transform hover:scale-105">
                            <Mic size={32} className="text-sahayak-green mb-1" />
                            <div className="font-bold text-sahayak-dark">Microphone</div>
                            <div className="text-xs text-sahayak-muted">For voice interaction</div>
                        </div>
                        <div className="border border-sahayak-green/20 bg-sahayak-green/5 p-6 rounded-2xl flex flex-col items-center gap-2 transition-transform hover:scale-105">
                            <Settings size={32} className="text-sahayak-green mb-1" />
                            <div className="font-bold text-sahayak-dark">Storage</div>
                            <div className="text-xs text-sahayak-muted">For offline profiles</div>
                        </div>
                    </div>
                </section>

                {/* Step 5 */}
                <section className="max-w-2xl mx-auto w-full">
                    <h2 className="text-opacity-60 text-lg font-bold text-sahayak-dark mb-2 uppercase tracking-widest">Optional</h2>
                    <h3 className="text-2xl font-bold text-sahayak-dark mb-4">🌐 Download Language Packs</h3>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                        <p className="text-sahayak-muted mb-4">Go to <strong>Settings → Content Updates</strong> to download verified content.</p>
                        <div className="inline-flex items-center gap-2 text-sm text-sahayak-green bg-white shadow-sm border border-sahayak-green/10 px-4 py-2 rounded-full">
                            <Wifi size={16} /> <strong>Works fully offline after download</strong>
                        </div>
                    </div>
                </section>

                {/* Footer Notes */}
                <div className="grid md:grid-cols-2 gap-6 pt-8 max-w-3xl mx-auto w-full text-left">
                    <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100">
                        <h3 className="font-bold text-yellow-800 mb-3 flex items-center gap-2">
                            <AlertTriangle size={18} /> Important Notes
                        </h3>
                        <ul className="space-y-2 text-sm text-yellow-900 list-disc list-inside">
                            <li>App works in <strong>airplane mode</strong>.</li>
                            <li>Supports <strong>multi-student</strong> use.</li>
                            <li><strong>No login</strong> required.</li>
                            <li><strong>Local</strong> data storage only.</li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col justify-between">
                        <div>
                            <h3 className="font-bold text-sahayak-dark mb-2">Need Help?</h3>
                            <p className="text-sm text-sahayak-muted mb-4">Contact your school administrator if installation fails.</p>
                        </div>
                        <Button variant="outline" size="sm" className="rounded-full w-full justify-between group">
                            Contact Support <ArrowLeft className="rotate-180 group-hover:translate-x-1 transition-transform" size={16} />
                        </Button>
                    </div>
                </div>

                <div className="py-12 mt-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 rounded-full mb-6 shadow-green-200 shadow-xl">
                        <CheckCircle size={40} />
                    </div>
                    <h2 className="text-3xl font-bold text-sahayak-dark mb-2">You're Ready!</h2>
                    <p className="text-sahayak-muted max-w-md mx-auto">Sahayak is installed and ready to assist in the classroom off the grid.</p>
                </div>
            </div>
        ),
        "requirements": (
            <div className="space-y-12 max-w-3xl mx-auto text-center">
                <div className="border-b border-sahayak-green/10 pb-8">
                    <h1 className="text-4xl font-bold text-sahayak-dark mb-4 drop-shadow-sm">System Requirements</h1>
                    <p className="text-xl text-sahayak-muted max-w-2xl mx-auto">
                        Official hardware and software specifications for Sahayak Android App.
                    </p>
                </div>

                {/* Supported Devices */}
                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    <div className="bg-white p-6 rounded-3xl border border-sahayak-green/10 shadow-sm">
                        <h3 className="font-bold text-sahayak-dark mb-2 flex items-center justify-center gap-2">
                            <Smartphone className="text-sahayak-green" size={20} /> Device Type
                        </h3>
                        <ul className="text-sahayak-muted text-sm space-y-1">
                            <li>Android smartphones</li>
                            <li>Android tablets (recommended)</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-3xl border border-sahayak-green/10 shadow-sm">
                        <h3 className="font-bold text-sahayak-dark mb-2 flex items-center justify-center gap-2">
                            <CheckCircle className="text-sahayak-green" size={20} /> Usage Mode
                        </h3>
                        <ul className="text-sahayak-muted text-sm space-y-1">
                            <li>Single or shared device</li>
                            <li>Classroom & institutional use</li>
                        </ul>
                    </div>
                </div>

                {/* OS */}
                <div className="bg-sahayak-green/5 p-8 rounded-3xl max-w-2xl mx-auto">
                    <h3 className="text-lg font-bold text-sahayak-dark mb-4">Operating System</h3>
                    <div className="flex items-center justify-center gap-8">
                        <div>
                            <div className="text-3xl font-bold text-sahayak-green">8.0</div>
                            <div className="text-xs uppercase font-bold text-sahayak-muted tracking-wide mt-1">Minimum (Oreo)</div>
                        </div>
                        <div className="w-px h-12 bg-sahayak-green/20"></div>
                        <div>
                            <div className="text-3xl font-bold text-sahayak-dark">10+</div>
                            <div className="text-xs uppercase font-bold text-sahayak-muted tracking-wide mt-1">Recommended</div>
                        </div>
                    </div>
                </div>

                {/* Hardware Table */}
                <section className="max-w-3xl mx-auto w-full">
                    <h2 className="text-2xl font-bold text-sahayak-dark mb-6">Hardware Requirements</h2>
                    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-gray-50 text-sahayak-muted uppercase text-xs font-bold tracking-wider">
                                <tr>
                                    <th className="p-4 pl-6">Component</th>
                                    <th className="p-4">Minimum</th>
                                    <th className="p-4 pr-6">Recommended</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-sahayak-dark">
                                <tr>
                                    <td className="p-4 pl-6 font-medium">Processor</td>
                                    <td className="p-4 text-sahayak-muted">Quad-core ARM</td>
                                    <td className="p-4 pr-6">Octa-core ARM</td>
                                </tr>
                                <tr>
                                    <td className="p-4 pl-6 font-medium">RAM</td>
                                    <td className="p-4 text-sahayak-muted">2 GB</td>
                                    <td className="p-4 pr-6">3–4 GB</td>
                                </tr>
                                <tr>
                                    <td className="p-4 pl-6 font-medium">Storage</td>
                                    <td className="p-4 text-sahayak-muted">300 MB free</td>
                                    <td className="p-4 pr-6">500 MB free</td>
                                </tr>
                                <tr>
                                    <td className="p-4 pl-6 font-medium">Screen</td>
                                    <td className="p-4 text-sahayak-muted">7 inches</td>
                                    <td className="p-4 pr-6">8–10 inches</td>
                                </tr>
                                <tr>
                                    <td className="p-4 pl-6 font-medium">Mic</td>
                                    <td className="p-4 text-sahayak-muted">Required</td>
                                    <td className="p-4 pr-6">Built-in mic</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Connectivity & Offline */}
                <section className="max-w-2xl mx-auto w-full grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100">
                        <h3 className="font-bold text-blue-900 mb-3 flex items-center justify-center gap-2"><Wifi size={18} /> Internet</h3>
                        <p className="text-sm text-blue-800 mb-2">Required ONLY for:</p>
                        <ul className="text-sm text-blue-700 list-disc list-inside mb-4">
                            <li>Initial download</li>
                            <li>Updates & Sync (Optional)</li>
                        </ul>
                        <div className="text-xs font-bold text-blue-900 uppercase tracking-wide bg-white/50 py-1 rounded">Not for daily use</div>
                    </div>
                    <div className="bg-green-50 p-6 rounded-3xl border border-green-100">
                        <h3 className="font-bold text-green-900 mb-3 flex items-center justify-center gap-2"><CheckCircle size={18} /> Offline Support</h3>
                        <p className="text-sm text-green-800 mb-4">Designed to be fully functional without any connection.</p>
                        <div className="text-xs font-bold text-green-900 uppercase tracking-wide bg-white/50 py-1 rounded">Works in Airplane Mode</div>
                    </div>
                </section>

                {/* Permissions */}
                <section className="max-w-2xl mx-auto w-full">
                    <h2 className="text-2xl font-bold text-sahayak-dark mb-6">Permissions Required</h2>
                    <div className="flex gap-4 justify-center">
                        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
                            <div className="bg-sahayak-green/10 p-2 rounded-full"><Mic size={18} className="text-sahayak-green" /></div>
                            <div className="text-left">
                                <div className="font-bold text-sahayak-dark text-sm">Microphone</div>
                                <div className="text-xs text-sahayak-muted">Voice Interaction</div>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
                            <div className="bg-sahayak-green/10 p-2 rounded-full"><Settings size={18} className="text-sahayak-green" /></div>
                            <div className="text-left">
                                <div className="font-bold text-sahayak-dark text-sm">Storage</div>
                                <div className="text-xs text-sahayak-muted">Offline Content</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Storage & Languages Split */}
                <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto w-full text-left">
                    <div>
                        <h3 className="font-bold text-sahayak-dark mb-4 text-center">Storage Usage</h3>
                        <div className="bg-gray-50 rounded-2xl p-4 text-sm space-y-2 border border-gray-100">
                            <div className="flex justify-between"><span>App install</span><span className="font-mono text-sahayak-muted">~120 MB</span></div>
                            <div className="flex justify-between"><span>Animations</span><span className="font-mono text-sahayak-muted">~80 MB</span></div>
                            <div className="flex justify-between"><span>Student data</span><span className="font-mono text-sahayak-muted">&lt;50 MB</span></div>
                            <div className="border-t pt-2 mt-2 flex justify-between font-bold text-sahayak-dark"><span>Total</span><span>~250 MB</span></div>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-sahayak-dark mb-4 text-center">Languages (MVP)</h3>
                        <div className="bg-gray-50 rounded-2xl p-4 text-sm flex flex-wrap justify-center gap-2 border border-gray-100">
                            <span className="bg-white px-3 py-1 rounded-full border shadow-sm">Hindi</span>
                            <span className="bg-white px-3 py-1 rounded-full border shadow-sm">Telugu</span>
                            <span className="bg-white px-3 py-1 rounded-full border shadow-sm">English</span>
                        </div>
                        <p className="text-xs text-center text-sahayak-muted mt-3">Input: Voice (Primary), Touch (Secondary)</p>
                    </div>
                </div>

                {/* Deployment Checklist */}
                <section className="bg-sahayak-dark text-white p-8 rounded-[32px] max-w-2xl mx-auto">
                    <h2 className="text-xl font-bold mb-6">Deployment Suitability</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-left">
                        <div className="flex items-center gap-3"><div className="bg-green-500/20 p-1 rounded-full"><CheckCircle size={14} className="text-green-400" /></div><span className="text-sm font-medium">Low-cost Tablets</span></div>
                        <div className="flex items-center gap-3"><div className="bg-green-500/20 p-1 rounded-full"><CheckCircle size={14} className="text-green-400" /></div><span className="text-sm font-medium">Rural / Low-connectivity</span></div>
                        <div className="flex items-center gap-3"><div className="bg-green-500/20 p-1 rounded-full"><CheckCircle size={14} className="text-green-400" /></div><span className="text-sm font-medium">Shared Devices</span></div>
                        <div className="flex items-center gap-3"><div className="bg-green-500/20 p-1 rounded-full"><CheckCircle size={14} className="text-green-400" /></div><span className="text-sm font-medium">Minimal Maintenance</span></div>
                    </div>
                </section>
            </div>
        ),
        "teacher-guide": (
            <div className="space-y-12 max-w-3xl mx-auto text-center">
                <div className="border-b border-sahayak-green/10 pb-8">
                    <h1 className="text-4xl font-bold text-sahayak-dark mb-4 drop-shadow-sm">Teacher's Handbook</h1>
                    <p className="text-xl text-sahayak-muted max-w-2xl mx-auto">
                        A comprehensive guide for teachers to manage classrooms with Sahayak.
                    </p>
                </div>

                <div className="bg-sahayak-green/5 p-8 rounded-3xl border border-sahayak-green/10 max-w-2xl mx-auto">
                    <h3 className="font-bold text-sahayak-green mb-3 text-lg">Introduction</h3>
                    <p className="text-sahayak-dark leading-relaxed">
                        Sahayak acts as your <strong>assistant teacher</strong>. It helps you prepare lessons, teach multiple grades, and explain concepts using voice and animations—all while reducing your manual workload.
                    </p>
                </div>

                <section className="max-w-2xl mx-auto w-full">
                    <h2 className="text-2xl font-bold text-sahayak-dark mb-6">Getting Started</h2>
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-left">
                        <ol className="space-y-4 list-decimal list-inside font-medium text-sahayak-dark">
                            <li className="p-2 hover:bg-sahayak-green/5 rounded-lg transition-colors">Tap the <strong>Sahayak</strong> icon to open.</li>
                            <li className="p-2 hover:bg-sahayak-green/5 rounded-lg transition-colors">Select your preferred language (Hindi / Telugu / English).</li>
                            <li className="p-2 hover:bg-sahayak-green/5 rounded-lg transition-colors">Tap <strong>Teacher Mode</strong>.</li>
                        </ol>
                        <p className="mt-4 text-sm text-sahayak-muted text-center italic border-t pt-4">Login is optional. You can use Sahayak fully offline.</p>
                    </div>
                </section>

                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                        <h3 className="font-bold text-sahayak-dark mb-3">Dashboard</h3>
                        <ul className="text-sm text-sahayak-muted text-left list-disc list-inside space-y-1">
                            <li>Language & Grade Selector</li>
                            <li>Subject Selector (Math/Science)</li>
                            <li>Voice / Text Input</li>
                            <li>Generated Content Area</li>
                        </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                        <h3 className="font-bold text-sahayak-dark mb-3">Voice Helper</h3>
                        <p className="text-sm text-sahayak-muted italic mb-2">"Explain fractions for Grade 3"</p>
                        <p className="text-sm text-sahayak-muted italic">"Create a worksheet for Grade 2"</p>
                        <div className="mt-2 text-xs font-bold text-sahayak-green uppercase tracking-wide">Supports natural language</div>
                    </div>
                </div>

                <section className="max-w-2xl mx-auto w-full">
                    <h2 className="text-2xl font-bold text-sahayak-dark mb-6">Key Features</h2>
                    <div className="space-y-4">
                        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 text-left">
                            <div className="bg-blue-100 text-blue-600 p-3 rounded-xl"><Book size={20} /></div>
                            <div>
                                <div className="font-bold text-sahayak-dark">Lesson Generation</div>
                                <div className="text-sm text-sahayak-muted">Structured plans divided by grade. Read or teach directly.</div>
                            </div>
                        </div>
                        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 text-left">
                            <div className="bg-purple-100 text-purple-600 p-3 rounded-xl"><FileText size={20} /></div>
                            <div>
                                <div className="font-bold text-sahayak-dark">Worksheets & Quizzes</div>
                                <div className="text-sm text-sahayak-muted">Auto-generated questions and instant quizzes for assessment.</div>
                            </div>
                        </div>
                        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 text-left">
                            <div className="bg-orange-100 text-orange-600 p-3 rounded-xl"><Smartphone size={20} /></div>
                            <div>
                                <div className="font-bold text-sahayak-dark">Visual Explanations</div>
                                <div className="text-sm text-sahayak-muted">Step-by-step animations with voice-overs for difficult topics.</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white p-8 rounded-[32px] border border-sahayak-green/10 shadow-sm max-w-2xl mx-auto">
                    <h2 className="text-xl font-bold text-sahayak-dark mb-6">Managing Multi-Grade Classrooms</h2>
                    <div className="grid grid-cols-1 gap-4 text-left">
                        <div className="flex gap-3">
                            <CheckCircle className="text-sahayak-green shrink-0" size={20} />
                            <span className="text-sahayak-muted">Teach one grade while others practice.</span>
                        </div>
                        <div className="flex gap-3">
                            <CheckCircle className="text-sahayak-green shrink-0" size={20} />
                            <span className="text-sahayak-muted">Use Sahayak for silent independent learning.</span>
                        </div>
                        <div className="flex gap-3">
                            <CheckCircle className="text-sahayak-green shrink-0" size={20} />
                            <span className="text-sahayak-muted">Rotate students on a shared device.</span>
                        </div>
                    </div>
                </section>

                <div className="bg-sahayak-dark text-white p-8 rounded-[32px] max-w-2xl mx-auto">
                    <h2 className="text-xl font-bold mb-4">Best Practices</h2>
                    <div className="grid grid-cols-2 gap-4 text-left text-sm">
                        <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>Speak clearly</div>
                        <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>Use animations often</div>
                        <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>Encourage verbal answers</div>
                        <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>Use regular quizzes</div>
                    </div>
                </div>
            </div>
        ),
        "student-guide": (
            <div className="space-y-12 max-w-3xl mx-auto text-center">
                <div className="border-b border-sahayak-green/10 pb-8">
                    <h1 className="text-4xl font-bold text-sahayak-dark mb-4 drop-shadow-sm">Student Mode</h1>
                    <p className="text-xl text-sahayak-muted max-w-2xl mx-auto">
                        Your personal learning friend in your own language.
                    </p>
                </div>

                <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 max-w-2xl mx-auto">
                    <h3 className="font-bold text-blue-900 mb-2 text-lg">Introduction</h3>
                    <p className="text-blue-800 leading-relaxed">
                        Sahayak helps you learn new topics, practice questions, and get help using your voice.
                        It is designed to be easy to use for everyone.
                    </p>
                </div>

                <section className="max-w-2xl mx-auto w-full">
                    <h2 className="text-2xl font-bold text-sahayak-dark mb-6">Getting Started</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-sahayak-green text-white flex items-center justify-center font-bold mb-2">1</div>
                            <div className="font-bold text-sahayak-dark text-sm">Open App</div>
                        </div>
                        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-sahayak-green text-white flex items-center justify-center font-bold mb-2">2</div>
                            <div className="font-bold text-sahayak-dark text-sm">Select Language</div>
                        </div>
                        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-sahayak-green text-white flex items-center justify-center font-bold mb-2">3</div>
                            <div className="font-bold text-sahayak-dark text-sm">Tap Student Mode</div>
                        </div>
                    </div>
                </section>

                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                        <h3 className="font-bold text-sahayak-dark mb-3 flex items-center justify-center gap-2"><Mic size={18} /> Voice Learning</h3>
                        <p className="text-sm text-sahayak-muted mb-3">Speak to learn, no typing needed.</p>
                        <div className="bg-white p-3 rounded-xl text-xs text-sahayak-muted italic border border-gray-200">
                            "What is addition?"<br />"Explain this again"
                        </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                        <h3 className="font-bold text-sahayak-dark mb-3 flex items-center justify-center gap-2"><Smartphone size={18} /> Animations</h3>
                        <p className="text-sm text-sahayak-muted mb-3">Watch concepts step-by-step.</p>
                        <div className="bg-white p-3 rounded-xl text-xs text-sahayak-muted italic border border-gray-200">
                            Voice explains what is happening on screen.
                        </div>
                    </div>
                </div>

                <section className="max-w-2xl mx-auto w-full">
                    <h2 className="text-2xl font-bold text-sahayak-dark mb-6">Personal Learning</h2>
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-left space-y-4">
                        <div className="flex gap-4 items-start">
                            <div className="bg-sahayak-green/10 p-2 rounded-lg shrink-0"><CheckCircle size={20} className="text-sahayak-green" /></div>
                            <div>
                                <h4 className="font-bold text-sahayak-dark">Adaptive Questions</h4>
                                <p className="text-sm text-sahayak-muted">Review questions get harder if you do well, and easier if you need help.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="bg-sahayak-green/10 p-2 rounded-lg shrink-0"><Settings size={20} className="text-sahayak-green" /></div>
                            <div>
                                <h4 className="font-bold text-sahayak-dark">Local Progress</h4>
                                <p className="text-sm text-sahayak-muted">Your progress is saved on the device. Each student has their own path.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto pt-4">
                    <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100 text-left">
                        <h3 className="font-bold text-yellow-800 mb-3 text-sm uppercase tracking-wide">Good Habits</h3>
                        <ul className="space-y-2 text-sm text-yellow-900 list-disc list-inside">
                            <li>Listen carefully</li>
                            <li>Speak clearly</li>
                            <li>Ask questions freely</li>
                            <li>Try again if wrong</li>
                        </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-2xl border border-green-100 flex flex-col justify-center items-center">
                        <CheckCircle size={32} className="text-green-600 mb-3" />
                        <h3 className="font-bold text-green-800 mb-1">Final Note</h3>
                        <p className="text-green-700 text-sm">Sahayak is safe, ad-free, and built for your classroom.</p>
                    </div>
                </div>

                <div className="py-8">
                    <h2 className="text-2xl font-bold text-sahayak-dark">You are ready to learn!</h2>
                </div>
            </div>
        ),
        "privacy": (
            <div className="space-y-12 max-w-3xl mx-auto text-center">
                <div className="border-b border-sahayak-green/10 pb-8">
                    <h1 className="text-4xl font-bold text-sahayak-dark mb-4 drop-shadow-sm">Privacy Policy</h1>
                    <p className="text-xl text-sahayak-muted max-w-2xl mx-auto">
                        Effective Date: December 2025
                    </p>
                </div>

                <div className="bg-sahayak-green/5 p-8 rounded-3xl border border-sahayak-green/10 max-w-2xl mx-auto">
                    <h3 className="font-bold text-sahayak-green mb-3 text-lg flex items-center justify-center gap-2"><ShieldCheck size={20} /> Our Commitment</h3>
                    <p className="text-sahayak-dark leading-relaxed">
                        Sahayak is designed with a <strong>privacy-first and child-safe approach</strong>.
                        We believe that learning tools should respect user privacy, especially when used by children in shared environments.
                    </p>
                </div>

                <section className="max-w-2xl mx-auto w-full">
                    <h2 className="text-2xl font-bold text-sahayak-dark mb-6">Core Principles</h2>
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-left grid sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3"><div className="w-2 h-2 bg-sahayak-green rounded-full"></div>Offline-first</div>
                        <div className="flex items-center gap-3"><div className="w-2 h-2 bg-sahayak-green rounded-full"></div>No ads or tracking</div>
                        <div className="flex items-center gap-3"><div className="w-2 h-2 bg-sahayak-green rounded-full"></div>Minimal collection</div>
                        <div className="flex items-center gap-3"><div className="w-2 h-2 bg-sahayak-green rounded-full"></div>Child-safe design</div>
                    </div>
                </section>

                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-sahayak-dark mb-3">What We Collect</h3>
                        <ul className="text-sm text-sahayak-muted text-left space-y-2">
                            <li className="flex gap-2"><span className="text-green-600">✓</span> Grade level & Language</li>
                            <li className="flex gap-2"><span className="text-green-600">✓</span> Quiz scores (Locally)</li>
                            <li className="flex gap-2"><span className="text-green-600">✓</span> Teacher preferences</li>
                        </ul>
                        <div className="mt-4 text-xs bg-white p-2 rounded border border-gray-200 text-sahayak-muted">Stored only on-device by default.</div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-sahayak-dark mb-3">What We Do NOT Collect</h3>
                        <ul className="text-sm text-sahayak-muted text-left space-y-2">
                            <li className="flex gap-2"><span className="text-red-500">✕</span> Student Names (PII)</li>
                            <li className="flex gap-2"><span className="text-red-500">✕</span> Phone Numbers</li>
                            <li className="flex gap-2"><span className="text-red-500">✕</span> Location Data</li>
                            <li className="flex gap-2"><span className="text-red-500">✕</span> Voice Recordings</li>
                        </ul>
                    </div>
                </div>

                <section className="max-w-2xl mx-auto w-full text-left">
                    <h2 className="text-2xl font-bold text-sahayak-dark mb-6 text-center">Data Handling</h2>
                    <div className="space-y-4">
                        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                            <h4 className="font-bold text-sahayak-dark mb-1 flex items-center gap-2"><Mic size={18} className="text-sahayak-green" /> Voice Data</h4>
                            <p className="text-sm text-sahayak-muted">Voice input is processed in real-time. Audio recordings are <strong>never stored</strong> or uploaded.</p>
                        </div>
                        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                            <h4 className="font-bold text-sahayak-dark mb-1 flex items-center gap-2"><Wifi size={18} className="text-sahayak-green" /> Internet Usage</h4>
                            <p className="text-sm text-sahayak-muted">Sahayak works offline. Internet is used only for optional updates and anonymous analytics (if enabled).</p>
                        </div>
                        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                            <h4 className="font-bold text-sahayak-dark mb-1 flex items-center gap-2"><ShieldCheck size={18} className="text-sahayak-green" /> Third Parties</h4>
                            <p className="text-sm text-sahayak-muted">We do <strong>not</strong> sell or share data with advertisers or marketing agencies.</p>
                        </div>
                    </div>
                </section>

                <div className="bg-sahayak-dark text-white p-8 rounded-[32px] max-w-2xl mx-auto">
                    <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                    <p className="text-sahayak-cream/80 text-sm mb-6">
                        For questions regarding privacy or data safety, please contact the Sahayak project team.
                    </p>
                    <div className="inline-block border border-white/20 px-4 py-2 rounded-full text-sm">
                        Educational Use Only
                    </div>
                </div>
            </div>
        ),
        "data-safety": (
            <div className="space-y-12 max-w-3xl mx-auto text-center">
                <div className="border-b border-sahayak-green/10 pb-8">
                    <h1 className="text-4xl font-bold text-sahayak-dark mb-4 drop-shadow-sm">Data Safety</h1>
                    <p className="text-xl text-sahayak-muted max-w-2xl mx-auto">
                        Understanding how your data is protected and secured.
                    </p>
                </div>

                <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 max-w-2xl mx-auto">
                    <h3 className="font-bold text-blue-900 mb-3 text-lg flex items-center justify-center gap-2"><ShieldCheck size={20} /> Security First</h3>
                    <p className="text-blue-800 leading-relaxed">
                        Sahayak follows a <strong>privacy-by-design</strong> architecture. Data is isolated per device and secured using local database encryption standards where applicable.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-sahayak-dark mb-3 text-center">Storage & Retention</h3>
                        <p className="text-sm text-sahayak-muted mb-4">
                            Data is stored locally on the device.
                        </p>
                        <ul className="text-xs text-sahayak-muted text-left space-y-2 bg-gray-50 p-3 rounded-xl border border-gray-100">
                            <li className="flex gap-2">🔹 Cleared on uninstall</li>
                            <li className="flex gap-2">🔹 User can clear manually</li>
                            <li className="flex gap-2">🔹 No eternal cloud retention</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-sahayak-dark mb-3 text-center">Permissions</h3>
                        <p className="text-sm text-sahayak-muted mb-4">
                            We request strictly necessary permissions only.
                        </p>
                        <ul className="text-xs text-sahayak-muted text-left space-y-2 bg-gray-50 p-3 rounded-xl border border-gray-100">
                            <li className="flex gap-2">🔹 <strong className="text-sahayak-dark">Microphone:</strong> Voice input</li>
                            <li className="flex gap-2">🔹 <strong className="text-sahayak-dark">Storage:</strong> Offline content</li>
                            <li className="flex gap-2">🔹 <strong className="text-sahayak-dark">No</strong> Location/Contacts</li>
                        </ul>
                    </div>
                </div>

                <section className="max-w-2xl mx-auto w-full">
                    <h2 className="text-2xl font-bold text-sahayak-dark mb-6">Children's Safety</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-50 p-4 rounded-2xl border border-green-100 flex flex-col items-center gap-2">
                            <div className="bg-white p-2 rounded-full shadow-sm"><CheckCircle size={20} className="text-green-600" /></div>
                            <span className="font-bold text-green-800 text-sm">No Ads</span>
                        </div>
                        <div className="bg-green-50 p-4 rounded-2xl border border-green-100 flex flex-col items-center gap-2">
                            <div className="bg-white p-2 rounded-full shadow-sm"><CheckCircle size={20} className="text-green-600" /></div>
                            <span className="font-bold text-green-800 text-sm">No Tracking</span>
                        </div>
                        <div className="bg-green-50 p-4 rounded-2xl border border-green-100 flex flex-col items-center gap-2">
                            <div className="bg-white p-2 rounded-full shadow-sm"><CheckCircle size={20} className="text-green-600" /></div>
                            <span className="font-bold text-green-800 text-sm">No External Links</span>
                        </div>
                        <div className="bg-green-50 p-4 rounded-2xl border border-green-100 flex flex-col items-center gap-2">
                            <div className="bg-white p-2 rounded-full shadow-sm"><CheckCircle size={20} className="text-green-600" /></div>
                            <span className="font-bold text-green-800 text-sm">No In-App Purchases</span>
                        </div>
                    </div>
                </section>

                <div className="py-8 bg-gray-50 rounded-[32px] max-w-2xl mx-auto border border-gray-100">
                    <h2 className="text-lg font-bold text-sahayak-dark mb-2">User Control</h2>
                    <p className="text-sahayak-muted text-sm max-w-md mx-auto mb-4">You have full control over your data. You can clear app data or uninstall at any time to remove all stored information.</p>
                </div>
            </div>
        ),
    };

    const title = slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
    const content = contentMap[slug];

    return (
        <main className="min-h-screen bg-sahayak-cream pt-24 pb-24" >
            <Section container className="max-w-5xl mx-auto">
                <Link href="/docs" className="inline-flex items-center text-sahayak-muted hover:text-sahayak-green mb-8">
                    <ArrowLeft size={16} className="mr-2" /> Back to Docs
                </Link>

                {content ? (
                    <article className="bg-white p-8 md:p-12 rounded-[32px] shadow-sm border border-sahayak-green/10">
                        {content}
                    </article>
                ) : (
                    <article className="prose prose-lg prose-headings:text-sahayak-dark prose-p:text-sahayak-muted">
                        <h1>{title}</h1>
                        <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-xl text-yellow-800 not-prose mb-8">
                            <strong>Work in Progress:</strong> The content for "{title}" is being written by the content team.
                        </div>
                        <p>
                            This page ({slug}) will contain detailed documentation, steps, and guidelines.
                        </p>
                    </article>
                )}
            </Section>
        </main >
    );
}
