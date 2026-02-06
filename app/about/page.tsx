import { PipelineTimeline } from "@/components/PipelineTimeline";

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="mb-16">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Research Methodology</h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    Our analysis integrates transcriptomic data from T-ALL patient samples and normal controls to uncover the
                    structural and immunological remodeling of the leukemia niche. Below is the step-by-step computational pipeline
                    used to discover the "Reciprocal Switch".
                </p>
            </div>

            <div className="bg-white dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4">
                    Analysis Pipeline
                </h2>
                <PipelineTimeline />
            </div>
        </div>
    );
}
