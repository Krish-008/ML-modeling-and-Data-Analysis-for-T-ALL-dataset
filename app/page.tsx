import { keyFindings } from "@/lib/data";
import { ArrowRight, Download, Shield, Lock, Zap, FileText, BookOpen } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const iconMap = {
  Shield: Shield,
  Lock: Lock,
  Zap: Zap,
};

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-tight">
          The Granule-ECM Axis in T-ALL: <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">
            MIR21-Mediated Niche
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          I recently completed a bioinformatics research project on T-cell acute lymphoblastic leukemia (T-ALL), using Python to analyze differential gene expression data.
          In this work, I identified significantly dysregulated genes and showed strong enrichment in collagen-containing extracellular matrix and granule-related pathways.
          I also derived ECM and granule gene signatures, computed hub genes, and visualized their patterns using clustered heatmaps and other EDA plots.
          This project strengthened my skills in statistical genomics, pathway enrichment, and building interpretable, biology-driven analytical pipelines.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-500/20"
          >
            Explore Data Dashboard
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>

          <a
            href="/handwritten_notes.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-slate-100 text-slate-900 border border-slate-200 font-medium hover:bg-slate-200 transition-colors shadow-sm dark:bg-slate-800 dark:text-white dark:border-slate-700 dark:hover:bg-slate-700"
          >
            <FileText className="mr-2 h-4 w-4" />
            Handwritten Notes
          </a>
          <a
            href="/report.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-slate-100 text-slate-900 border border-slate-200 font-medium hover:bg-slate-200 transition-colors shadow-sm dark:bg-slate-800 dark:text-white dark:border-slate-700 dark:hover:bg-slate-700"
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Final Report
          </a>
        </div>
      </section>

      {/* Key Findings Section */}
      <section className="grid md:grid-cols-3 gap-8 pt-8">
        {keyFindings.map((finding, index) => {
          const Icon = iconMap[finding.icon as keyof typeof iconMap];
          return (
            <div
              key={finding.title}
              className={cn(
                "p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group",
                "animate-in fade-in slide-in-from-bottom-4"
              )}
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: "both" }}
            >
              <div className={cn("inline-flex p-3 rounded-xl mb-6", finding.color)}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {finding.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {finding.description}
              </p>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-current opacity-[0.03] rounded-full scale-150 group-hover:scale-[2] transition-transform duration-500 ease-out" />
            </div>
          );
        })}
      </section>

      {/* Bottom CTA */}
      <section className="mt-16 text-center border-t border-slate-200 dark:border-slate-800 pt-16">
        <p className="text-slate-500">
          Project Lead: Krish_136
        </p>
      </section>
    </div>
  );
}
