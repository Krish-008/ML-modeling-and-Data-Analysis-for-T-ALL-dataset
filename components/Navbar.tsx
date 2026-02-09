import Link from "next/link";
import { Dna, Github, Linkedin, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
    return (
        <nav className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="p-2 bg-emerald-600 rounded-lg group-hover:bg-emerald-500 transition-colors">
                                <Dna className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                                T-ALL Research
                            </span>
                        </Link>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className="hidden md:flex space-x-8">
                            <NavLink href="/">Abstract</NavLink>
                            <NavLink href="/dashboard">Data Dashboard</NavLink>
                            <NavLink href="/about">Methodology</NavLink>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link
                                href="https://balakrishnan.vercel.app/"
                                target="_blank"
                                className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                                aria-label="View Portfolio"
                            >
                                <Globe className="h-5 w-5" />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/barumugam08/"
                                target="_blank"
                                className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                                aria-label="View on LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link
                                href="https://github.com/Krish-008/ML-modeling-and-Data-Analysis-for-T-ALL-dataset"
                                target="_blank"
                                className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                                aria-label="View on GitHub"
                            >
                                <Github className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="text-sm font-medium text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors relative group"
        >
            {children}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full" />
        </Link>
    );
}
