import claude from "@/common/assets/images/claude.png";
import high from "@/common/assets/images/high.svg";
import microsoftcopilot from "@/common/assets/images/microsoftcopilot.svg";
import complianceRisk from "@/common/assets/images/complianceRisk.svg";
import unsanctioneApp from "@/common/assets/images/unsanctioneApp.svg";

export const FILTERES_DATA = [
  {
    name: "departments",
    label: "Departments",
    select: true,
    col: 1.5,
    options: [
      { value: "A", label: "A" },
      { value: "B", label: "B" },
    ],
  },
  {
    name: "application",
    label: "Application",
    select: true,
    col: 1.5,
    options: [
      { value: "A", label: "A" },
      { value: "B", label: "B" },
    ],
  },
  {
    name: "risk",
    label: "Risk",
    select: true,
    col: 1,
    options: [
      { value: "A", label: "A" },
      { value: "B", label: "B" },
    ],
  },
  {
    name: "source",
    label: "Source",
    select: true,
    col: 1,
    options: [
      { value: "A", label: "A" },
      { value: "B", label: "B" },
    ],
  },
  {
    name: "type",
    label: "Type",
    select: true,
    col: 1,
    options: [
      { value: "A", label: "A" },
      { value: "B", label: "B" },
    ],
  },
];

export const DISCOVERED_APP_TABLE_DATA = [
  {
    id: 1,
    application: {
      name: "Anthropic Claude",
      img: claude,
    },
    category: [{ id: 1, name: "Chatbot", }],
    user_dep: [
      { id: 1, name: "R&D" },
      { id: 2, name: "Marketing" },
    ],
    risk_score: {
      level: "Hight",
      img: high,
    },
    risk_users: "602",
    total_users: "3967",
    source: [
      {
        risk: 'Compliance risk',
        icon: complianceRisk,
      },
      {
        risk: 'Security risk',
        icon: unsanctioneApp,
      }
    ]
  },
  {
    id: 2,
    application: {
      name: "Microsoft Bing Chat",
      img: microsoftcopilot,
    },
    category: [
      { id: 1, name: "Virtual assistant" },
      { id: 2, name: "Chatbot" }
    ],
    user_dep: [
      { id: 1, name: "Human Resources" },
    ],
    risk_score: {
      level: "Hight",
      img: high,
    },
    risk_users: "404",
    total_users: "2389",
    source: [
      {
        risk: 'Security risk',
        icon: unsanctioneApp,
      }
    ]
  },
  {
    id: 3,
    application: {
      name: "Amazon Polly",
      img: claude,
    },
    category: [{ id: 1, name: "Text to speech", }],
    user_dep: [
      { id: 1, name: "Human Resources" },
    ],
    risk_score: {
      level: "Hight",
      img: high,
    },
    risk_users: "23",
    total_users: "500",
    source: [
      {
        risk: 'Copyright risk',
        icon: complianceRisk,
      },
      {
        risk: 'Compliance risk',
        icon: unsanctioneApp,
      }
    ]
  },
  {
    id: 4,
    application: {
      name: "OpenAI ChatGPT",
      img: microsoftcopilot,
    },
    category: [
      { id: 1, name: "Chatbot" },
      { id: 2, name: "Agents" }
    ],
    user_dep: [
      { id: 1, name: "Sales" },
    ],
    risk_score: {
      level: "Hight",
      img: high,
    },
    risk_users: "6",
    total_users: "1203",
    source: [
      {
        risk: 'Data privacy',
        icon: unsanctioneApp,
      }
    ]
  },
  {
    id: 5,
    application: {
      name: "Jasper AI",
      img: claude,
    },
    category: [{ id: 1, name: "Content writing", }],
    user_dep: [
      { id: 1, name: "Finance" },
    ],
    risk_score: {
      level: "Hight",
      img: high,
    },
    risk_users: "37",
    total_users: "4321",
    source: [
      {
        risk: 'Unsanctioned app',
        icon: complianceRisk,
      },
    ]
  },
  {
    id: 6,
    application: {
      name: "Slack AI",
      img: microsoftcopilot,
    },
    category: [{ id: 1, name: "Chat assistant" }],
    user_dep: [
      { id: 1, name: "Operations" },
      { id: 2, name: "Current State" },
    ],
    risk_score: {
      level: "Hight",
      img: high,
    },
    risk_users: "289",
    total_users: "2123",
    source: [
      {
        risk: 'Overly Broad permissions',
        icon: unsanctioneApp,
      }
    ]
  },
  {
    id: 7,
    application: {
      name: "Copy.ai",
      img: claude,
    },
    category: [{ id: 1, name: "Content writing", }],
    user_dep: [
      { id: 1, name: "Information Technology" },
    ],
    risk_score: {
      level: "Medium",
      img: high,
    },
    risk_users: "8",
    total_users: "789",
    source: [
      {
        risk: 'Copyright risk',
        icon: complianceRisk,
      },
    ]
  },
  {
    id: 8,
    application: {
      name: "Salesforce Einstein",
      img: microsoftcopilot,
    },
    category: [{ id: 1, name: "Text to video" }],
    user_dep: [
      { id: 1, name: "Sales" },
    ],
    risk_score: {
      level: "Medium",
      img: high,
    },
    risk_users: "158",
    total_users: "2123",
    source: [
      {
        risk: 'Over-reliance',
        icon: unsanctioneApp,
      }
    ]
  },
  {
    id: 9,
    application: {
      name: "Synthesia",
      img: claude,
    },
    category: [{ id: 1, name: "Text to video", }],
    user_dep: [
      { id: 1, name: "Sales" },
    ],
    risk_score: {
      level: "Medium",
      img: high,
    },
    risk_users: "19",
    total_users: "2765",
    source: [
      {
        risk: 'Data leakage',
        icon: complianceRisk,
      },
    ]
  },
  {
    id: 10,
    application: {
      name: "Writesonic",
      img: microsoftcopilot,
    },
    category: [{ id: 1, name: "Content writing" }],
    user_dep: [
      { id: 1, name: "Customer Service Division" },
    ],
    risk_score: {
      level: "Medium",
      img: high,
    },
    risk_users: "50",
    total_users: "50",
    source: [
      {
        risk: 'Unsanctioned app',
        icon: unsanctioneApp,
      }
    ]
  },
  {
    id: 11,
    application: {
      name: "Rytr",
      img: claude,
    },
    category: [{ id: 1, name: "Content writing", }],
    user_dep: [
      { id: 1, name: "R&D" },
      { id: 2, name: "Marketing" },
    ],
    risk_score: {
      level: "Medium",
      img: high,
    },
    risk_users: "4",
    total_users: "3999",
    source: [
      {
        risk: 'Copyright risk',
        icon: complianceRisk,
      }
    ]
  },
  {
    id: 12,
    application: {
      name: "Descript",
      img: microsoftcopilot,
    },
    category: [{ id: 1, name: "Text to video" }],
    user_dep: [
      { id: 1, name: "Operations" },
    ],
    risk_score: {
      level: "Low",
      img: high,
    },
    risk_users: "31",
    total_users: "2123",
    source: [
      {
        risk: 'Copyright risk',
        icon: unsanctioneApp,
      }
    ]
  },
  {
    id: 13,
    application: {
      name: "Adobe Firefly",
      img: microsoftcopilot,
    },
    category: [{ id: 1, name: "Text to image" }],
    user_dep: [
      { id: 1, name: "Design" },
      { id: 2, name: "Marketing" },
    ],
    risk_score: {
      level: "Low",
      img: high,
    },
    risk_users: "213",
    total_users: "123",
    source: [
      {
        risk: 'Copyright risk',
        icon: unsanctioneApp,
      },
      {
        risk: 'Intellectual Property',
        icon: unsanctioneApp,
      }
    ]
  },
  {
    id: 14,
    application: {
      name: "Zoom AI",
      img: microsoftcopilot,
    },
    category: [{ id: 1, name: "Content summarizer" }],
    user_dep: [
      { id: 1, name: "Executives" },
      { id: 2, name: "Marketing" },
      { id: 3, name: "6 more" },
    ],
    risk_score: {
      level: "Low",
      img: high,
    },
    risk_users: "124",
    total_users: "2123",
    source: [
      {
        risk: 'Data privacy',
        icon: unsanctioneApp,
      }
    ],
  },
];