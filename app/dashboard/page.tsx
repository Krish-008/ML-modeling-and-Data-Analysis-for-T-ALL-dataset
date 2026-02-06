"use client";

import { BiomarkerChart } from "@/components/BiomarkerChart";
import { ReciprocalHeatmap } from "@/components/ReciprocalHeatmap";
import { NetworkDiagram } from "@/components/NetworkDiagram";

export default function DashboardPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Analysis Results</h1>
                <p className="text-slate-500 dark:text-slate-400">Interactive visualization of T-ALL gene expression and regulation.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                {/* Row 1: Charts taking full width or half */}
                <div className="lg:col-span-1 h-[450px]">
                    <BiomarkerChart />
                </div>
                <div className="lg:col-span-1 h-[450px]">
                    <ReciprocalHeatmap />
                </div>

                {/* Row 2: Network Visual taking full width if complex, or half. Let's make it full width for impact. */}
                <div className="lg:col-span-2 h-[500px]">
                    <NetworkDiagram />
                </div>
            </div>
        </div>
    );
}
