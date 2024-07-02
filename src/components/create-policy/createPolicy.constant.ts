import coppit from "@/common/assets/images/copilot.svg";
import snyk from "@/common/assets/images/snyk.svg";

export const OPTIONS = [
  { value: "all-devops", label: "All-Devops" },
  { value: "Qa-team", label: "QA-Team" },
];

export const actions = [
  {
    id: 1,
    label: "Copilot",
    img: coppit,
  },
  {
    id: 2,
    label: "Snyk",
    img: snyk,
  },
];

export const multiAction = [
  {
    id: 1,
    label: "R&D",
  },
  {
    id: 2,
    label: "Design",
  },
  {
    id: 3,
    label: "IT",
  },
  {
    id: 4,
    label: "Dev Team",
  },
];

export const assets = [
  {
    id: 1,
    label: "Message",
  },
  {
    id: 2,
    label: "Another one",
  },
  {
    id: 3,
    label: "File",
  },
];

export const severity = [
  {
    id: 1,
    label: "Medium",
  },
  {
    id: 2,
    label: "Low",
  },
  {
    id: 3,
    label: "High",
  },
  {
    id: 4,
    label: "Critical",
  },
];



export const POLICIES_CHECKBOX_FILTER = [
  { id: 1, value: "GDPR", checkedValue: true, enable: true, check: true },
  {
    id: 2,
    value: "Nist Ai RMF",
    checkedValue: true,
    enable: true,
    check: true,
  },
  { id: 3, value: "HIPAA", checkedValue: false, enable: false, check: false },
  {
    id: 4,
    value: "EU AI Act",
    checkedValue: false,
    enable: false,
    check: false,
  },
  {
    id: 5,
    value: "Mitre ATLAS",
    checkedValue: true,
    enable: true,
    check: true,
  },
];



export const  TOPICS = [
  { id: 1, name: "R&D" },
  { id: 2, name: "Hiring" },

];