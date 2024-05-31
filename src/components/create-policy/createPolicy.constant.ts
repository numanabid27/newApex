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