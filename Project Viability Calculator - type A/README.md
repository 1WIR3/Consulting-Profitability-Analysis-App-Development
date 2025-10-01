# Btinkeeng Project Viability Calculator

![Framework: React](https://img.shields.io/badge/Framework-React-blue.svg)
![Language: TypeScript](https://img.shields.io/badge/Language-TypeScript-blue.svg)
![Styling: TailwindCSS](https://img.shields.io/badge/Styling-TailwindCSS-cyan.svg)
![Status: Active Development](https://img.shields.io/badge/Status-Active%20Development-green.svg)
![License: Proprietary](https://img.shields.io/badge/License-Proprietary-red.svg)

An internal tool for Btinkeeng to quickly evaluate the financial viability of consulting and IT projects through simple scenario testing. Users can define project parameters, select consultant roles, and simulate sales prices to analyze profitability. Scenarios can be saved, viewed, compared, and managed within the browser.

---

## Features

The Project Viability Calculator is designed for rapid, data-driven decision-making.

### Scenario Management
- **Multi-Step Scenario Creation**: A guided, three-step process to define project details, team composition, and revenue.
- **Edit & Update**: Modify any existing scenario to explore variations.
- **Local Persistence**: All scenarios are automatically saved to the browser's Local Storage, ensuring your work is preserved between sessions.
- **CRUD Operations**: Full Create, Read, Update, and Delete functionality for all scenarios.

### Financial Analysis & Strategic Insights
- **Real-time Calculations**: Instantly see the financial impact of any change to the project scope, team, or price.
- **Core Financials**: Automatic calculation of Total Cost, Projected Profit, and Profitability Margin.
- **Margin Health Indicator**: Color-coded feedback (Critical, Caution, Healthy, Excellent) to quickly assess the viability of the margin, with actionable guidance to reach target profitability.
- **Risk Assessment**: Automated identification of Financial, Resource, and Scope risks (e.g., thin margins, single points of failure, team composition imbalance).
- **Key Performance Metrics**: Crucial project metrics at a glance, including Team Size, Total Project Days, Cost Per Day, and Seniority Mix.
- **Revenue Assistant**: Intelligent pricing recommendations for break-even, 20% (Target), and 30% (Optimal) profit margins.

### Data Visualization & Comparison
- **Revenue vs. Cost Chart**: A simple bar chart to visually communicate the relationship between projected revenue and estimated costs.
- **Side-by-Side Comparison**: Select two or more scenarios to compare them feature-by-feature in a detailed, responsive table view.

### Data Portability & Reporting
- **Import/Export All Scenarios**: Backup or share all your scenarios via a single JSON file.
- **Individual Scenario Export (JSON)**: Export a single scenario into a detailed, structured JSON format suitable for machine reading or integration with other systems.
- **Individual Scenario Export (CSV)**: Export a single scenario into a clean, human-readable CSV format, perfect for spreadsheets or simple reports.
- **Mobile-First Responsive UI**: A clean, modern interface that works seamlessly on desktop and mobile devices, featuring a slide-in navigation menu for key actions.

---

## The BPPAF Framework

This tool is the cornerstone of the **Btinkeeng Project Profitability & Approval Framework (BPPAF)**, a structured methodology for ensuring that all engaged projects are financially sound, strategically aligned, and properly resourced.

The framework consists of four key phases:

**Phase 1: Scenario Definition & Modeling**
- **Objective**: To capture all critical inputs for a potential project.
- **In-App Process**: The user follows the multi-step form to define the client, project scope, complexity, and team composition. This phase is about building a comprehensive model of the project's cost structure.

**Phase 2: Viability Analysis & Optimization**
- **Objective**: To analyze the financial and strategic health of the modeled scenario.
- **In-App Process**: The application's calculation engine automatically generates all financial metrics, risk assessments, and margin health indicators. The user can then use the Revenue Assistant to adjust the proposed price to meet profitability targets, effectively optimizing the scenario in real-time.

**Phase 3: Proposal Generation & Review**
- **Objective**: To formalize the scenario into a standardized document for internal review.
- **In-App Process**: The user exports the finalized scenario as a detailed JSON or a summary CSV. This structured data serves as the single source of truth for creating formal client proposals or internal approval requests, ensuring consistency and accuracy.

**Phase 4: Collaborative Review & Approval**
- **Objective**: To facilitate a streamlined, multi-stakeholder approval process.
- **In-App Process**: *(Roadmap Feature)* This phase will involve moving beyond a local tool to a collaborative platform where scenarios can be shared, commented on, and formally approved or rejected by management within the application itself.

---

## Screenshots & Demos

*(Placeholder sections for visual documentation)*

### Main Interface & Scenario Creation
*A screenshot showing the main application layout with the scenario creation form and the list of saved scenarios.*
`![Main Interface](placeholder-main-interface.png)`

### Scenario Comparison View
*A screenshot of the modal window showing a side-by-side comparison of multiple scenarios.*
`![Scenario Comparison](placeholder-comparison-view.png)`

### Mobile & Responsive View
*A short video or GIF demonstrating the application's responsive design and mobile menu functionality.*
`![Mobile Demo](placeholder-mobile-demo.gif)`

---

## Build & Run Instructions

This project is a client-side application built with React and TypeScript, requiring no complex build process to run locally.

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Safari, Edge).
- A local web server.

### Running the Application
Because the application uses ES modules, it must be served from a web server to function correctly. Simply opening the `index.html` file from the local filesystem will result in errors.

1.  **Clone the repository:**
    ```bash
    git clone [repository-url]
    cd [repository-folder]
    ```

2.  **Start a local web server:**
    You can use any simple web server. Here are two common examples:

    - **Using Python (if installed):**
      ```bash
      # For Python 3
      python3 -m http.server
      ```

    - **Using Node.js and `serve`:**
      If you have Node.js, you can install and use the `serve` package.
      ```bash
      npm install -g serve
      serve .
      ```

3.  **Open the application:**
    Once the server is running, open your web browser and navigate to the provided URL (e.g., `http://localhost:8000` or `http://localhost:3000`).

---

## Technology Stack

- **Frontend Framework**: [React](https://reactjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (via CDN)
- **Unique ID Generation**: [uuid](https://github.com/uuidjs/uuid)

---

## Roadmap

The following is a high-level roadmap for the evolution of the Project Viability Calculator from a standalone tool into an integrated, collaborative platform.

### Q3 202X: Enhanced Reporting & Visualization
- **[ ] PDF Exports**: Generate professional, client-ready PDF summaries of any scenario.
- **[ ] Scenario Dashboard**: Introduce a dashboard view with aggregate metrics (e.g., total potential revenue, average margin across all pending scenarios).
- **[ ] Advanced Charting**: Add more detailed charts for cost breakdown and resource allocation.

### Q4 202X: Collaboration & Workflow Foundation
- **[ ] User Authentication**: Implement user accounts to secure and personalize the experience.
- **[ ] Backend Integration**: Transition from Local Storage to a cloud-based database (e.g., Firebase, Supabase) to enable data sharing and persistence.
- **[ ] Shared Workspaces**: Allow users to be grouped into teams with a common pool of project scenarios.
- **[ ] Commenting & Notifications**: Add the ability for team members to leave comments on scenarios and notify stakeholders of changes.

### Q1 202X: Resource Management & Scheduling
- **[ ] Centralized Resource Pool**: Create a module to define and manage the pool of available consultants, including their roles, costs, and availability.
- **[ ] Project Scheduling View**: Implement a basic timeline or Gantt chart to visualize resource allocation over time and identify potential scheduling conflicts.
- **[ ] Utilization Tracking**: Develop reports to monitor consultant utilization rates based on their assignment to proposed and active projects.

### Q2 202X: Integration & Automation
- **[ ] API Endpoints**: Expose secure API endpoints to allow other internal systems (e.g., CRM, HRIS) to create or retrieve scenario data programmatically.
- **[ ] System Integration**: Connect to the company's HR system to automatically pull the latest consultant salary information, ensuring cost models are always up-to-date.
- **[ ] Automated Proposal Generation**: Integrate with a document templating service (e.g., DocuGen, PandaDoc) to automatically generate full proposal documents from an approved scenario, completing the BPPAF workflow.
