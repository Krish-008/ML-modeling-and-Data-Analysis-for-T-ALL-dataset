export const biomarkerData = [
    { gene: "TNC", fold: 138, type: "ECM" },
    { gene: "COL4A1", fold: 78, type: "ECM" },
    { gene: "COL1A1", fold: 45, type: "ECM" },
    { gene: "MMP8", fold: -50, type: "Granule" },
    { gene: "ELANE", fold: -45, type: "Granule" },
];

export const mirnaData = [
    {
        name: "MIR21",
        fold: 29.2,
        targets: ["MMP8", "ELANE", "ITGAM"]
    }
];

export const keyFindings = [
    {
        title: "The Collagen Fortress",
        description: "T-ALL cells massively upregulate structural proteins like TNC (138x) and COL4A1 (78x) to build a protective niche.",
        icon: "Shield",
        color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
    },
    {
        title: "The Immune Shutdown",
        description: "Simultaneously, they silence immune-guard enzymes like MMP8 and ELANE (near zero expression).",
        icon: "Lock",
        color: "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300",
    },
    {
        title: "The Master Switch",
        description: "This process is likely driven by the oncomiR MIR21 (29x upregulation), coordinating the niche remodeling.",
        icon: "Zap",
        color: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
    },
];

export const pipelineSteps = [
    {
        title: "Raw Data Acquisition",
        description: "RNA-Seq data from T-ALL and Normal samples.",
        date: "Step 1",
    },
    {
        title: "DESeq2 Analysis",
        description: "Differential expression analysis to identify DEGs.",
        date: "Step 2",
    },
    {
        title: "GO Enrichment",
        description: "Gene Ontology analysis revealing ECM and Granule pathways.",
        date: "Step 3",
    },
    {
        title: "Hub Gene ID",
        description: "Identification of TNC, COL4A1, MMP8 as key drivers.",
        date: "Step 4",
    },
    {
        title: "Final Workflow",
        description: "Reciprocal Switch mechanism proposal.",
        date: "Step 5",
    },
];
