# T-ALL Research Dashboard: The Granule-ECM Axis

This is a Next.js web application designed to showcase the research project: **"The Granule-ECM Axis in T-ALL: MIR21-Mediated Niche Remodeling."**

## Core Features

- **Scientific Storytelling**: Hero section and key findings cards summarizing the "Reciprocal Switch".
- **Interactive Dashboard**:
    - **Biomarker Panel**: Divergent bar chart showing TNC/COL4A1 upregulation and MMP8/ELANE silencing.
    - **Heatmap**: Simulated matrix visualizing the collagen-enzyme switch.
    - **miRNA Network**: Visualization of MIR21 targeting immune-guard enzymes.
- **Diagnostic Tool**: Interactive form to calculate risk based on gene expression inputs.
- **Methodology**: Timeline of the research pipeline.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS (Scientific Palette: Slate, Emerald, Rose)
- **Visualization**: Recharts, Custom SVGs
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000).

3.  **Build for Production**:
    ```bash
    npm run build
    npm start
    ```

## Deployment on Vercel

1.  Push this repository to GitHub/GitLab.
2.  Import the project into Vercel.
3.  Vercel will automatically detect Next.js.
4.  Click **Deploy**.

## Data Assets

- The application uses hardcoded JSON data in `lib/data.ts`.
- A placeholder file `public/TALL_Project_Results.zip` is included for the download button. Replace this with the actual research data archive before deployment.
