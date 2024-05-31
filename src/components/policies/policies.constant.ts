import { CustomSwitch } from "@/common/components/custom-switch/custom-switch.component";
import  ActionDropdown  from "../create-policy/component/action-dropdown/actionDropdown.component";
import AssetsDropdown from "../create-policy/component/assets-dropdown/assets-dropdown";
import Severity from "../create-policy/component/severityLevel/severty.component";
import AddWord from "../create-policy/component/addWord/addWord.component";


export const POLICIES_ACCORDION_DATA = [
  {
    id: 1,
    value: "PII",
    switch: CustomSwitch,
    action: ActionDropdown,
    headerEngines:'Liron_Azure',
    headerAssets:'File',
    headerSeverityevel:"Medium",
    policiesData: [
      {
        id: 1,
        policyName: "Email",
        type: "Block",
        engine: "Liron_Azure",
        assets:"File",
        integration:'None',
        severityLevel: "Medium",
      },
      {
        id: 2,
        policyName: "SSN",
        type: "Redact",
        engine: "Liron_Azure",
        assets:"File",
        integration:'Snyk',
        severityLevel: "Medium",
        
      }
    ],
  },
  {
    id: 2,
    value: "Access Data",
    switch: CustomSwitch,
    action: "Notify",
    headerEngines:ActionDropdown,
    headerAssets:ActionDropdown,
    headerSeverityevel:ActionDropdown,
    policiesData: [
      {
        id: 1,
        policyName: "Microsoft webhook",
        type: "Notify",
        engine: "A",
        assets:["Message"],
        integration:'None',
        severityLevel: "Low",
      },
      {
        id: 2,
        policyName: "SSN",
        type: "Notify",
        engine: "Liron_Azure",
        assets:["File" , "Message"],
        integration:'None',
        severityLevel: "High",
        
      }
    ],
  },
  {
    id: 3,
    value: "PCI",
    switch: CustomSwitch,
    action: ActionDropdown,
    policiesData: [
      {
        id: 1,
        policyName: "Microsoft webhook",
        type: "Notify",
        engine: "A",
        assets:["Message"],
        integration:'None',
        severityLevel: "High",
      },
      {
        id: 2,
        policyName: "SSN",
        type: "Notify",
        engine: "Liron_Azure",
        assets:["Message"],
        integration:'None',
        severityLevel: "High",
        
      }
    ],
  },
  {
    id: 4,
    value: "Custom policies",
    switch: CustomSwitch,
    action: ActionDropdown,
    policiesData: [
      {
        id: 1,
        policyName: "Suspicious Prompt",
        type: "Alert",
        engine: "Azure Marketing",
        severityLevel: "High",
        status: "",
        description: ["This policy is intended to mitigate"],
        usedBy: [
          {
            title: "SSO Group: Untitled - All",
          },
        ],
        count : "219",
        highData: [14, 5, 5, 0, 16, 6, 6, 0, 10, 8, 4, 0], //red
        mediumData: [5, 3, 3, 18, 5, 3, 3, 9, 5, 3, 3, 10], //orange
        lowData: [5, 8, 10, 5, 5, 8, 12, 12, 5, 5, 7, 6], //green
      },
      {
        id: 2,
        policyName: "Suspicious Response",
        type: "Alert",
        engine: "Azure R&D",
        severityLevel: "Critical",
        status: "",
        description: ["This policy is intended to mitigate"],
        usedBy: [
          {
            title: "SSO Group: Untitled - All",
          },
        ],
        count : "193",
        highData: [12, 6, 6, 0, 0, 5, 3, 0, 5, 5, 8, 0], //red
        mediumData: [5, 3, 8, 10, 6, 3, 4, 7, 2, 2, 6, 6], //orange
        lowData: [5, 5, 5, 6, 8, 8, 6, 7, 6, 5, 6, 6], //green
      },
      {
        id: 3,
        policyName: "Known Prompt Injections",
        type: "Alert",
        engine: "All",
        severityLevel: "Critical",
        status: "",
        description: ["This policy is intended to mitigate"],
        usedBy: [
          {
            title: "SSO Group: Untitled - All",
          },
        ],
        highData: [12, 6, 6, 0, 0, 5, 3, 0, 5, 5, 8, 0], //red
        mediumData: [5, 3, 8, 10, 6, 3, 4, 7, 2, 2, 6, 6], //orange
        lowData: [5, 5, 5, 6, 8, 8, 6, 7, 6, 5, 6, 6], //green
      },
      {
        id: 4,
        policyName: "Model Theft",
        type: "Alert",
        engine: "All",
        severityLevel: "Critical",
        status: "",
        description: ["This policy is intended to mitigate"],
        usedBy: [
          {
            title: "SSO Group: Untitled - All",
          },
        ],
        highData: [12, 6, 6, 0, 0, 5, 3, 0, 5, 5, 8, 0], //red
        mediumData: [5, 3, 8, 10, 6, 3, 4, 7, 2, 2, 6, 6], //orange
        lowData: [5, 5, 5, 6, 8, 8, 6, 7, 6, 5, 6, 6], //green
      },
    ],
  },
];

export const POLICIES_ACCESS_USAGE_DATA = [
  {
    id: 1,
    policyName: "Anna Smith Access to LLM",
    category: "Restrict",
    type: "Restrict",
    engine: "AzureOpenAI general",
    severityLevel: "Critical",
    status: "New",
    description: [
      "This policy is intended to mitigate unauthorized and unauthenticated access to your LLMs.",
      "It currently restricts users from accessing ApexChat without authenticating through your company’s SSO.",
    ],
    usedBy: [
      {
        title: "Anna Smith",
      },
    ],
    count:"195",
    highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
    mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
    lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
  },
  {
    id: 2,
    policyName: "Access without Company’s SSO",
    category: "Restrict",
    engine: "Azure Marketing",
    type: "Restrict",
    severityLevel: "Critical",
    status: "",
    description: [
      "This policy is intended to mitigate unauthorized and unauthenticated access to your LLMs.",
      "It currently restricts users from accessing ApexChat without authenticating through your company’s SSO.",
    ],
    count:"195",
    usedBy: [
      {
        title: "SSO Group: Untitled - All",
      },
    ],
    highData: [5, 6, 10, 10, 0, 5, 5, 0, 5, 5, 5, 0], //red
    mediumData: [4, 4, 5, 5, 14, 3, 3, 12, 4, 3, 3, 8], //orange
    lowData: [10, 8, 5, 5, 4, 7, 6, 5, 4, 6, 8, 8], //green
  },
  {
    id: 3,
    policyName: "Indivisual usage limit",
    category: "Restrict",
    engine: "Azure Marketing",
    severityLevel: "Critical",
    type: "Restrict",
    status: "",
    description: [
      "This policy is intended to mitigate unauthorized and unauthenticated access to your LLMs.",
      "It currently restricts users from accessing ApexChat without authenticating through your company’s SSO.",
    ],
    count:"168",
    usedBy: [
      {
        title: "SSO Group: Untitled - dev department ",
      },
      {
        title: "Untitled - marketing department",
      },
    ],
    highData: [6, 10, 6, 6, 0, 6, 0, 0, 10, 6, 6, 0], //red
    mediumData: [4, 8, 4, 4, 12, 3, 15, 6, 6, 8, 4, 0], //orange
    lowData: [10, 6, 10, 10, 8, 0, 5, 8, 6, 0, 0, 14], //green
  },
  {
    id: 4,
    policyName: "Engine Public Access",
    category: "Restrict",
    engine: "Azure Marketing",
    severityLevel: "Medium",
    type: "Restrict",
    status: "",
    description: [
      "This policy is intended to mitigate unauthorized and unauthenticated access to your LLMs.",
      "It currently restricts users from accessing ApexChat without authenticating through your company’s SSO.",
    ],
    count:"185",
    usedBy: [
      {
        title: "SSO Group name",
      },
    ],
    highData: [12, 5, 5, 0, 14, 5, 5, 0, 9, 5, 5, 0], //red
    mediumData: [7, 3, 3, 14, 5, 3, 3, 9, 6, 3, 3, 14], //orange
    lowData: [7, 6, 9, 6, 5, 8, 10, 9, 4, 7, 9, 5], //green
  },
];

export const POLICIES_LISTENING = [
  {
    id:1,
    policyName : 'Policy name is here',
    policyDesc : "This is the description of the policy",
    longDesc: "This is the description of the policy lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et This is the description of the policy lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et ",
    groups:{
      title:'Groups',
      groupName:[{
        name1:"Group name 1"
      },
      {
        name1:"Group name 2"
      }]
    },
    count:"195",
    highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
    mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
    lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
  },
  {
    id:2,
    policyName : 'Policy 2',
    policyDesc : "This is the longest description of the policy you can right a lot but you will see o...",
    longDesc: "This is the description of the policy lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et This is the description of the policy lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et ",
    groups:{
      title:'Groups',
      groupName:[{
        name1:"Group name 1",
      },
    {name1:"Group name 2"}]
    },
    count:"195",
    highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
    mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
    lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
  },
  {
    id:3,
    policyName : 'Policy 3',
    policyDesc : "This is the description of the policy",
    longDesc: "This is the description of the policy lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et This is the description of the policy lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et ",
    groups:{
      title:'Groups',
      groupName:[{
        name1:"Group name 1"
      }]
    },
    count:"100",
    highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
    mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
    lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
  },
  {
    id:4,
    policyName : 'Policy 4',
    policyDesc : "This is the description of the policy",
    longDesc: "This is the description of the policy lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et This is the description of the policy lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et ",
    groups:{
      title:'Groups',
      groupName:[{
        name1:"Group name 1"
      },
      {
        name1:"Group name 2"
      }]
    },
    count:"200",
    highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
    mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
    lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
  },
  {
    id:5,
    policyName : 'New policy name is here and can be long if we want',
    policyDesc : "This is the description of the policy",
    longDesc: "This is the description of the policy lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et This is the description of the policy lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et ",
    groups:{
      title:'Groups',
      groupName:[{
        name1:"Group name 1"
      },
      {
        name1:"Group name 2"
      },
      {
        name1:"Group name 3"
      }]
    },
    count:"150",
    highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
    mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
    lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
  }
]



function createData(
  name: any,
  calories: any,
  fat: any,
  carbs: any,
  protein: any,
  price: any,
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}


export const Rows = [
  {
    type: 'PII',
    component: CustomSwitch,
    action: ActionDropdown,
    engines: "Liron_Azure",
    headerAssets: "File",
    integration:ActionDropdown,
    headerSeverityevel:"Medium",
    policiesData: [
      {
        id: 1,
        component: CustomSwitch,
        policyName: "Email",
        type: "Block",
        engine: "Liron_Azure",
        assets:"File",
        integration:'None',
        severityLevel: "Medium",
      },
      {
        id: 2,
        component: CustomSwitch,
        policyName: "SSN",
        type: "Redact",
        engine: "Liron_Azure",
        assets:"File",
        integration:'Snyk',
        severityLevel: "Medium",
        
      }
    ],
  },
  {
    type: 'Access Data',
    component: CustomSwitch,
    action: "Notify",
    engines: ActionDropdown,
    headerAssets: AssetsDropdown,
    integration:ActionDropdown,
    headerSeverityevel: Severity,
    policiesData: [
      {
        id: 1,
        component: CustomSwitch,
        policyName: "Microsoft webhook",
        type: "Notify",
        engine: "A",
        assets:"File",
        integration:'None',
        severityLevel: "Low",
      },
      {
        id: 2,
        component: CustomSwitch,
        policyName: "SSN",
        type: "Notify",
        engine: "Liron_Azure",
        assets:"Message",
        integration:'None',
        severityLevel: "High",
        
      }
    ],
  },
  {
    type: 'PCI',
    component: CustomSwitch,
    action: ActionDropdown,
    engines: "Liron_Azure",
    headerAssets: "Message",
    integration:ActionDropdown,
    headerSeverityevel:"Medium",
    policiesData: [
      {
        id: 1,
        component: CustomSwitch,
        policyName: "Microsoft webhook",
        type: "Notify",
        engine: "A",
        assets:"File",
        integration:'None',
        severityLevel: "High",
      },
      {
        id: 2,
        component: CustomSwitch,
        policyName: "SSN",
        type: "Notify",
        engine: "Liron_Azure",
        assets:"File",
        integration:'None',
        severityLevel: "High",
        
      }
    ],
  },
  {
    type: 'Custom Policies',
    component: CustomSwitch,
    action: ActionDropdown,
    engines: "Liron_Azure",
    headerAssets: "Message",
    integration:ActionDropdown,
    headerSeverityevel:"Medium",
    policiesData: [
      {
        id: 1,
        component: CustomSwitch,
        policyName: "Inner domains",
        keyWord:AddWord,
        type: "Notify",
        engine: "Liron_Azure",
        assets:"Message",
        integration:'None',
        severityLevel: "Low",
        
      },
      {
        id: 2,
        component: CustomSwitch,
        policyName: "custom words",
        keyWord:AddWord,
        type: "Notify",
        engine: "Liron_Azure",
        assets:"Message",
        integration:'None',
        severityLevel: "High",
      }
    ],
  }
];

