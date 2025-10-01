import { Framework } from '../types';

const frameworkData: Framework = {
  "framework": {
    "name": "Btinkeeng Project Profitability Assessment Framework",
    "acronym": "BPPAF",
    "version": "1.0",
    "description": "A structured 7-phase methodology for assessing consulting project profitability"
  },
  "phases": [
    {
      "id": "phase1",
      "number": 1,
      "title": "Project Scoping",
      "objective": "Define project parameters clearly",
      "icon": "target",
      "guidance": [
        "Clearly define the project scope and deliverables to avoid scope creep.",
        "Engage stakeholders early to align on objectives and success criteria.",
        "Underestimate complexity at your own peril. Be realistic."
      ],
      "steps": [
        {
          "id": "step1_1",
          "title": "Project Identification",
          "fields": [
            {
              "id": "projectName",
              "label": "Project Name/ID",
              "type": "text",
              "required": true,
              "maxLength": 100,
              "placeholder": "Enter project name or identifier"
            },
            {
              "id": "clientName",
              "label": "Client Name",
              "type": "text",
              "required": true,
              "placeholder": "Enter client name"
            },
            {
              "id": "projectType",
              "label": "Project Type",
              "type": "select",
              "required": true,
              "options": ["Strategy", "IT", "Mixed"]
            },
            {
              "id": "duration",
              "label": "Expected Duration",
              "type": "number",
              "required": true,
              "unit": "weeks/months",
              "placeholder": "Enter expected duration"
            }
          ]
        },
        {
          "id": "step1_2",
          "title": "Scope Definition",
          "fields": [
            {
              "id": "totalProjectDays",
              "label": "Total Project Days Estimate",
              "type": "number",
              "required": true,
              "min": 1,
              "max": 500,
              "helpText": "Estimate total effort in consultant working days. A typical strategy project is 30-60 days. IT implementations range from 40-150 days."
            },
            {
              "id": "keyDeliverables",
              "label": "Key Deliverables",
              "type": "textarea",
              "required": true,
              "placeholder": "List main project deliverables"
            },
            {
              "id": "complexity",
              "label": "Complexity Level",
              "type": "select",
              "required": true,
              "options": ["Low", "Medium", "High"]
            }
          ]
        }
      ],
      "qualityGates": []
    },
    {
      "id": "phase2",
      "number": 2,
      "title": "Resource Planning",
      "objective": "Determine optimal team composition",
      "icon": "users",
      "guidance": [
        "Balance seniority for cost-effectiveness and quality. A 40-60% senior mix is a good starting point.",
        "Ensure the allocated days are realistic. Over-optimism leads to budget overruns.",
        "Factor in non-billable time for project management and internal meetings."
      ],
      "steps": [
        {
          "id": "step2_1",
          "title": "Role Identification",
          "fields": [
            {
              "id": "consultantRoles",
              "label": "Select Consultant Types Needed",
              "type": "multiselect",
              "required": true,
              "options": [
                "Senior Strategy Consultant",
                "Standard Strategy Consultant",
                "Senior IT Consultant",
                "Standard IT Consultant"
              ]
            },
            {
              "id": "roleJustification",
              "label": "Role Selection Justification",
              "type": "textarea",
              "placeholder": "Explain why these roles are needed (experience required, client expectations)"
            }
          ]
        },
        {
          "id": "step2_2",
          "title": "Capacity Allocation",
          "fields": [
            {
              "id": "resourceAllocation",
              "label": "Resource Allocation",
              "type": "resourceGrid",
              "columns": ["Role", "Number of Consultants", "Days per Consultant", "Total Days"],
              "helpText": "💡 Best Practice: Aim for 40-60% senior consultants. Too many seniors increases costs unnecessarily. Too few risks quality issues."
            }
          ]
        }
      ],
      "qualityGates": []
    },
    {
      "id": "phase3",
      "number": 3,
      "title": "Cost Analysis",
      "objective": "Calculate accurate project costs",
      "icon": "calculator",
      "guidance": [
        "This phase is automated based on your resource plan. Review the cost per day to ensure it aligns with market rates.",
        "Double-check that all consultant rates and fixed costs are up-to-date."
      ],
      "steps": [],
      "qualityGates": []
    },
    {
      "id": "phase4",
      "number": 4,
      "title": "Pricing Strategy",
      "objective": "Determine optimal sales price",
      "icon": "dollar-sign",
      "guidance": [
        "Use the recommended price points as a guide, not a rule. Factor in client value and strategic importance.",
        "A healthy margin (20-30%) provides a buffer for unforeseen challenges.",
        "Never bid below the price floor unless there is a compelling strategic reason approved by leadership."
      ],
      "steps": [
        {
          "id": "step4_1",
          "title": "Market Price Input",
          "fields": [
            {
              "id": "salesPrice",
              "label": "Proposed/Target Sales Price",
              "type": "currency",
              "required": true
            },
            {
              "id": "marketReference",
              "label": "Market/Competitor Pricing (Optional)",
              "type": "textarea",
              "placeholder": "Note any relevant market or competitor pricing information"
            }
          ]
        }
      ],
      "marginHealthAssessment": [
        {
          "level": "critical",
          "range": { "max": 10 },
          "color": "red",
          "icon": "alert-circle",
          "message": "High risk - reject or renegotiate"
        },
        {
          "level": "caution",
          "range": { "min": 10, "max": 20 },
          "color": "yellow",
          "icon": "alert-triangle",
          "message": "Acceptable for strategic reasons only"
        },
        {
          "level": "healthy",
          "range": { "min": 20, "max": 30 },
          "color": "green",
          "icon": "check-circle",
          "message": "Target range for standard projects"
        },
        {
          "level": "excellent",
          "range": { "min": 30 },
          "color": "green",
          "icon": "trending-up",
          "message": "Strong profitability - ideal"
        }
      ],
      "qualityGates": []
    },
    {
      "id": "phase5",
      "number": 5,
      "title": "Risk Assessment",
      "objective": "Identify financial and operational risks",
      "icon": "alert-triangle",
      "guidance": [
        "Be proactive. Identifying risks early is cheaper than solving problems later.",
        "Think beyond financial risks. Consider operational, reputational, and resource availability risks.",
        "Develop a clear mitigation plan for each high-impact risk."
      ],
      "steps": [],
      "qualityGates": []
    },
    {
      "id": "phase6",
      "number": 6,
      "title": "Scenario Optimization",
      "objective": "Test alternatives and find optimal approach",
      "icon": "git-branch",
      "guidance": [
        "Use this phase to explore trade-offs. What happens if you swap a senior for a standard consultant?",
        "Model best-case, worst-case, and most-likely scenarios to understand the range of potential outcomes.",
        "Presenting scenarios to the client can help manage expectations and justify pricing."
      ],
      "steps": [],
      "qualityGates": [],
      "comparisonDimensions": [
        {
          "dimension": "Team Composition",
          "scenarios": [
            { "name": "Cost-Optimized Mix", "description": "Swap one Senior consultant for a Standard consultant to reduce labor costs." },
            { "name": "Quality-Focused Mix", "description": "Add one Senior consultant to increase expertise and potentially accelerate delivery." }
          ]
        },
        {
          "dimension": "Project Timeline",
          "scenarios": [
            { "name": "Standard Timeline", "description": "Based on the initial estimate of total project days." },
            { "name": "Accelerated Timeline", "description": "Increase team size to reduce duration by 20%, likely increasing cost but delivering value sooner." }
          ]
        }
      ],
      "optimizationTools": [
        {
          "id": "tool1",
          "name": "Team Mix Adjustment",
          "question": "How does changing the seniority mix impact the project margin and total cost?"
        },
        {
          "id": "tool2",
          "name": "Timeline Compression",
          "question": "What is the cost implication of shortening the project timeline by adding more resources?"
        }
      ]
    },
    {
      "id": "phase7",
      "number": 7,
      "title": "Decision & Documentation",
      "objective": "Make go/no-go decision and document rationale",
      "icon": "check-square",
      "guidance": [
        "Your rationale is as important as the decision itself. Document it clearly for future reference.",
        "Ensure all key assumptions are listed. This provides context if circumstances change.",
        "Get formal sign-off from all relevant stakeholders before proceeding."
      ],
       "steps": [
        {
          "id": "step7_1",
          "title": "Final Decision",
           "fields": [
            {
              "id": "decision",
              "label": "Decision",
              "type": "select",
              "options": ["Approved", "Rejected", "Pending", "Alternative"],
              "required": true
            },
            {
              "id": "rationale",
              "label": "Decision Rationale",
              "type": "textarea",
              "required": true,
              "placeholder": "Document reasoning for this decision"
            },
            {
              "id": "assumptions",
              "label": "Key Assumptions",
              "type": "textarea",
              "placeholder": "List important assumptions made"
            },
            {
              "id": "risks",
              "label": "Special Considerations",
              "type": "textarea",
              "placeholder": "Note any special circumstances or considerations"
            }
          ]
        }
      ],
      "qualityGates": []
    }
  ],
  // Fix: Add missing properties to conform to the Framework interface.
  "indicators": {},
  "uiConfiguration": {},
  "helpMessages": {},
  "exportTemplates": {
    "approvalForm": {
      "name": "Project Approval Form",
      "filename": "Project_Approval_{{projectName}}.txt",
      "content": "PROJECT DECISION DOCUMENT: APPROVAL\n\n========================================\n\nProject Name: {{projectName}}\nClient: {{clientName}}\n\nDecision Date: " + new Date().toLocaleDateString() + "\n\n----------------------------------------\n\nDECISION: {{decision}}\n\n----------------------------------------\n\nRATIONALE FOR APPROVAL:\n{{rationale}}\n\n----------------------------------------\n\nKEY ASSUMPTIONS:\n{{assumptions}}\n\n----------------------------------------\n\nSPECIAL CONSIDERATIONS:\n{{risks}}\n\n----------------------------------------\n\nGenerated by Project Profitability Assessor"
    },
    "rejectionNotice": {
      "name": "Project Rejection Notice",
      "filename": "Project_Rejection_{{projectName}}.txt",
      "content": "PROJECT DECISION DOCUMENT: REJECTION\n\n========================================\n\nProject Name: {{projectName}}\nClient: {{clientName}}\n\nDecision Date: " + new Date().toLocaleDateString() + "\n\n----------------------------------------\n\nDECISION: {{decision}}\n\n----------------------------------------\n\nRATIONALE FOR REJECTION:\n{{rationale}}\n\n----------------------------------------\n\nNEXT STEPS:\n[ ] Re-scope and re-evaluate\n[ ] Archive project proposal\n[ ] Other: ______________________\n\n----------------------------------------\n\nGenerated by Project Profitability Assessor"
    }
  }
};

export default frameworkData;
