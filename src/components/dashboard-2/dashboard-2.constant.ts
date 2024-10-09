import * as echarts from "echarts";
import shieldMinus from '@/common/assets/images/shield-minus-green.svg';
import gpt from '@/common/assets/images/gpt.svg';
import azure from '@/common/assets/images/azure.svg';
import gptenterprise from '@/common/assets/images/gptenterprise.svg';
import github from '@/common/assets/images/github.svg';
import mscopilot from '@/common/assets/images/microsoft.svg';
import gemini from '@/common/assets/images/gemini.svg';
import hugingface from '@/common/assets/images/hugingface.svg';


const USER_1 = {
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
            formatter: function (value: any) {
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

const USER_2 = {
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
                formatter: function (value: any) {
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

const USER_3 = {
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
                formatter: function (value: any) {
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
                3, 2, 2, 1.5, 1.5, 2, 3.7, 3.7, 1.5, 1.5, 1.5, 2, 3, 2.5, 2.5, 2.5, 2, 1.5, 1.5, 1.5
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

export const TOP_OPEN_ISSUES = [
    {
        id: 1,
        title: "Anna Smith uploaded 43 files, including 3 related to HR and candidates data, and 36 pieces of PII were redacted. ",
        value: "Critical",
        icon: shieldMinus,
    },
    {
        id: 2,
        title: "Potential Data Leakage Detected: Suspicious Prompt Injection in Azure OpenAI-Based Application",
        value: "Critical",
        icon: shieldMinus,
    },
    {
        id: 3,
        title: "Github Copilot collected and sent 3 API keys out of the organization",
        value: "High",
        icon: shieldMinus,
    },
    {
        id: 4,
        title: "Microsoft Copilot shared sensitive information about company’s finance with user from R&D",
        value: "High",
        icon: shieldMinus,
    },
    {
        id: 5,
        title: "61 alerts associated with Company’s AI Ethics Standards",
        value: "Medium",
        icon: shieldMinus,
    },
    {
        id: 6,
        title: "GitHub Copilot collected and suggested invisible text instructions in 6 code files",
        value: "Critical",
        icon: shieldMinus,
    },
];
export const RISKY_USERS_CHARTS = [
    {
        id: 1,
        title: "John doe",
        value: "High",
        chart: USER_1,
    },
    {
        id: 2,
        title: "James Patterson",
        value: "High",
        chart: USER_2,
    },
    {
        id: 3,
        title: "Emily Johnson",
        value: "High",
        chart: USER_1,
    },
    {
        id: 4,
        title: "Michael Thompson",
        value: "High",
        chart: USER_2,
    },
    {
        id: 5,
        title: "Jessica Miller",
        value: "High",
        chart: USER_3,
    },
    {
        id: 6,
        title: "Ashley Brown",
        value: "Medium",
        chart: USER_3,
    },
];

export const PRICE_CARDS = [
    {
        title: 'Messages',
        price: '2.4K',
        text: '+20.1% from last month'
    },
    {
        title: 'Users',
        price: '151',
        text: '+20.1% from last month'
    }
]

export const BARCHART_OPTIONS = {
    height: 219,
    dataset: {
        source: [
            ['score', 'amount', 'product'],
            [95.7, 41852, 'Cybersecurity'],
            [68.1, 79146, 'HR'],
            [19.6, 91852, 'Marketing'],
            [10.6, 101852, 'Legal'],
            [95.7, 122952, 'Finance']
        ]
    },
    grid: { containLabel: true },
    xAxis: {
        name: '',
        splitLine: {
            show: false,
        },
        axisLabel: { show: false },
        boundaryGap: true
    },
    yAxis: {
        type: 'category',
        splitLine: {
            show: false,
            lineStyle: {
                color: '#ccc'
            }
        },
        boundaryGap: true
    },
    visualMap: {
        show: false,
        orient: 'horizontal',
        left: 'center',
        min: 10,
        max: 100,
        dimension: 0,
        inRange: {
            color: ['#6CE9A6', '#32D583', '#12B76A', '#027A48', '#054F31']
        }
    },
    series: [
        {
            type: 'bar',
            encode: {
                x: 'amount',
                y: 'product'
            },
            barCategoryGap: '20%',
            itemStyle: {
                borderRadius: [0, 6, 6, 0]
            }
        }
    ]
};

export const ACTIVE_RULES_CHART = {
    height: 130,
    tooltip: {
        trigger: 'item'
    },
    legend: {
        show: false,
        top: '5%',
        left: 'center'
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: ['110%', '130%'],
            center: ['50%', '70%'],
            startAngle: 180,
            endAngle: 360,
            label: { show: false },
            data: [
                { value: 1048, name: 'Search Engine', itemStyle: { color: '#22C55D' } },
                { value: 735, name: 'Direct', itemStyle: { color: '#64758B' } }
            ]
        }
    ],
    graphic: {
        type: 'text',
        left: 'center',
        top: '25%',
        style: {
            text: '{a|123/150}\n{b|Active policies}',
            rich: {
                a: {
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: '#000'
                },
                b: {
                    fontSize: 12,
                    color: '#666'
                }
            },
            textAlign: 'center',
        }
    }
};

export const DISABLED_RULES_CONTENT = [
    {
        title: 'Access Data: Private Key (Sent from User)',
        button: 'Deactivated'
    },
    {
        title: 'Over reliance: Strategic decision making',
        button: 'Deactivated'
    },
    {
        title: 'AI threats: Jailbreak',
        button: 'Deactivated'
    },
]

export const TOOLS_CONTENT = [
    {
        text: 'OpenAI GPT-4',
        icon: azure
    },
    {
        text: 'OpenAI GPT-4',
        icon: gptenterprise
    },
    {
        text: 'OpenAI GPT-4',
        icon: github
    },
    {
        text: 'OpenAI GPT-4',
        icon: gpt
    },
    {
        text: 'OpenAI GPT-4',
        icon: mscopilot
    },
    {
        text: 'OpenAI GPT-4',
        icon: gemini
    },
    {
        text: 'OpenAI GPT-4',
        icon: gpt
    },
    {
        text: 'OpenAI GPT-4',
        icon: hugingface
    },
]
