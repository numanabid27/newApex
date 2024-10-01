import claude from "@/common/assets/images/claude.png";
import high from "@/common/assets/images/high.svg";
import microsoftcopilot from "@/common/assets/images/microsoftcopilot.svg";

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
    category: [{ id: 1, name: "Chatbot" }],
    user_dep: [
      { id: 1, name: "R&D" },
      { id: 1, name: "Marketing" },
    ],
    risk_score: {
      level: "Hight",
      img: high,
    },
    risk_users: "602",
    total_users: "3967",
    source: "Test",
  },
  {
    id: 2,
    application: {
      name: "Microsoft Bing Chat",
      img: microsoftcopilot,
    },
    category: [{ id: 1, name: "Chatbot" }],
    user_dep: [
      { id: 1, name: "R&D" },
      { id: 1, name: "Marketing" },
    ],
    risk_score: {
      level: "Hight",
      img: high,
    },
    risk_users: "602",
    total_users: "3967",
    source: "Test",
  },
];
