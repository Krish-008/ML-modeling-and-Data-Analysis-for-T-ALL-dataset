# ML-modeling-and-Data-Analysis-for-T-ALL-dataset
I am currently working on building a model which predicts the most genes which are responsible for T-ALL cancer.
Dataset Feature Description Categorical Features id

Type: categorical (string) Role: Unique identifier for each gene. Significance

Type: categorical (string) Values: "Significant", "Not Significant" Role: Marks whether a gene is statistically significant (padj < 0.05). ExpressionChange

Type: categorical (string) Values: "Upregulated", "Downregulated", "No Change" Role: Captures the direction of gene expression change based on log2FoldChange. Target

Type: categorical (string) Values: same as Significance Role: Prediction label for classification tasks. Numerical Features baseMean

Type: numeric (float) Role: Average expression of the gene across all samples. Reflects overall abundance. baseMeanA

Type: numeric (float) Role: Average expression of the gene in Condition A (e.g., control group). baseMeanB

Type: numeric (float) Role: Average expression of the gene in Condition B (e.g., treatment group). foldChange

Type: numeric (float, positive values) Role: Ratio of expression between B and A. 1 → higher expression in B < 1 → lower expression in B log2FoldChange

Type: numeric (float, can be positive or negative) Role: Log2-transformed fold change. Positive → upregulated in B Negative → downregulated in B pval

Type: numeric (float, 0–1) Role: Raw p-value from the test. Indicates the probability the observed difference is random. padj

Type: numeric (float, 0–1) Role: Adjusted p-value after multiple testing correction. Controls false discovery rate.

Overview of the Dataset: This project explores the GSE63602 dataset from the National Center for Biotechnology Information (NCBI), which focuses on T-cell acute lymphoblastic leukemia (T-ALL). T-ALL is a cancer of the blood and bone marrow that develops from white blood cells known as lymphoblasts; its primary cause is often linked to genetic mutations.

To create this dataset: Scientists collected blood and bone marrow samples from a total of 9 T-ALL patients and 4 normal individuals. From these samples, they extracted total RNA (including mRNA and miRNA) and performed high-throughput sequencing. miRNA - microRNA.The reason to choose the RNA is because in biological terms the RNA involves in the process of Protein synthesis. And when the bad RNA is found then we can stop the cancer from spreading.

Prediction task for the Dataset: The identification of the bad RNA's in the patient can help in controlling the cancer from spreading. This dataset is crucial for every cancer researches who is trying to identify the drugs for the cancer. The third partie are intrested in learning what kind of genes impact more on the genes(ex. Genes which are responsible for mulitplication is having more negative impact on the cancer)

The resulting dataset contains several key metrics for analysis. Each miRNA is identified by an ID. The baseMean represents the average normalized expression of a miRNA across all samples. This is further broken down by group: baseMeanA for the T-ALL group and baseMeanB for the normal group. The foldChange, calculated as the ratio of baseMeanA to baseMeanB, quantifies the change in expression between the two groups, with the log2FoldChange providing a logarithmic transformation of this value. To determine statistical significance, a p-value is calculated to assess the probability that the observed difference occurred by chance(is it caused by random noise). Finally, because many miRNAs are tested simultaneously, an adjusted p-value, or padj, is provided, which is corrected for multiple testing using the False Discovery Rate (FDR) method.



