import * as echarts from "echarts";
import ChatGPTIcon from "@/common/assets/images/gpt.svg";
import CopilotIcon from "@/common/assets/images/panda.svg";
import BardIcon from "@/common/assets/images/shine.svg";
import AzureIcon from "@/common/assets/images/azure.svg";
import AssistantIcon from "@/common/assets/images/emoji.svg";

import CodeIcon from "@/common/assets/images/code-icon.svg";
import PIIIcon from "@/common/assets/images/pll-icon.svg";
import PCIIcon from "@/common/assets/images/pci-icon.svg";
import AccessDataIcon from "@/common/assets/images/access-data-icon.svg";

export const ISSUES_PER_ENGINE_DATA = [
  { id: 1, name: "Azure OpenAI General", value: 16, color: "#B42318" },
  {
    id: 2,
    name: "HuggingFace OpenAssistant Llama",
    value: 5,
    color: "#D92D20",
  },
  { id: 3, name: "Github Copilot", value: 3, color: "#F97066" },
  { id: 4, name: "OpenAI GPT4", value: 2, color: "#FDA29B" },
  { id: 5, name: "Google Bard", value: 1, color: "#FEE4E2" },
];

export const USAGE_BY_DEPARTMENT = [
  { id: 1, value: 49.1, name: "Dev", icon: CodeIcon },
  { id: 2, value: 25.2, name: "IT", icon: PIIIcon },
  { id: 3, value: 14.6, name: "QA", icon: PCIIcon },
  { id: 4, value: 11.1, name: "HR", icon: AccessDataIcon },
];

export const SENSITIVE_DATATYPE_CHART = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    show: false,
    orient: "vertical",
    top: "5%",
    left: "left",
    data: ["Dev", "IT", "QA", "HR"],
    itemGap: 10,
    itemWidth: 6,
    itemHeight: 18,
    textStyle: {
      color: "#667085",
      fontWeight: 600,
      padding: [0, 0, 0, 7],
    },
  },
  series: [
    {
      name: "Sensitive data types",
      type: "pie",
      height: 120,
      center: ["50%", "65%"],
      radius: ["100%", "75%"],
      startAngle: -45,
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 2,
        borderColor: "#fff",
        borderWidth: 2,
      },
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 12,
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 49.1, name: "Dev" },
        { value: 25.2, name: "IT" },
        { value: 14.6, name: "QA" },
        { value: 11.1, name: "HR" },
      ],
      color: ["#7F56D9", "#E31B54", "#EC4A0A", "#12B76A"],
    },
  ],
};

export const ISSUES_BY_DEPARTMENT = [
  { id: 1, name: "Dev", value: 86.3, color: "#7F56D9", percentage: "%" },
  { id: 2, name: "IT", value: 5.26, color: "#0BA5EC", percentage: "%" },
  { id: 3, name: "QA", value: 4.21, color: "#12B76A", percentage: "%" },
  { id: 4, name: "HR", value: 3.8, color: "#EC4A0A", percentage: "%" },
];

export const ENGINE_DATA = [
  { id: 1, name: "ChatGPT GPT 4", value: 86.3, color: "#1570EF" },
  { id: 2, name: "Azure R&D", value: 5.26, color: "#53B1FD" },
  { id: 3, name: "GPT 3.5", value: 4.21, color: "#84CAFF" },
  { id: 4, name: "Co-Pilot, Bard", value: 4.21, color: "#B2DDFF" },
  { id: 5, name: "Bard", value: 1.5, color: "#D1E9FF" },
];

export const TOP_ISSUES_DASHBOARD = [
  { id: 1, value: "User is sharing PII", user: "Anna Smith" },
  {
    id: 2,
    value: "ChatGPT 3.5 is ...",
    user: "",
  },
  {
    id: 3,
    value:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    user: "",
  },
  {
    id: 4,
    value: "lorem ipsum dolor sit amet consectetuer adipiscing elit",
    user: "",
  },
  {
    id: 5,
    value:
      "In hac habitasse platea dictumst. Proin ornare porta vulputate. Mauris augue sem, pharetra a scelerisque",
    user: "",
  },
];

export const USER_ACCESS = [
  { id: 1, value: "Liron Kachko", user: "Anna Smith" },
  {
    id: 2,
    value: "Dan Segev",
    user: "",
  },
  {
    id: 3,
    value: "Ben Nathan",
    user: "",
  },
  {
    id: 4,
    value: "Ela Ganor",
    user: "",
  },
  {
    id: 5,
    value: "Micheal Simpson",
    user: "",
  },
];

export const ACTIVE_ENGINE_DATA = [
  {
    id: 1,
    value: "Azure OpenAI General",
    icon: AzureIcon,
    res: "High risk engine",
    notification: 16,
  },
  {
    id: 2,
    value: "HuggingFace OpenAssistant",
    icon: AssistantIcon,
    res: "High amounts of PII sent",
    notification: 5,
  },
  {
    id: 3,
    value: "Github Copilot",
    icon: CopilotIcon,
    res: "Access token leakage detected",
    notification: 3,
  },
  {
    id: 4,
    value: "OpenAI GPT4",
    icon: ChatGPTIcon,
    res: "Good posture",
    notification: 2,
  },
  {
    id: 5,
    value: "Google Bard Marketing",
    icon: BardIcon,
    res: "Good posture",
    notification: 4,
  },
];

export const SESSION_USER_CHART = {
  height: 90,
  tooltip: {
    trigger: "axis",
    show: true,
    axisPointer: {
      show: false,
      type: "cross",
      label: {
        backgroundColor: "#DAEFFF",
        color: "#000000",
        fontWeight: "550",
      },
    },
  },
  legend: {
    show: false,
    data: ["Session over time, Active User"],
  },
  toolbox: {
    show: false,
  },
  grid: {
    show: false,
  },
  xAxis: [
    {
      show: true,
      type: "category",
      boundaryGap: false,
      data: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  ],
  yAxis: [
    {
      show: true,
      axisLabel: {
        show: false,
      },
      splitNumber: 3,
    },
  ],
  series: [
    {
      name: "Session over time, Active User",
      type: "line",
      stack: "Total",
      data: [20, 10, 13, 18, 11, 8, 10, 32, 21, 24, 26, 28],
      color: ["#1570EF"],
      gradientColor: ["#DAEFFF"],
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "#DAEFFF",
          },
          {
            offset: 1,
            color: "#F7FBFF",
          },
        ]),
      },
      step: false,
      smooth: true,
      showSymbol: false,
    },
  ],
};

export const DATA_DASHBOARD_CHART = {
  height: 200,
  tooltip: {
    show: true,
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  legend: {
    data: ["Incoming Data", "Outgoing Data"],
    icon: "circle",
    right: 10,
    top: 2,
    itemWidth: 7,
    itemHeight: 7,
    textStyle: {
      color: "#667085",
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      show: false,
    },
  ],
  yAxis: [
    {
      show: true,
      axisLabel: {
        show: true,
      },
      name: false,
      axisLine: { onZero: true },
      splitLine: { show: true },
      splitArea: { show: false },
      splitNumber: 3,
      type: "category",
      axisTick: {
        show: false,
      },
      data: ["Other", "Access Data", "PCI", "PII", "Code"],
    },
  ],

  series: [
    {
      name: "Outgoing Data",
      type: "bar",
      stack: "Total",
      cursor: "default",
      label: {
        show: false,
      },
      emphasis: {
        focus: "series",
      },
      data: [400, 302, 230, 190, 190],
      color: ["#53B1FD"],
    },
    {
      name: "Incoming Data",
      cursor: "default",
      type: "bar",
      stack: "Total",
      label: {
        show: false,
        position: "left",
      },
      emphasis: {
        focus: "series",
      },
      data: [-230, -334, -200, -334, -190],
      color: ["#7F56D9"],
    },
  ],
};
