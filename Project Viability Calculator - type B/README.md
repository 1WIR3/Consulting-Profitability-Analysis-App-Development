# Project Profitability Assessor

![Version](https://img.shields.io/badge/version-1.0-blue.svg)
![Framework](https://img.shields.io/badge/Framework-BPPAF%20v1.0-red.svg)
![React](https://img.shields.io/badge/React-19.1-blue.svg?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue.svg?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC.svg?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green.svg)

The Project Profitability Assessor is a comprehensive, single-page web application designed to guide users through a structured 7-phase methodology for evaluating the financial viability of consulting projects. Starting from a central dashboard where multiple projects can be created, loaded, and managed, the tool walks users through scoping, resource planning, automated cost analysis with data visualizations, pricing strategy, and risk assessment. By inputting project details and a target sales price, the application instantly calculates crucial metrics like total cost, profit, and margin, offering dynamic feedback, pricing recommendations, and a "margin health" analysis. The final phase facilitates a formal go/no-go decision and allows users to generate pre-filled documentation, ultimately empowering them to make informed, data-driven decisions to optimize project outcomes.

## Screenshots & Demo

A picture is worth a thousand words. Here's a look at the application in action.

**Dashboard View**

*(Your screenshot of the main dashboard with several projects listed would go here.)*
`[Screenshot of Dashboard.png]`

**Project Workspace View**

*(Your screenshot of the main 3-panel project view: Sidebar, Main Content, and Summary Panel would go here.)*
`[Screenshot of Project View.png]`

### Demo Video

Watch a walkthrough of the application's core features.

*(A link to a YouTube, Loom, or other video hosting service would go here.)*
`[Link to Demo Video]`

---

## Key Features

- **Centralized Dashboard:** Create, load, delete, import, and export projects from a single, intuitive interface.
- **Guided 7-Phase Workflow:** A structured and repeatable process ensures all critical aspects of project assessment are covered.
- **Real-time Financial Metrics:** Instantly see the impact of your decisions on Total Cost, Profit, and Margin, which are calculated and displayed in real-time.
- **Dynamic Resource Planning:** A flexible resource grid allows for easy allocation of different consultant types and calculation of total effort.
- **Data-Driven Cost Analysis:** Automated breakdown of Direct Labor Costs vs. Fixed Costs, visualized with an interactive bar chart for clarity.
- **Intelligent Pricing Strategy:** Enter a target sales price to see profitability metrics and receive system-generated recommendations for break-even, target, and optimal pricing.
- **Margin Health Assessment:** Get instant visual feedback on the health of your project's margin, categorized from "Critical" to "Excellent."
- **Automated Risk Assessment:** The system automatically identifies potential financial and resourcing risks (e.g., thin margins, unbalanced team seniority) based on your inputs.
- **Scenario Optimization Stubs:** A dedicated phase for exploring alternative project scenarios to optimize outcomes.
- **Decision & Documentation:** Formally capture go/no-go decisions and rationale, and generate pre-filled `.txt` document templates for project approval or rejection.
- **Data Persistence:** All project data is automatically saved to the browser's `localStorage`, so your work is never lost.
- **Import/Export:** Easily export project data to a `.json` file for backup or sharing, and import projects to continue your work.

---

## The BPPAF Framework

The application is built upon the **Btinkeeng Project Profitability Assessment Framework (BPPAF)**, a 7-phase methodology designed to bring structure and data-driven confidence to the complex process of quoting consulting work.

### Phase 1: Project Scoping
- **Objective:** Define project parameters clearly.
- **Activities:** Identify the project name, client, and type. Define the scope by estimating the total effort in days and listing key deliverables. This phase sets the foundation for all subsequent calculations.

### Phase 2: Resource Planning
- **Objective:** Determine the optimal team composition.
- **Activities:** Select the required consultant roles (e.g., Senior vs. Standard) and use the resource grid to allocate the number of consultants and the days required for each. The system provides guidance on maintaining a healthy seniority mix.

### Phase 3: Cost Analysis
- **Objective:** Calculate accurate project costs.
- **Activities:** This phase is fully automated. Based on the resource plan from Phase 2 and pre-defined consultant salary data, the system calculates Direct Labor Costs, Total Fixed Costs, and the resulting Total Project Cost. A bar chart visualizes the cost breakdown.

### Phase 4: Pricing Strategy
- **Objective:** Determine the optimal sales price.
- **Activities:** Input the proposed sales price for the project. The system instantly calculates the resulting Revenue, Profit, and Margin. It also provides a "Margin Health" analysis and recommends several pricing points (Break-Even, Target, Optimal, and Price Floor).

### Phase 5: Risk Assessment
- **Objective:** Identify financial and operational risks.
- **Activities:** The system automatically analyzes the project's metrics to flag potential risks, such as critically low profit margins or an imbalanced team structure. It also offers high-level mitigation suggestions.

### Phase 6: Scenario Optimization
- **Objective:** Test alternatives and find the optimal approach.
- **Activities:** This phase presents potential alternative scenarios—such as a cost-optimized vs. a quality-focused team mix—to encourage strategic thinking about project trade-offs.

### Phase 7: Decision & Documentation
- **Objective:** Make a go/no-go decision and document the rationale.
- **Activities:** Select the final decision (e.g., Approved, Rejected) and document the reasoning, key assumptions, and any special considerations. From this page, you can generate and download pre-filled text documents to formalize the decision.

---

## Build & Run Instructions

This project is a client-side single-page application built with React and TypeScript, requiring no complex build process to run.

### Prerequisites
You need a simple local web server to serve the files. If you have Node.js installed, you can use `serve`. If you have Python, you can use its built-in HTTP server.

### Running the Application
1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Serve the files:**
    Choose one of the following methods.

    *   **Using `serve` (Node.js):**
        ```bash
        # If you don't have serve installed globally:
        npm install -g serve

        # Run the server
        serve .
        ```

    *   **Using Python:**
        ```bash
        # For Python 3
        python -m http.server

        # For Python 2
        python -m SimpleHTTPServer
        ```

3.  **Open in browser:**
    Navigate to `http://localhost:3000` (for `serve`) or `http://localhost:8000` (for Python's server) in your web browser.

---

## Roadmap for Future Development

This application provides a robust foundation for project assessment. The future roadmap is focused on expanding its capabilities into a collaborative, enterprise-ready platform.

### Phase 1: Collaboration & Multi-User Workflows
- **[ ] Real-time Collaboration:** Implement multi-user editing on a single project assessment, allowing teams to work together simultaneously.
- **[ ] Commenting & Approvals:** Add a commenting system to each phase and a formal approval workflow for key decisions (e.g., pricing, final go/no-go).
- **[ ] Role-Based Access Control (RBAC):** Introduce user roles (e.g., Admin, Project Manager, Viewer) to manage permissions for creating, editing, and approving projects.
- **[ ] Backend & Database:** Replace `localStorage` with a proper backend service (e.g., Node.js/Express) and a database (e.g., PostgreSQL) to enable true multi-user support and data persistence.

### Phase 2: Advanced Resource & Schedule Management
- **[ ] Central Resource Pool:** Create a centralized repository of all available consultants, including their skills, cost rates, and current availability.
- **[ ] Resource Allocation Visualization:** Develop a dashboard to visualize resource allocation across all projects, helping to identify scheduling conflicts and bench time.
- **[ ] Project Timelines & Gantt Charts:** Integrate a scheduling component to create project timelines, define milestones, and visualize dependencies using Gantt charts.

### Phase 3: Enhanced Financials & Integrations
- **[ ] Actuals vs. Budget:** Add functionality to track actual project hours and costs against the initial budget, providing real-time variance analysis.
- **[ ] Multi-Currency Support:** Allow users to define project costs and revenue in different currencies with up-to-date exchange rates.
- **[ ] Integration with External Tools:** Develop APIs to integrate with accounting software (e.g., QuickBooks, Xero) and project management tools (e.g., Jira, Asana).

### Phase 4: Intelligence & Reporting
- **[ ] Customizable Dashboards:** Allow users to build custom reports and dashboards to track KPIs across a portfolio of projects.
- **[ ] Predictive Analytics:** Leverage historical project data to train a model that can predict the likely profitability and risks of new projects.
- **[ ] AI-Powered Recommendations:** Use AI to provide more sophisticated recommendations for team composition, pricing, and risk mitigation strategies.
