import * as echarts from "echarts";


export const SESSION_EXPLORER_DATA = [
    {
      id: 1,
      name: "Written with Copilot",
      value: 45,
      color: "#7F56D9",
      percentage: "%",
    },
    {
      id: 2,
      name: "Written by dev",
      value: 55,
      color: "#53B1FD",
      percentage: "%",
    }
];

export const SESSION_EXPLORER_DATA2 = [
  {
    id: 1,
    name: "Written with Copilot",
    value: 65,
    color: "#7F56D9",
    percentage: "%",
  },
  {
    id: 2,
    name: "Written by dev",
    value: 35,
    color: "#FD853A",
    percentage: "%",
  }
];

export const AIBOOM_TABLE_DATA = [
  {
    id:1,
    folderName: "R",
    code: "85",
    voilation: [2, "violations"],
    comment: "21 hours",
    files:[
      {
        id:1,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'code.py',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'api.py',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'core.py',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'codefile.txt',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'new_code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'runandstop.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'txt.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'readme.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      }
    ]
  },
  {
    id:2,
    folderName: "Data",
    code: "23",
    voilation: [15, "violations"],
    comment: "25 sceonds ago",
    files:[
      {
        id:1,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'code.py',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'api.py',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'core.py',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'codefile.txt',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'new_code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'runandstop.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'txt.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'readme.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      }
    ]
  },
  {
    id:3,
    folderName: "doc",
    code: "18",
    voilation: [1, "violations"],
    comment: "25 sceonds ago",
    files:[
      {
        id:1,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'code.py',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'api.py',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'core.py',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'codefile.txt',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'new_code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'runandstop.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'txt.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'readme.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      }
    ]
  },
  {
    id:4,
    folderName: "ext",
    code: "22",
    voilation: [3, "violations"],
    comment: "25 sceonds ago",
    files:[
      {
        id:1,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'code.py',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'api.py',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'core.py',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'codefile.txt',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'new_code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'runandstop.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'txt.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'readme.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      }
    ]
  },
  {
    id:5,
    folderName: "output",
    code: "8",
    voilation: [22, "violations"],
    comment: "22 hours ago",
    files:[
      {
        id:1,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'code.py',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'api.py',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'core.py',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'codefile.txt',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'new_code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'runandstop.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'txt.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'readme.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      }
    ]
  },
  {
    id:6,
    folderName: "qa",
    code: "13",
    voilation: ["","No violations"],
    comment: "22 hours ago",
    files:[
      {
        id:1,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'code.py',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'api.py',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'core.py',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'codefile.txt',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'new_code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'runandstop.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'txt.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'readme.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      }
    ]
  },
  {
    id:7,
    folderName: "qa",
    code: "8",
    voilation: [15, "violations"],
    comment: "25 sceonds ago",
    files:[
      {
        id:1,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'code.py',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'api.py',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'core.py',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'codefile.txt',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'new_code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'runandstop.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'txt.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'readme.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      }
    ]
  },
  {
    id:8,
    folderName: "ext",
    code: "30",
    voilation: [1, "violations"],
    comment: "22 hours ago",
    files:[
      {
        id:1,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'code.py',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'api.py',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'core.py',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'codefile.txt',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'new_code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'runandstop.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'txt.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'readme.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      }
    ]
  },
  {
    id:9,
    folderName: "doc",
    code: "18",
    voilation: ["", "No violations"],
    comment: "25 sceonds ago",
    files:[
      {
        id:1,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'code.py',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'api.py',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'core.py',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'codefile.txt',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'new_code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'runandstop.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'txt.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'readme.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      }
    ]
  },
  {
    id:10,
    folderName: "output",
    code: "13",
    voilation: ["15", "Violations"],
    comment: "22 hours ago",
    files:[
      {
        id:1,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'code.py',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'api.py',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'core.py',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'codefile.txt',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'new_code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'runandstop.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'txt.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'readme.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      }
    ]
  },
  {
    id:11,
    folderName: "Data",
    code: "23",
    voilation: ["2", "Violations"],
    comment: "25 sceonds ago",
    files:[
      {
        id:1,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'code.py',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'api.py',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'core.py',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'codefile.txt',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'new_code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'runandstop.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'txt.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'readme.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      }
    ]
  },
  {
    id:12,
    folderName: "Data",
    code: "53",
    voilation: ["4", "Violations"],
    comment: "25 sceonds ago",
    files:[
      {
        id:1,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'code.py',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'api.py',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'core.py',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'codefile.txt',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'new_code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'runandstop.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'txt.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'readme.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      }
    ]
  }
]


export const AIBOOM_CHART = {
  height: 100,
  width: 450,
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
      data: [40, 82.1, 88.7, 70.1, 53.4, 85.1, 85.1,85.1],
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

export const TABS_DATA = [
  {
    id:1,
    indexes:0
  },
  {
    id:2,
    indexes:1
  },
  {
    id:3,
    indexes:2
  },
  {
    id:4,
    indexes:3
  }
]