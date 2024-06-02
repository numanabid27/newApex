import * as echarts from "echarts";
import CodeIcon from "@/common/assets/images/code-icon.svg";
import PIIIcon from "@/common/assets/images/pll-icon.svg";
import PCIIcon from "@/common/assets/images/pci-icon.svg";
import AccessDataIcon from "@/common/assets/images/access-data-icon.svg";
import GPT4Icon from "@/common/assets/images/gpt4-icon.svg";
import GPT3Icon from "@/common/assets/images/gpt3-icon.svg";
import AzureIcon from "@/common/assets/images/azure-icon.svg";
import BardIcon from "@/common/assets/images/bard-icon.svg";
import user from "@/common/assets/images/insiteUser.svg";
import engine from "@/common/assets/images/insiteEngine.svg";

export const SENSITIVE_DATATYPE_CHART = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    show: false,
    orient: "vertical",
    top: "5%",
    left: "left",
    data: ["Code", "PII", "PCI", "Access Data"],
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
        { value: 83.2, name: "Code" },
        { value: 5.26, name: "PII" },
        { value: 4.21, name: "PCI" },
        { value: 4.21, name: "Access Data" },
      ],
      color: ["#7F56D9", "#E31B54", "#EC4A0A", "#12B76A"],
    },
  ],
};

export const SENSITIVE_DATATYPE_DATA = [
  { id: 1, value: 83.2, name: "Code", icon: CodeIcon },
  { id: 2, value: 5.26, name: "PII", icon: PIIIcon },
  { id: 3, value: 4.21, name: "PCI", icon: PCIIcon },
  { id: 4, value: 4.21, name: "Access Data", icon: AccessDataIcon },
];

export const ISSUES_BY_ENGINE_DATA = [
  { id: 1, value: 33.74, name: "Azure OpenAI General", icon: GPT4Icon },
  { id: 2, value: 28.63, name: "HuggingFace Llama", icon: PIIIcon },
  { id: 3, value: 14.31, name: "Github Co-Pilot", icon: AzureIcon },
  { id: 4, value: 12.5, name: "OpenAI GPT4", icon: GPT3Icon },
  { id: 5, value: 11.46, name: "Google Bard", icon: BardIcon },
];

export const ISSUES_BY_ENGINE_CHART = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    show: false,
    orient: "vertical",
    top: "5%",
    left: "left",
    data: [
      "Azure OpenAI General",
      "HuggingFace Llama",
      "Github Co-Pilot",
      "OpenAI GPT4",
      "Google Bard",
    ],
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
      name: "Issues by Engine",
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
        { value: 33.74, name: "Azure OpenAI General" },
        { value: 28.63, name: "HuggingFace Llama" },
        { value: 14.31, name: "Github Co-Pilot" },
        { value: 12.5, name: "OpenAI GPT4" },
        { value: 11.46, name: "Google Bard" },
      ],
      color: ["#7F56D9", "#E31B54", "#EC4A0A", "#53B1FD", "#12B76A"],
    },
  ],
};

export const TOTAL_ISSUES_CHART = {
  height: 120,
  width: 1600,
  tooltip: {
    trigger: "axis",
    show: false,
    axisPointer: {
      show: false,
      type: "cross",
      label: {
        backgroundColor: "#FEF3F2",
      },
    },
  },
  legend: {
    show: false,
    data: ["Email"],
  },
  toolbox: {
    show: false,
  },
  grid: {
    show: false,
  },
  xAxis: [
    {
      show: false,
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  ],
  yAxis: [
    {
      show: false,
      type: "value",
    },
  ],
  series: [
    {
      name: "Union Ads",
      type: "line",
      cursor: "default",
      stack: "Total",
      data: [20, 10, 13, 18, 11, 8, 0],
      color: ["#12B76A"],
      gradientColor: ["#65DFA2"],
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "#65DFA2",
          },
          {
            offset: 1,
            color: "#fef9f86e",
          },
        ]),
      },
      step: false,
      smooth: true,
      showSymbol: false,
    },
  ],
};

export const SEVERITY_DATA = [
  { id: 1, name: "Critical", value: 10, color: "#912018" },
  { id: 2, name: "High", value: 15, color: "#D92D20" },
  { id: 3, name: "Medium", value: 65, color: "#FB6514" },
  { id: 4, name: "Low", value: 10, color: "#12B76A" },
];

export const TOP_ISSUES_DATA = [
  { id: 1, value: "User is sharing PII", date: "5 hours ago" },
  {
    id: 2,
    value:
      "lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh ",
    date: "5 hours ago",
  },
  {
    id: 3,
    value:
      "Nullam massa massa, vulputate id quam non, pretium pulvinar quam. In hac habitasse platea ",
    date: "4 days ago",
  },
];

export const FILTERS_DROPDOWN = [
  {
    id: 1,
    value: "Violation Type",
    keyValue: "violation",
    options: ["PII", "Code"],
  },
  {
    id: 2,
    value: "Engine",
    keyValue: "engine",
    options: ["GPT 4", "GPT 3.5"],
  },
  // {
  //   id: 3,
  //   value: "User",
  //   keyValue: "user",
  //   options: [
  //     "abc@untitledui.com",
  //     "cdf@untitledui.com",
  //     "annasmith@untitled.com",
  //   ],
  // },
  
  // {
  //   id:3,
  //   value: "Source",
  //   keyValue: "source",
  //   options: ["Apexchat1", "Apexchat2", "Apexchat3", "Apexchat4"],
  // },
  {
    id: 3,
    value: "Severity",
    keyValue: "severity",
    options: ["Critical", "High", "Medium"],
  },
  {
    id: 4,
    value: "Status",
    keyValue: "status",
    options: ["Active", "Disable"],
  },
  // {
  //   id: 6,
  //   value: "Conversation ID",
  //   keyValue: "conversationalId",
  //   options: [
  //     "023fab19-bb0d-44f2-96a6-37a0a1cfc4a0",
  //     "033fab19-bb0d-44f2-96a6-37a0a1cfc4a0",
  //     "043fab19-bb0d-44f2-96a6-37a0a1cfc4a0",
  //     "013fab19-bb0d-44f2-96a6-37a0a1cfc4a0",
  //   ],
  // },
];

export const ISSUES_TABLE_DATA = [
  {
    id: 1,
    timestamp: "Sep 14, 2023 2:06 PM",
    violation: "Code",
    source: "Apexchat1",
    engine: "GPT 4",
    conversationalId: "023fab19-bb0d-44f2-96a6-37a0a1cfc4a0",
    user: "annasmith@untitled.com",
    severity: "Critical",
    status: "Open",
    chat: "Cybersecurity 101: Protecting Your Company's Data",
  },
  {
    id: 2,
    timestamp: "Aug 15, 2023 2:06 PM",
    violation: "PII",
    source: "Apexchat2",
    engine: "GPT 3.5",
    conversationalId: "033fab19-bb0d-44f2-96a6-37a0a1cfc4a0",
    user: "phoenix@untitledui.com",
    severity: "High",
    status: "Closed",
    chat: "Mastering the Art of Remote Work: Tips and Tricks for Success",
  },
  {
    id: 3,
    timestamp: "Oct 15, 2023 2:06 PM",
    violation: "Code",
    source: "Apexchat3",
    engine: "GPT 4",
    conversationalId: "043fab19-bb0d-44f2-96a6-37a0a1cfc4a0",
    user: "annasmith@untitled.com",
    severity: "High",
    status: "Pending",
    chat: "Navigating the World of Cloud Computing",
  },
  {
    id: 4,
    timestamp: "Nov 15, 2023 2:06 PM",
    violation: "PII",
    source: "Apexchat4",
    engine: "GPT 4",
    conversationalId: "013fab19-bb0d-44f2-96a6-37a0a1cfc4a0",
    user: "annasmith@untitled.com",
    severity: "Medium",
    status: "Pending",
    chat: "The Future of Blockchain Technology",
  },
  {
    id: 5,
    timestamp: "Dec 15, 2023 2:06 PM",
    violation: "Code",
    source: "Apexchat5",
    engine: "GPT 4",
    conversationalId: "053fab19-bb0d-44f2-96a6-37a0a1cfc4a0",
    user: "orlando@untitledui.com",
    severity: "Medium",
    status: "Closed",
    chat: "Digital Marketing Strategies for the Modern Era",
  },
  {
    id: 6,
    timestamp: "Dec 15, 2023 2:06 PM",
    violation: "Code",
    source: "Apexchat5",
    engine: "GPT 4",
    conversationalId: "053fab19-bb0d-44f2-96a6-37a0a1cfc4a0",
    user: "annasmith@untitled.com",
    severity: "Critical",
    status: "Pending",
    chat: "Cybersecurity 101: Protecting Your Company's Data",
  },
  {
    id: 7,
    timestamp: "Dec 15, 2023 2:06 PM",
    violation: "Code",
    source: "Apexchat5",
    engine: "GPT 4",
    conversationalId: "053fab19-bb0d-44f2-96a6-37a0a1cfc4a0",
    user: "kate@untitledui.com",
    severity: "High",
    status: "Open",
    chat: "Navigating the World of Cloud Computing",
  },
  {
    id: 8,
    timestamp: "Oct 15, 2023 2:06 PM",
    violation: "Code",
    source: "Apexchat3",
    engine: "GPT 4",
    conversationalId: "043fab19-bb0d-44f2-96a6-37a0a1cfc4a0",
    user: "fgi@untitledui.com",
    severity: "High",
    status: "Pending",
    chat: "The Future of Blockchain Technology",
  },
];

export const ISSUES_TABLE_HEAD = [
  { id: 1, value: "Timestamp", keyValue: "timestamp" },
  { id: 2, value: "Violation Category", keyValue: "violation" },
  { id: 3, value: "Source", keyValue: "source" },
  { id: 4, value: "Engine", keyValue: "engine" },
  { id: 5, value: "Conversation ID", keyValue: "conversationalId" },
  { id: 6, value: "User Email", keyValue: "user" },
  { id: 7, value: "Severity", keyValue: "severity" },
  { id: 8, value: "Status", keyValue: "status" },
  { id: 9, value: "Chat", keyValue: "chat" },
];

// drawer graphs
const OPTIONS = {
 
  tooltip: {},
  animationDurationUpdate: 1500,
  animationEasingUpdate: 'quinticInOut',
  series: [
    {
      type: 'graph',
      layout: 'none',
      symbolSize: 50,
      roam: true,
      label: {
        show: true,
        position: 'bottom',
        formatter: '{b}' 
      },
      edgeSymbol: ['circle', 'arrow'],
      edgeSymbolSize: [4, 10],
      edgeLabel: {
        fontSize: 20
      },
      data: [
        {
          name: 'Node 1',
          x:270,
          y: 80,
          symbol: `image://image/node-1.png`,
          symbolSize: [60, 85],
          label: {
            show: false,
            formatter: '4 Files'
          }
        },
        {
          name: 'Node 2',
          x: 360,
          y: 80,
          symbol: `image://image/node-2.png`,
          symbolSize: [60, 85],
          label: {
            show: false,
            formatter: 'Copilot'
          }
        },
        {
          name: 'Node 3',
          x: 430,
          y: 80,
          symbol: `image://image/node-3.png`,
          symbolSize: [60, 85],
          label: {
            show: false,
            formatter: 'Copilot'
          }
        },
        {
          name: 'Node 4',
          x: 510,
          y: 80,
          symbol: `image://image/node-4.png`,
          symbolSize: [60, 85],
          label: {
            show: false,
            formatter: 'Copilot'
          }
        },
        {
          name: 'Node 5',
          x: 430,
          y: 130,
          symbol: `image://image/node-7.png`,
          symbolSize: [60, 85],
          label: {
            show: false,
            formatter: 'Copilot'
          }
        },
        {
          name: 'Node 6',
          x: 510,
          y: 130,
          symbol: `image://image/node-6.png`,
          symbolSize: [60, 85],
          label: {
            show: false,
            formatter: 'Copilot'
          }
        }
      ],
      links: [
        {
          source: 'Node 1',
          target: 'Node 2'
        },
        {
          source: 'Node 2',
          target: 'Node 3'
        },
        {
          source: 'Node 3',
          target: 'Node 4'
        },
        {
          source: 'Node 3',
          target: 'Node 5'
        },
        {
          source: 'Node 4',
          target: 'Node 6'
        }
      ],
      lineStyle: {
        opacity: 0.9,
        width: 2,
        curveness: 0
      }
    }
  ]
};

const GITHUB_OPTIONS = {
 
  tooltip: {},
  animationDurationUpdate: 1500,
  animationEasingUpdate: 'quinticInOut',
  series: [
    {
      type: 'graph',
      layout: 'none',
      symbolSize: 50,
      roam: true,
      label: {
        show: true,
        position: 'bottom',
        formatter: '{b}' 
      },
      edgeSymbol: ['circle', 'arrow'],
      edgeSymbolSize: [4, 10],
      edgeLabel: {
        fontSize: 20
      },
      data: [
        {
          name: 'Node 1',
          x:270,
          y: 80,
          symbol: `image://image/node-1.png`,
          symbolSize: [60, 85],
          label: {
            show: false,
            formatter: '4 Files'
          }
        },
        {
          name: 'Node 2',
          x: 360,
          y: 80,
          symbol: `image://image/node-2.png`,
          symbolSize: [60, 85],
          label: {
            show: false,
            formatter: 'Copilot'
          }
        },
        {
          name: 'Node 3',
          x: 430,
          y: 80,
          symbol: `image://image/node-3.png`,
          symbolSize: [60, 85],
          label: {
            show: false,
            formatter: 'Copilot'
          }
        },
        {
          name: 'Node 4',
          x: 430,
          y: 150,
          symbol: `image://image/node-7.png`,
          symbolSize: [60, 85],
          label: {
            show: false,
            formatter: 'Copilot'
          }
        }
      ],
      links: [
        {
          source: 'Node 1',
          target: 'Node 2'
        },
        {
          source: 'Node 2',
          target: 'Node 3'
        },
        {
          source: 'Node 3',
          target: 'Node 4'
        }
      ],
      lineStyle: {
        opacity: 0.9,
        width: 2,
        curveness: 0
      }
    }
  ]
};

export const rows = [
  {
    id: 1,
    lastEvent: "Aug 14, 2023 10:46 AM",
    name: "Oren did 18 PII violations",
    subcategories: "Email",
    severity: "High",
    users: ["user@x.com", "user2@x.com", "+20"],
    interface: ["ApexChat", "Azure Open AI"],
    engine: ["gap-4", "+4"],
    tags: "LLM06",
    status: "Open",
    context: "File path",
    policiesData: [
      {
        id: 1,
        date: "Aug 14, 2023 2:06 PM",
        role: "User",
        voilationType: "Code",
        severity: "Critical",
        userEmail: "olivia@untitledui.com",
        sessionId: "053fab19-bb0d...",
        model: "Gpt 4",
        source: "Apexchat",
        status: "Open",
      },
      {
        id: 2,
        date: "Aug 14, 2023 10:46 AM",
        role: "User",
        voilationType: "ExternalResources",
        severity: "High",
        userEmail: "phoenix@untitledui.com",
        sessionId: "1af843b2-9401...",
        model: "Gpt 3 5 Turbo",
        source: "Apexchat",
        status: "Open",
      },
      {
        id: 3,
        date: "Aug 14, 2023 2:06 PM",
        role: "User",
        voilationType: "Code",
        severity: "High",
        userEmail: "natali@untitledui.com",
        sessionId: "1af843b2-9401...",
        model: "Gpt 4",
        source: "Apexchat",
        status: "Open",
      },
      {
        id: 4,
        date: "Aug 14, 2023 2:06 PM",
        role: "User",
        voilationType: "Code",
        severity: "Medium",
        userEmail: "drew@untitledui.com",
        sessionId: "053fab19-bb0d...",
        model: "Gpt 4",
        source: "Apexchat",
        status: "Open",
      },
    ],
    insights: [
      {
        id: 1,
        user: "User",
        image: user,
        name: "John Doe",
        messages: ["84", "+13%"],
        sessions: ["23", "-9%"],
        vilations: [
          {
            id: 1,
            name: "1 Critical",
          },
          {
            id: 2,
            name: "2 High",
          },
          {
            id: 3,
            name: "1 Medium",
          },
          {
            id: 4,
            name: "80 Low",
          },
        ],
        categories: ["PII", "PCI"],
      },
      {
        id: 2,
        user: "Engine",
        image: engine,
        name: "Copilot",
        messages: ["84", "+13%"],
        sessions: ["23", "-9%"],
        vilations: [
          {
            id: 1,
            name: "1 Critical",
          },
          {
            id: 2,
            name: "2 High",
          },
          {
            id: 3,
            name: "1 Medium",
          },
          {
            id: 4,
            name: "80 Low",
          },
        ],
        categories: ["PII", "PCI"],
      },
    ],
    graph:OPTIONS
  },
  {
    id: 2,
    lastEvent: "Aug 14, 2023 10:46 AM",
    name: "Microsoft Copilot shared sensitive information about ...",
    subcategories: "Sensitive data",
    severity: "High",
    users: ["user@x.com", "user2@x.com"],
    interface: ["ApexChat"],
    engine: ["Gpt 3 5 Turbo"],
    tags: "LLM06",
    status: "Resolved",
    context: "File path",
    policiesData: [
      {
        id: 1,
        date: "Aug 14, 2023 2:06 PM",
        role: "User",
        voilationType: "Code",
        severity: "Critical",
        userEmail: "olivia@untitledui.com",
        sessionId: "053fab19-bb0d...",
        model: "Gpt 4",
        source: "Apexchat",
        status: "Open",
      },
      {
        id: 2,
        date: "Aug 14, 2023 10:46 AM",
        role: "User",
        voilationType: "ExternalResources",
        severity: "High",
        userEmail: "phoenix@untitledui.com",
        sessionId: "1af843b2-9401...",
        model: "Gpt 3 5 Turbo",
        source: "Apexchat",
        status: "Open",
      },
      {
        id: 3,
        date: "Aug 14, 2023 2:06 PM",
        role: "User",
        voilationType: "Code",
        severity: "High",
        userEmail: "natali@untitledui.com",
        sessionId: "1af843b2-9401...",
        model: "Gpt 4",
        source: "Apexchat",
        status: "Open",
      },
      {
        id: 4,
        date: "Aug 14, 2023 2:06 PM",
        role: "User",
        voilationType: "Code",
        severity: "Medium",
        userEmail: "drew@untitledui.com",
        sessionId: "053fab19-bb0d...",
        model: "Gpt 4",
        source: "Apexchat",
        status: "Open",
      },
    ],
    insights: [
      {
        id: 1,
        user: "User",
        image: user,
        name: "John Doe",
        messages: ["84", "+13%"],
        sessions: ["23", "-9%"],
        vilations: [
          {
            id: 1,
            name: "1 Critical",
          },
          {
            id: 2,
            name: "2 High",
          },
          {
            id: 3,
            name: "1 Medium",
          },
          {
            id: 4,
            name: "80 Low",
          },
        ],
        categories: ["PII", "PCI"],
      },
      {
        id: 2,
        user: "Engine",
        image: engine,
        name: "Copilot",
        messages: ["84", "+13%"],
        sessions: ["23", "-9%"],
        vilations: [
          {
            id: 1,
            name: "1 Critical",
          },
          {
            id: 2,
            name: "2 High",
          },
          {
            id: 3,
            name: "1 Medium",
          },
          {
            id: 4,
            name: "80 Low",
          },
        ],
        categories: ["PII", "PCI"],
      },
    ],
    graph:OPTIONS
  },
  {
    id: 3,
    lastEvent: "Aug 14, 2023 10:46 AM",
    name: "Github Copilot collected and sent 3 API keys ",
    subcategories: "Sensitive data",
    severity: "Medium",
    users: ["user@x.com", "user2@x.com"],
    interface: ["Azure Open AI", "ApexChat"],
    engine: ["Gpt 3 5 Turbo"],
    tags: "LLM06",
    status: "Resolved",
    context: "File path",
    policiesData: [
      {
        id: 1,
        date: "Aug 14, 2023 2:06 PM",
        role: "User",
        voilationType: "Code",
        severity: "Critical",
        userEmail: "olivia@untitledui.com",
        sessionId: "053fab19-bb0d...",
        model: "Gpt 4",
        source: "Apexchat",
        status: "Open",
      },
      {
        id: 2,
        date: "Aug 14, 2023 10:46 AM",
        role: "User",
        voilationType: "ExternalResources",
        severity: "High",
        userEmail: "phoenix@untitledui.com",
        sessionId: "1af843b2-9401...",
        model: "Gpt 3 5 Turbo",
        source: "Apexchat",
        status: "Open",
      },
      {
        id: 3,
        date: "Aug 14, 2023 2:06 PM",
        role: "User",
        voilationType: "Code",
        severity: "High",
        userEmail: "natali@untitledui.com",
        sessionId: "1af843b2-9401...",
        model: "Gpt 4",
        source: "Apexchat",
        status: "Open",
      },
      {
        id: 4,
        date: "Aug 14, 2023 2:06 PM",
        role: "User",
        voilationType: "Code",
        severity: "Medium",
        userEmail: "drew@untitledui.com",
        sessionId: "053fab19-bb0d...",
        model: "Gpt 4",
        source: "Apexchat",
        status: "Open",
      },
    ],
    insights: [
      {
        id: 1,
        user: "User",
        image: user,
        name: "John Doe",
        messages: ["84", "+13%"],
        sessions: ["23", "-9%"],
        vilations: [
          {
            id: 1,
            name: "1 Critical",
          },
          {
            id: 2,
            name: "2 High",
          },
          {
            id: 3,
            name: "1 Medium",
          },
          {
            id: 4,
            name: "80 Low",
          },
        ],
        categories: ["PII", "PCI"],
      },
      {
        id: 2,
        user: "Engine",
        image: engine,
        name: "Copilot",
        messages: ["84", "+13%"],
        sessions: ["23", "-9%"],
        vilations: [
          {
            id: 1,
            name: "1 Critical",
          },
          {
            id: 2,
            name: "2 High",
          },
          {
            id: 3,
            name: "1 Medium",
          },
          {
            id: 4,
            name: "80 Low",
          },
        ],
        categories: ["PII", "PCI"],
      },
    ],
    graph:GITHUB_OPTIONS
  },
  {
    id: 4,
    lastEvent: "Aug 14, 2023 10:46 AM",
    name: "Suspicious prompt injection was detected in your Azure...",
    subcategories: "PII, PCI",
    severity: "Medium",
    users: ["user@x.com", "user2@x.com"],
    interface: ["ApexChat", "Azure Open AI"],
    engine: ["Gpt 3 5 Turbo"],
    tags: "LLM06",
    status: "Open",
    context: "File path",
    policiesData: [
      {
        id: 1,
        date: "Aug 14, 2023 2:06 PM",
        role: "User",
        voilationType: "Code",
        severity: "Critical",
        userEmail: "olivia@untitledui.com",
        sessionId: "053fab19-bb0d...",
        model: "Gpt 4",
        source: "Apexchat",
        status: "Open",
      },
      {
        id: 2,
        date: "Aug 14, 2023 10:46 AM",
        role: "User",
        voilationType: "ExternalResources",
        severity: "High",
        userEmail: "phoenix@untitledui.com",
        sessionId: "1af843b2-9401...",
        model: "Gpt 3 5 Turbo",
        source: "Apexchat",
        status: "Open",
      },
      {
        id: 3,
        date: "Aug 14, 2023 2:06 PM",
        role: "User",
        voilationType: "Code",
        severity: "High",
        userEmail: "natali@untitledui.com",
        sessionId: "1af843b2-9401...",
        model: "Gpt 4",
        source: "Apexchat",
        status: "Open",
      },
      {
        id: 4,
        date: "Aug 14, 2023 2:06 PM",
        role: "User",
        voilationType: "Code",
        severity: "Medium",
        userEmail: "drew@untitledui.com",
        sessionId: "053fab19-bb0d...",
        model: "Gpt 4",
        source: "Apexchat",
        status: "Open",
      },
    ],
    insights: [
      {
        id: 1,
        user: "User",
        image: user,
        name: "John Doe",
        messages: ["84", "+13%"],
        sessions: ["23", "-9%"],
        vilations: [
          {
            id: 1,
            name: "1 Critical",
          },
          {
            id: 2,
            name: "2 High",
          },
          {
            id: 3,
            name: "1 Medium",
          },
          {
            id: 4,
            name: "80 Low",
          },
        ],
        categories: ["PII", "PCI"],
      },
      {
        id: 2,
        user: "Engine",
        image: engine,
        name: "Copilot",
        messages: ["84", "+13%"],
        sessions: ["23", "-9%"],
        vilations: [
          {
            id: 1,
            name: "1 Critical",
          },
          {
            id: 2,
            name: "2 High",
          },
          {
            id: 3,
            name: "1 Medium",
          },
          {
            id: 4,
            name: "80 Low",
          },
        ],
        categories: ["PII", "PCI"],
      },
    ],
    graph:OPTIONS
  },
  {
    id: 5,
    lastEvent: "Aug 14, 2023 10:46 AM",
    name: "Github Copilot suggestion for vulnerable package was approved",
    subcategories: "PII, PCI",
    severity: "Medium",
    users: ["user@x.com", "user2@x.com"],
    interface: ["ApexChat", "Azure Open AI"],
    engine: ["Gpt 3 5 Turbo"],
    tags: "LLM06",
    status: "Open",
    context: "File path",
    policiesData: [
      {
        id: 1,
        date: "Aug 14, 2023 2:06 PM",
        role: "User",
        voilationType: "Code",
        severity: "Critical",
        userEmail: "olivia@untitledui.com",
        sessionId: "053fab19-bb0d...",
        model: "Gpt 4",
        source: "Apexchat",
        status: "Open",
      },
      {
        id: 2,
        date: "Aug 14, 2023 10:46 AM",
        role: "User",
        voilationType: "ExternalResources",
        severity: "High",
        userEmail: "phoenix@untitledui.com",
        sessionId: "1af843b2-9401...",
        model: "Gpt 3 5 Turbo",
        source: "Apexchat",
        status: "Open",
      },
      {
        id: 3,
        date: "Aug 14, 2023 2:06 PM",
        role: "User",
        voilationType: "Code",
        severity: "High",
        userEmail: "natali@untitledui.com",
        sessionId: "1af843b2-9401...",
        model: "Gpt 4",
        source: "Apexchat",
        status: "Open",
      },
      {
        id: 4,
        date: "Aug 14, 2023 2:06 PM",
        role: "User",
        voilationType: "Code",
        severity: "Medium",
        userEmail: "drew@untitledui.com",
        sessionId: "053fab19-bb0d...",
        model: "Gpt 4",
        source: "Apexchat",
        status: "Open",
      },
    ],
    insights: [
      {
        id: 1,
        user: "User",
        image: user,
        name: "John Doe",
        messages: ["84", "+13%"],
        sessions: ["23", "-9%"],
        vilations: [
          {
            id: 1,
            name: "1 Critical",
          },
          {
            id: 2,
            name: "2 High",
          },
          {
            id: 3,
            name: "1 Medium",
          },
          {
            id: 4,
            name: "80 Low",
          },
        ],
        categories: ["PII", "PCI"],
      },
      {
        id: 2,
        user: "Engine",
        image: engine,
        name: "Copilot",
        messages: ["84", "+13%"],
        sessions: ["23", "-9%"],
        vilations: [
          {
            id: 1,
            name: "1 Critical",
          },
          {
            id: 2,
            name: "2 High",
          },
          {
            id: 3,
            name: "1 Medium",
          },
          {
            id: 4,
            name: "80 Low",
          },
        ],
        categories: ["PII", "PCI"],
      },
    ],
    graph:OPTIONS
  }
];




