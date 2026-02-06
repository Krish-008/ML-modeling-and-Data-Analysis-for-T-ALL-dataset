import { pipelineSteps } from "@/lib/data";

export function PipelineTimeline() {
    return (
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-6 space-y-12 my-8">
            {pipelineSteps.map((step, index) => (
                <div key={index} className="relative pl-8 md:pl-12 group">
                    {/* Dot */}
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-emerald-500 group-hover:bg-emerald-500 transition-colors shadow-sm shadow-emerald-500/20"></div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                            {step.title}
                        </h3>
                        <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded">
                            {step.date}
                        </span>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
                        {step.description}
                    </p>
                </div>
            ))}
        </div>
    );
}
