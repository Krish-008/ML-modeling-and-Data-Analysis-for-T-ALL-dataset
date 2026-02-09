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

            <div className="space-y-12">
                {/* Exploratory Data Analysis Section */}
                <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-l-4 border-emerald-500 pl-4">Exploratory Data Analysis</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* 1. Distribution of log2foldchange */}
                        <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm">
                            <h3 className="font-semibold mb-4 text-slate-700 dark:text-slate-300 text-sm">Distribution of Log2 Fold Change</h3>
                            <div className="aspect-square relative rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800">
                                <img
                                    src="/Distribution_of_log2foldchange.png"
                                    alt="Distribution of log2foldchange"
                                    className="object-contain w-full h-full hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* 2. Volcano Plot */}
                        <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm">
                            <h3 className="font-semibold mb-4 text-slate-700 dark:text-slate-300 text-sm">Volcano Plot of Genes</h3>
                            <div className="aspect-square relative rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800">
                                <img
                                    src="/Volcano_plot_of_genes.png"
                                    alt="Volcano Plot"
                                    className="object-contain w-full h-full hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* 3. MA Plot */}
                        <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm">
                            <h3 className="font-semibold mb-4 text-slate-700 dark:text-slate-300 text-sm">MA Plot</h3>
                            <div className="aspect-square relative rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800">
                                <img
                                    src="/MA_plot.png"
                                    alt="MA Plot"
                                    className="object-contain w-full h-full hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* 4. Differentially Expressed Genes */}
                        <div className="md:col-span-2 lg:col-span-1 bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm">
                            <h3 className="font-semibold mb-4 text-slate-700 dark:text-slate-300 text-sm">Differentially Expressed Genes</h3>
                            <div className="aspect-square relative rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800">
                                <img
                                    src="/Differentially_expressed_genes.png"
                                    alt="Differentially Expressed Genes"
                                    className="object-contain w-full h-full hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* 5. Clustered Heatmap */}
                        <div className="md:col-span-2 bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm">
                            <h3 className="font-semibold mb-4 text-slate-700 dark:text-slate-300 text-sm">Clustered Heatmap (Top 20 Genes)</h3>
                            <div className="aspect-[2/1] relative rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800">
                                <img
                                    src="/Clustered_heatmap_of_top_20_genes.png"
                                    alt="Clustered Heatmap"
                                    className="object-contain w-full h-full hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Interactive Section */}
                <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-l-4 border-emerald-500 pl-4">Interactive Simulation</h2>
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="lg:col-span-1 h-[450px]">
                            <BiomarkerChart />
                        </div>
                        <div className="lg:col-span-1 h-[450px]">
                            <ReciprocalHeatmap />
                        </div>
                        <div className="lg:col-span-2 h-[500px]">
                            <NetworkDiagram />
                        </div>
                    </div>
                </div>

                {/* Static Results Section */}
                <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-l-4 border-emerald-500 pl-4">Study Data Visualizations</h2>
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Heatmap Image */}
                        <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm">
                            <h3 className="font-semibold mb-4 text-slate-700 dark:text-slate-300">Expression Heatmap</h3>
                            <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800">
                                <img
                                    src="/Expression_using_heatmap.png"
                                    alt="Expression Heatmap"
                                    className="object-contain w-full h-full hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* Granule Hubs Image */}
                        <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm">
                            <h3 className="font-semibold mb-4 text-slate-700 dark:text-slate-300">Granule Hubs & ECM Genes</h3>
                            <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800">
                                <img
                                    src="/Granule_hubs_and_ECM_genes.png"
                                    alt="Granule Hubs and ECM Genes"
                                    className="object-contain w-full h-full hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* Diagnostic Power Image */}
                        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm">
                            <h3 className="font-semibold mb-4 text-slate-700 dark:text-slate-300">Diagnostic Power Analysis</h3>
                            <div className="aspect-[16/9] relative rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800">
                                <img
                                    src="/Diagnostic_Power.png"
                                    alt="Diagnostic Power"
                                    className="object-contain w-full h-full hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
