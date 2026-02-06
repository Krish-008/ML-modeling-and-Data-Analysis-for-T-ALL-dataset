export function NetworkDiagram() {
    return (
        <div className="w-full h-full min-h-[400px] bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
            <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white pb-2 border-b border-slate-100 dark:border-slate-800 z-10 relative">
                miRNA Regulator Network
            </h3>

            <div className="absolute inset-0 flex items-center justify-center">
                {/* Connection Lines (SVG) */}
                <svg className="absolute w-full h-full pointer-events-none" viewBox="0 0 400 300">
                    {/* Lines from Center Top to Bottom nodes */}
                    {/* Center (200, 80) to Left (100, 220) */}
                    <path d="M200 100 C 200 150, 100 150, 100 220" stroke="#cbd5e1" strokeWidth="2" fill="none" className="dark:stroke-slate-700 animate-pulse" style={{ animationDuration: '3s' }} />
                    {/* Center (200, 80) to Middle (200, 220) */}
                    <path d="M200 100 C 200 150, 200 150, 200 220" stroke="#cbd5e1" strokeWidth="2" fill="none" className="dark:stroke-slate-700 animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
                    {/* Center (200, 80) to Right (300, 220) */}
                    <path d="M200 100 C 200 150, 300 150, 300 220" stroke="#cbd5e1" strokeWidth="2" fill="none" className="dark:stroke-slate-700 animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }} />

                    {/* Inhibition Markers (T-bars) */}
                    <line x1="90" y1="220" x2="110" y2="220" stroke="#f43f5e" strokeWidth="3" />
                    <line x1="190" y1="220" x2="210" y2="220" stroke="#f43f5e" strokeWidth="3" />
                    <line x1="290" y1="220" x2="310" y2="220" stroke="#f43f5e" strokeWidth="3" />
                </svg>

                {/* Nodes */}
                <div className="absolute top-16 left-1/2 -translate-x-1/2 z-20">
                    <div className="w-24 h-24 rounded-full bg-amber-100 border-4 border-amber-400 flex items-center justify-center shadow-lg shadow-amber-500/20 hover:scale-110 transition-transform cursor-pointer group">
                        <div className="text-center">
                            <div className="text-amber-900 font-bold text-lg">MIR21</div>
                            <div className="text-amber-700 text-xs text-[10px] mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Master Switch</div>
                        </div>
                    </div>
                </div>

                {/* Target Nodes */}
                <div className="absolute bottom-16 w-full flex justify-center gap-16 z-20">
                    {["MMP8", "ELANE", "ITGAM"].map((gene, i) => (
                        <div key={gene} className="w-20 h-20 rounded-full bg-rose-100 border-4 border-rose-400 flex items-center justify-center shadow-lg shadow-rose-500/20 hover:scale-110 transition-transform cursor-pointer">
                            <span className="text-rose-900 font-bold">{gene}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-4 right-4 text-xs text-slate-400 dark:text-slate-600">
                Solid lines indicate direct inhibition
            </div>
        </div>
    );
}
