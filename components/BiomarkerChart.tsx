"use client";

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, Cell } from "recharts";
import { biomarkerData } from "@/lib/data";

export function BiomarkerChart() {
    return (
        <div className="w-full h-[400px] bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white pb-2 border-b border-slate-100 dark:border-slate-800">
                Differential Gene Expression (Fold Change)
            </h3>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    layout="vertical"
                    data={biomarkerData}
                    margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#94a3b8" opacity={0.2} />
                    <XAxis type="number" stroke="#64748b" fontSize={12} tickFormatter={(value) => `${value}x`} />
                    <YAxis dataKey="gene" type="category" stroke="#64748b" fontSize={14} width={60} fontWeight={600} />
                    <Tooltip
                        cursor={{ fill: 'transparent' }}
                        content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                                const data = payload[0].payload;
                                return (
                                    <div className="bg-slate-800 text-white p-3 rounded-lg shadow-xl border border-slate-700 text-sm">
                                        <p className="font-bold mb-1">{data.gene}</p>
                                        <p className="text-slate-300">Fold Change: <span className={data.fold > 0 ? "text-emerald-400" : "text-rose-400"}>{data.fold}x</span></p>
                                        <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">{data.type}</p>
                                    </div>
                                );
                            }
                            return null;
                        }}
                    />
                    <ReferenceLine x={0} stroke="#94a3b8" />
                    <Bar dataKey="fold" radius={[0, 4, 4, 0]}>
                        {biomarkerData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fold > 0 ? "#10b981" : "#f43f5e"} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
