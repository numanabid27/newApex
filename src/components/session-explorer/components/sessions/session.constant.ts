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
  xAxis: {
    type: "category",
    boundaryGap: false,
    show: true,
    data: Array.from({ length: 30 }, (_, i) => i + 1),
    axisLabel: {
      formatter: function (value:any) {
        const visibleLabels = [1, 4, 8, 12, 16, 20, 24, 28];
        return visibleLabels.includes(Number(value)) ? value : '';
      },
    },
    axisLine: {
      show: false,
    },
    splitLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
  },
  yAxis: {
    type: "value",
    axisLabel: {
      show: false,
    },
  },
  series: [
    {
      data: [
        1, 1.5, 1.5, 1.5, 1.5, 4, 5, 3, 2, 1.5, 1.5, 1.5, 7, 3, 2, 1.5, 1.5, 2, 2, 4, 8, 6, 4, 3,
        2, 1, 2, 2, 2.2, 2.5,
      ],
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
      type: "line",
      step: false,
      smooth: false,
      showSymbol: false,
    },
  ],
};



export const SESSION_EXPLORE_DATA = [
  {
    id: 1,
    title: "Is fifa good for my husband?",
    mails: "uesr@email.com",
    lastUpdate: "Aug 12, 2023 10:46 AM",
    interface: "Github Copilot",
    engineType: "OpenAI Codex",
    context: "repo/filepath.py",
    sessionId: "123456",
    active: "Active",
    topics: ["Marketing content", "drug", "cancer", "Pfizer"],

    violation: "12",
    violationCat: "ChatGPT",
    prompt: [
      {
        id: 1,
        time: "15:41:03 Sunday 25 March 2024",
      },
      {},
    ],
  },
  {
    id: 2,
    title: "Is fifa good for my husband?",
    mails: "uesr@email.com",
    lastUpdate: "Aug 12, 2023 10:46 AM",
    interface: "Github Copilot",
    engineType: "OpenAI Codex",
    context: "repo/filepath.py",
    sessionId: "123456",
    active: "Active",
    topics: ["Marketing content", "drug", "cancer", "Pfizer"],

    violation: "8",
    violationCat: "Bard",
  },
  {
    id: 3,
    title: "Is fifa good for my husband?",
    mails: "uesr@email.com",
    lastUpdate: "Aug 12, 2023 10:46 AM",
    interface: "Github Copilot",
    engineType: "OpenAI Codex",
    context: "repo/filepath.py",
    sessionId: "123456",
    active: "Active",
    topics: ["Marketing content", "drug", "cancer", "Pfizer"],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 4,
    title: "Is fifa good for my husband?",
    mails: "uesr@email.com",
    lastUpdate: "Aug 12, 2023 10:46 AM",
    interface: "Github Copilot",
    engineType: "OpenAI Codex",
    context: "repo/filepath.py",
    sessionId: "123456",
    active: "Active",
    topics: ["Marketing content", "drug", "cancer", "Pfizer"],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 5,
    title: "Is fifa good for my husband?",
    mails: "uesr@email.com",
    lastUpdate: "Aug 12, 2023 10:46 AM",
    interface: "Github Copilot",
    engineType: "OpenAI Codex",
    context: "repo/filepath.py",
    sessionId: "123456",
    active: "Active",
    topics: ["Marketing content", "drug", "cancer", "Pfizer"],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 6,
    title: "Is fifa good for my husband?",
    mails: "uesr@email.com",
    lastUpdate: "Aug 12, 2023 10:46 AM",
    interface: "Github Copilot",
    engineType: "OpenAI Codex",
    context: "repo/filepath.py",
    sessionId: "123456",
    active: "Active",
    topics: ["Marketing content", "drug", "cancer", "Pfizer"],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 7,
    title: "Is fifa good for my husband?",
    mails: "uesr@email.com",
    lastUpdate: "Aug 12, 2023 10:46 AM",
    interface: "Github Copilot",
    engineType: "OpenAI Codex",
    context: "repo/filepath.py",
    sessionId: "123456",
    active: "Active",
    topics: ["Marketing content", "drug", "cancer", "Pfizer"],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 8,
    title: "Is fifa good for my husband?",
    mails: "uesr@email.com",
    lastUpdate: "Aug 12, 2023 10:46 AM",
    interface: "Github Copilot",
    engineType: "OpenAI Codex",
    context: "repo/filepath.py",
    sessionId: "123456",
    active: "Active",
    topics: ["Marketing content", "drug", "cancer", "Pfizer"],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 9,
    title: "Is fifa good for my husband?",
    mails: "uesr@email.com",
    lastUpdate: "Aug 12, 2023 10:46 AM",
    interface: "Github Copilot",
    engineType: "OpenAI Codex",
    context: "repo/filepath.py",
    sessionId: "123456",
    active: "Active",
    topics: ["Marketing content", "drug", "cancer", "Pfizer"],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 10,
    title: "Is fifa good for my husband?",
    mails: "uesr@email.com",
    lastUpdate: "Aug 12, 2023 10:46 AM",
    interface: "Github Copilot",
    engineType: "OpenAI Codex",
    context: "repo/filepath.py",
    sessionId: "123456",
    active: "Active",
    topics: ["Marketing content", "drug", "cancer", "Pfizer"],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 11,
    title: "Is fifa good for my husband?",
    mails: "uesr@email.com",
    lastUpdate: "Aug 12, 2023 10:46 AM",
    interface: "Github Copilot",
    engineType: "OpenAI Codex",
    context: "repo/filepath.py",
    sessionId: "123456",
    active: "Active",
    topics: ["Marketing content", "drug", "cancer", "Pfizer"],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 12,
    title: "Is fifa good for my husband?",
    mails: "uesr@email.com",
    lastUpdate: "Aug 12, 2023 10:46 AM",
    interface: "Github Copilot",
    engineType: "OpenAI Codex",
    context: "repo/filepath.py",
    sessionId: "123456",
    active: "Active",
    topics: ["Marketing content", "drug", "cancer", "Pfizer"],

    violation: "6",
    violationCat: "OpenAI",
  },
];
