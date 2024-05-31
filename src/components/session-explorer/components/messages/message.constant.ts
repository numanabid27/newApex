import * as echarts from "echarts";

export const USER_1 = {
  height: 50,
  width: 100,
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
  xAxis: {
    type: "category",
    boundaryGap: false,
    show: true,
    data: Array.from({ length: 20 }, (_, i) => i + 1),
    axisLabel: {
      formatter: function (value:any) {
        const visibleLabels = [1, 4, 8, 12, 16, 20, 24, 28];
        return visibleLabels.includes(Number(value)) ? value : '';
      },
    },
  },
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
      data: [
        1.5, 1.5, 1.5, 2, 2.5, 2.5, 2.5, 3, 2, 1.5, 1.5, 1.5, 3.7, 3.7, 2, 1.5, 1.5, 2, 2, 3
      ],
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
      smooth: false,
      showSymbol: false,
    },
  ],
};

export const USER_2 = {
  height: 50,
  width: 100,
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
      data: Array.from({ length: 20 }, (_, i) => i + 1),
      axisLabel: {
        formatter: function (value:any) {
          const visibleLabels = [1, 4, 8, 12, 16, 20, 24, 28];
          return visibleLabels.includes(Number(value)) ? value : '';
        },
      },
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
      data: [
        3.2, 3, 3, 3, 3.5, 2.5, 2.5, 2, 2, 1.5, 1.5, 1.5, 1.5, 1.5, 1.7, 1.9, 1.6, 1, 1, 1
      ],
      color: ["#F04438"],
      gradientColor: ["#f0443869"],
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "#f0443869",
          },
          {
            offset: 1,
            color: "#f0443812",
          },
        ]),
      },
      step: false,
      smooth: false,
      showSymbol: false,
    },
  ],
};

export const USER_3 = {
  height: 50,
  width: 100,
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
      data: Array.from({ length: 20 }, (_, i) => i + 1),
      axisLabel: {
        formatter: function (value:any) {
          const visibleLabels = [1, 4, 8, 12, 16, 20, 24, 28];
          return visibleLabels.includes(Number(value)) ? value : '';
        },
      },
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
      data: [
        3,2,2,1.5,1.5,2,3.7,3.7,1.5,1.5,1.5,2,3,2.5,2.5,2.5,2,1.5,1.5,1.5
      ],
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
      smooth: false,
      showSymbol: false,
    },
  ],
};

export const TOTAL_SESSIONS_CHART = {
  height: 50,
  width: 100,
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
        "1",
        "4",
        "8",
        "12",
        "16",
        "20",
        "24",
        "28"
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
      data: [10, 10, 23, 28, 11, 40, 20, 22, 21, 24, 26, 28,32,38],
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
      smooth: false,
      showSymbol: false,
    },
  ],
};

export const MESSAGE_DATA = [
  {
    id: 1,
    title: "Learn AWS",
    mails:"cindy@email.com",
    lastUpdate:"Apr 24, 2024 10:46 PM",
    interface:"Apex Chat",
    engineType:"Google Gemini",
    context:"repo/filepath.py",
    sessionId:"123456",
    active:"Active",
    topics:["Code","Finance"],

    violation: "12",
    violationCat: "ChatGPT",
  },
  {
    id: 2,
    title: "JIRA ticket",
    mails:"james@email.com",
    lastUpdate:"Apr 12, 2024 09:21 PM",
    interface:"Apex Chat",
    engineType:"OpenAI GPT4",
    context:"repo/filepath.py",
    sessionId:"",
    active:"Active",
    topics:["Finance","Hiring"],

    violation: "8",
    violationCat: "Bard",
  },
  {
    id: 3,
    title: "Python",
    mails:"george@email.com",
    lastUpdate:"Apr 12, 2024 07:42 AM",
    interface:"Github Copilot",
    engineType:"OpenAI Codex",
    context:"repo/filepath.py",
    sessionId:"",
    active:"Active",
    topics:["Code","Security"],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 4,
    title: "Write email",
    mails:"barbara@email.com",
    lastUpdate:"Apr 11, 2024 8:30 AM",
    interface:"365 Copilot",
    engineType:"365 Copilot",
    context:"repo/filepath.py",
    sessionId:"123456",
    active:"Active",
    topics:["Contracts & Agreements","Legal"],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 5,
    title: "Summarize Q4 strategy",
    mails:"john@email.com",
    lastUpdate:"Apr 10, 2024 11:45 AM",
    interface:"Apex Chat",
    engineType:"OpenAI Codex",
    context:"repo/filepath.py",
    sessionId:"123456",
    active:"Active",
    topics:["Code","Security"],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 6,
    title: "Hi, how are you?",
    mails:"john@email.com",
    lastUpdate:"Aug 12, 2023 10:46 AM",
    interface:"Apex API",
    engineType:"OpenAI GPT3.5",
    context:"repo/filepath.py",
    sessionId:"123456",
    active:"Active",
    topics:["Data analysis"],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 7,
    title: "Script analysis",
    mails:"ben@email.com",
    lastUpdate:"Aug 12, 2023 10:46 AM",
    interface:"Apex Chat",
    engineType:"OpenAI GPT4",
    context:"repo/filepath.py",
    sessionId:"123456",
    active:"Active",
    topics:["Code","Security"],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 8,
    title: "Insights from file",
    mails:"rita@email.com",
    lastUpdate:"Aug 12, 2023 10:46 AM",
    interface:"365 Copilot",
    engineType:"365 Copilot",
    context:"repo/filepath.py",
    sessionId:"123456",
    active:"Active",
    topics:["Contracts & Agreements","Legal"],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 9,
    title: "What does this API call do",
    mails:"sarah@email.com",
    lastUpdate:"Aug 12, 2023 10:46 AM",
    interface:"Apex Chat",
    engineType:"Claude",
    context:"repo/filepath.py",
    sessionId:"123456",
    active:"Active",
    topics:["Code","Security"],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 10,
    title: "Write a contract",
    mails:"li@email.com",
    lastUpdate:"Aug 12, 2023 10:46 AM",
    interface:"Glean",
    engineType:"Glean",
    context:"repo/filepath.py",
    sessionId:"123456",
    active:"Active",
    topics:["Code","Security", "Contracts & Agreements"],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 11,
    title: "Script analysis",
    mails:"ben@email.com",
    lastUpdate:"Aug 12, 2023 10:46 AM",
    interface:"Apex Chat",
    engineType:"OpenAI GPT4",
    context:"repo/filepath.py",
    sessionId:"123456",
    active:"Active",
    topics:["Code","Security"],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 12,
    title: "Script analysis",
    mails:"ben@email.com",
    lastUpdate:"Aug 12, 2023 10:46 AM",
    interface:"Apex Chat",
    engineType:"OpenAI GPT4",
    context:"repo/filepath.py",
    sessionId:"123456",
    active:"Active",
    topics:["Code","Security"],

    violation: "6",
    violationCat: "OpenAI",
  },
];



export const SEVERITY = [
  {
    id: 1,
    label: "User department",
  },
  {
    id: 2,
    label: "Option 2",
  },
  {
    id: 3,
    label: "Option 3",
  },
  {
    id: 4,
    label: "Option 4",
  },
];

export const EQUALS = [
  {
    id: 1,
    label: "Equals",
  },
  {
    id: 2,
    label: "Does not equal",
  },
  {
    id: 3,
    label: "Contains",
  },
  {
    id: 4,
    label: "Does not contain",
  },
];