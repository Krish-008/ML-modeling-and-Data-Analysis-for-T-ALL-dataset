export function ReciprocalHeatmap() {
    const groups = ["Normal", "T-ALL"];
    const blocks = [
        { name: "Collagen Fortress", genes: ["TNC", "COL4A1", "COL1A1"], type: "ECM" },
        { name: "Immune Enzymes", genes: ["MMP8", "ELANE", "ITGAM"], type: "Granule" },
    ];

    return (
        <div className="w-full h-full bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
            <h3 className="text-lg font-bold mb-6 text-slate-900 dark:text-white pb-2 border-b border-slate-100 dark:border-slate-800">
                Reciprocal Switch Heatmap
            </h3>

            <div className="flex-1 flex justify-center items-center">
                <div className="grid grid-cols-[auto_1fr_1fr] gap-1">
                    {/* Header Row */}
                    <div className="p-2"></div>
                    {groups.map((group) => (
                        <div key={group} className="text-center font-bold text-slate-700 dark:text-slate-300 pb-2 border-b border-slate-100 dark:border-slate-800 tracking-wider text-sm mx-1">
                            {group}
                        </div>
                    ))}

                    {/* Data Rows */}
                    {blocks.map((block) => (
                        block.genes.map((gene, geneIndex) => {
                            // Determine color based on logic
                            // ECM: Normal=Blue(Low), T-ALL=Red(High)
                            // Granule: Normal=Red(High), T-ALL=Blue(Low)

                            const isECM = block.type === "ECM";
                            const normalColor = isECM ? "bg-blue-500/80" : "bg-red-500/80";
                            const tallColor = isECM ? "bg-red-500/90" : "bg-blue-500/90";
                            const normalIntensity = isECM ? "opacity-30" : "opacity-80";
                            const tallIntensity = isECM ? "opacity-90" : "opacity-30";

                            return (
                                <div key={gene} className="contents group">
                                    {/* Gene Label */}
                                    <div className="py-2 px-4 text-xs font-semibold text-slate-500 dark:text-slate-400 border-r border-slate-100 dark:border-slate-800 flex items-center justify-end gap-2">
                                        {geneIndex === 0 && (
                                            <span className={`w-1.5 h-1.5 rounded-full ${isECM ? "bg-emerald-500" : "bg-rose-500"}`}></span>
                                        )}
                                        {gene}
                                    </div>

                                    {/* Normal Cell */}
                                    <div className="relative h-10 w-24 m-[1px] rounded-sm bg-slate-100 dark:bg-slate-800 group-hover:scale-105 transition-transform duration-200 z-10">
                                        <div className={`absolute inset-0 ${isECM ? "bg-blue-500" : "bg-rose-500"} ${isECM ? "opacity-20" : "opacity-80"} rounded-sm`}></div>
                                        <div className="absolute inset-0 flex items-center justify-center text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity font-bold text-white drop-shadow-md">
                                            {isECM ? "Low" : "High"}
                                        </div>
                                    </div>

                                    {/* T-ALL Cell */}
                                    <div className="relative h-10 w-24 m-[1px] rounded-sm bg-slate-100 dark:bg-slate-800 group-hover:scale-105 transition-transform duration-200 z-10 transition-delay-[50ms]">
                                        <div className={`absolute inset-0 ${isECM ? "bg-red-500" : "bg-blue-500"} ${isECM ? "opacity-90" : "opacity-20"} rounded-sm`}></div>
                                        <div className="absolute inset-0 flex items-center justify-center text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity font-bold text-white drop-shadow-md">
                                            {isECM ? "High" : "Low"}
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ))}
                </div>
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-6 mt-6 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500/90 rounded-sm"></div>
                    <span>Upregulated</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500/20 rounded-sm"></div>
                    <span>Downregulated</span>
                </div>
            </div>
        </div>
    );
}
