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
    policyName : 'Github Copilot Policy',
    policyDesc : "This policy is intended to protect our code when using GitHub Copilot, and detect when the conversation topics with GitHub Copilot Chat arn’t aligned with code.",
    longDesc:[
      {
        desc:"This policy is intended to protect our code when using GitHub Copilot, and detect when the conversation topics with GitHub Copilot Chat arn’t aligned with code."
      },
      {
        desc: "By implementing this policy, we aim to enhance our code quality and safeguard our development processes using AI.Groups:"
      }
    ],
    groups:{
      title:'Groups',
      groupName:[{
        name1:"R&D"
      },
      {
        name1:"Data Science"
      }]
    },
    count:"195",
    highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
    mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
    lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
  },
  {
    id:2,
    policyName : 'Marketing and strategy policy',
    policyDesc : "This policy is intended to protect our organization from data leakage in terms of our marketing secrets, future strategies, and customer data.",
    longDesc:[
      {
        desc:"This policy is intended to protect our organization from data leakage in terms of our marketing secrets, future strategies, and customer data."
      },
      {
        desc: "By implementing this policy, we will prevent Potential risks include the unintentional disclosure of proprietary marketing strategies or future plans, leakage of customer data leading to potential breaches of privacy and trust, competitive disadvantage due to exposure of strategic information, and damage to brand reputation and loss of customer confidence."
      }
    ],
    groups:{
      title:'Groups',
      groupName:[{
        name1:"Marketing",
      },
    {name1:"Strategy"}]
    },
    count:"195",
    highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
    mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
    lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
  },
  {
    id:3,
    policyName : 'Files & Microsoft Copilot protection',
    policyDesc : "This policy is intended to protect the organization from sharing sensitive information with public models. It will monitor interactions involving file sharing and the use of Microsoft Copilot to ensure that sensitive information is not inadvertently disclosed.",
    longDesc:[
      {
        desc:"This policy is intended to protect the organization from sharing sensitive information with public models. It will monitor interactions involving file sharing and the use of Microsoft Copilot to ensure that sensitive information is not inadvertently disclosed."
      },
      {
        desc: "You will be able to monitor these interactions and notifications via the Apex security platform, providing comprehensive oversight and protection."
      },
      {
        desc: "Potential risks include the unintentional disclosure of sensitive documents, exposure of proprietary information to unauthorized entities, and the risk of confidential data being shared with external models. By implementing this policy, we aim to safeguard our organization's sensitive information and maintain data integrity."
      }
    ],
    groups:{
      title:'Groups',
      groupName:[{
        name1:"Marketing"
      },{name1:"Strategy"}]
    },
    count:"100",
    highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
    mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
    lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
  },
  {
    id:4,
    policyName : 'API Protection',
    policyDesc : "This policy is intended to protect internal applications from prompt injection, jailbreaking, and other malicious activities that could compromise the security and integrity of our systems. It will monitor API interactions to ensure they are secure and compliant with organizational standards.",
    longDesc:[
      {
        desc:"This policy is intended to protect internal applications from prompt injection, jailbreaking, and other malicious activities that could compromise the security and integrity of our systems. It will monitor API interactions to ensure they are secure and compliant with organizational standards."
      },
      {
        desc: "You will be able to monitor these interactions and notifications via the Apex security platform, ensuring proactive protection against potential threats."
      }
    ],
    groups:{
      title:'Groups',
      groupName:[{
        name1:"List"
      }]
    },
    count:"200",
    highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
    mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
    lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
  },
  {
    id:5,
    policyName : 'Sensitive Topics',
    policyDesc : "This policy is intended to protect the Executive team from discussing sensitive topics that could lead to data leakage or other security risks. It will monitor conversations to ensure that sensitive topics are not inadvertently discussed in insecure or inappropriate contexts.",
    longDesc:[
      {
        desc:"This policy is intended to protect the Executive team from discussing sensitive topics that could lead to data leakage or other security risks. It will monitor conversations to ensure that sensitive topics are not inadvertently discussed in insecure or inappropriate contexts."
      },
      {
        desc: "Your users will be notified when they engage in conversations that involve sensitive topics, ensuring that they are aware of potential risks. You will be able to monitor these interactions and notifications via the Apex security platform, providing comprehensive oversight of executive communications."
      },
      {
        desc: "Potential risks include the unintentional disclosure of confidential company strategies, exposure of sensitive financial information, and the risk of leaking proprietary business decisions. By implementing this policy, we aim to safeguard the confidentiality and integrity of our executive communications."
      }
    ],
    groups:{
      title:'Groups',
      groupName:[{
        name1:"Executives Team"
      }]
    },
    count:"150",
    highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
    mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
    lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
  },
  {
    id:6,
    policyName : 'Remote code execution',
    policyDesc : "This policy is intended to protect our organization from risks associated with remote code execution, particularly those initiated or facilitated by AI systems. It will monitor activities to prevent unauthorized or malicious code from being executed remotely, which could compromise the security and integrity of our systems.",
    longDesc:[
      {
        desc:"This policy is intended to protect our organization from risks associated with remote code execution, particularly those initiated or facilitated by AI systems. It will monitor activities to prevent unauthorized or malicious code from being executed remotely, which could compromise the security and integrity of our systems."
      },
      {
        desc: "Your users' sessions will be blocked when they engage in activities that pose a risk of remote code execution through AI systems, ensuring immediate protection against potential threats. You will be able to monitor these interactions and session blocks via the Apex security platform, ensuring proactive protection against potential AI-related vulnerabilities."
      },
      {
        desc: "Potential risks include unauthorized access to critical systems by AI-powered attacks, execution of malicious code by AI systems leading to data breaches, and potential operational disruptions caused by compromised AI interactions. By enforcing this policy, we aim to protect our organization from the dangers associated with AI-facilitated remote code execution and maintain the security of our digital infrastructure."
      }
    ],
    groups:{
      title:'Groups',
      groupName:[{
        name1:"Api costumers"
      },{
        name1:"Services accounts"
      }]
    },
    count:"150",
    highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
    mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
    lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
  },
  {
    id:7,
    policyName : 'Data Leakage',
    policyDesc : "This policy is intended to prevent Data Leakage attacks on our engines. It will monitor interactions to ensure that sensitive data is not inadvertently disclosed or extracted by malicious actors using AI systems.",
    longDesc:[
      {
        desc:"This policy is intended to prevent Data Leakage attacks on our engines. It will monitor interactions to ensure that sensitive data is not inadvertently disclosed or extracted by malicious actors using AI systems."
      },
      {
        desc: "Your users will be notified when they engage in activities that pose a risk of data leakage, ensuring that they are aware of potential threats, such as unauthorized access to sensitive data, exposure of confidential information through AI-driven queries, and the extraction of proprietary data by malicious AI models. You will be able to monitor these interactions and notifications via the Apex security platform, providing comprehensive oversight and proactive protection against data leakage attempts."
      },
      {
        desc: "By implementing this policy, we aim to safeguard our data integrity and protect against AI-facilitated data leakage attacks."
      }
    ],
    groups:{
      title:'Groups',
      groupName:[{
        name1:"Marketing"
      },{
        name1:"Strategy"
      }]
    },
    count:"150",
    highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
    mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
    lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
  },
  {
    id:8,
    policyName : 'GDPR Policy',
    policyDesc : "This policy is created to ensure compliance with the General Data Protection Regulation (GDPR). It will monitor interactions and activities to ensure that personal data is handled in accordance with GDPR standards and promptly address any potential violations.",
    longDesc:[
      {
        desc:"This policy is created to ensure compliance with the General Data Protection Regulation (GDPR). It will monitor interactions and activities to ensure that personal data is handled in accordance with GDPR standards and promptly address any potential violations."
      },
      {
        desc: "The security admin will be notified via Slack when activities that pose a risk of non-compliance with GDPR are detected. This includes improper handling of personal data, failure to obtain proper consent, and breaches of data protection principles. By providing these notifications, we aim to ensure that users are aware of potential GDPR issues and can take corrective action."
      },
      {
        desc: "Potential risks include exposure of personal data without consent, non-compliance with data subject rights (such as the right to access and the right to be forgotten), and unauthorized data transfers outside the EU/EEA. You will be able to monitor these interactions and notifications via the Apex security platform, providing comprehensive oversight of GDPR-related activities."
      },
      {
        desc: "By implementing this policy, we aim to safeguard personal data and ensure full compliance with GDPR regulatory standards."
      }
    ],
    groups:{
      title:'Groups',
    },
    count:"150",
    highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
    mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
    lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
  },
  {
    id:9,
    policyName : 'Notify Sexual, Violence and Harmful content',
    policyDesc : "This policy is intended to protect the Executive team from discussing sensitive topics that could lead to data leakage or other security risks, especially in interactions with AI systems. It will monitor conversations to ensure that sensitive topics are not inadvertently discussed in insecure or inappropriate contexts, particularly when interacting with AI-powered tools and platforms.",
    longDesc:[
      {
        desc:"This policy is intended to protect the Executive team from discussing sensitive topics that could lead to data leakage or other security risks, especially in interactions with AI systems. It will monitor conversations to ensure that sensitive topics are not inadvertently discussed in insecure or inappropriate contexts, particularly when interacting with AI-powered tools and platforms."
      },
      {
        desc: "Your users will be notified when they engage in conversations that involve sensitive topics, ensuring that they are aware of potential AI-related risks. You will be able to monitor these interactions and notifications via the Apex security platform, providing comprehensive oversight of executive communications."
      },
      {
        desc: "Potential risks include the unintentional disclosure of confidential company strategies, exposure of sensitive financial information, and the risk of leaking proprietary business decisions to AI systems that may not be secure. By implementing this policy, we aim to safeguard the confidentiality and integrity of our executive communications against AI-related threats."
      }
    ],
    groups:{
      title:'Groups',
      groupName:[{
        name1:"Api costumers"
      }]
    },
    count:"150",
    highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
    mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
    lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
  },
  {
    id:10,
    policyName : 'AI-BOM policy',
    policyDesc : "This policy is intended to protect our organization from risks associated with remote code execution, particularly those initiated or facilitated by AI systems. It will monitor activities to prevent unauthorized or malicious code from being executed remotely, which could compromise the security and integrity of our systems.",
    longDesc:[
      {
        desc:"This policy is intended to detect when a sensitive or strategy-related file is being written by an AI engine, or when an important strategic decision is made with the help of an AI model. It will monitor AI interactions to ensure that critical company decisions and sensitive documents are handled appropriately."
      },
      {
        desc: "If more than 10% of a sensitive document is written by an AI engine, the user's session will be blocked to prevent potential risks. These risks include the inadvertent disclosure of sensitive information through AI-generated documents, the reliance on AI for strategic decisions without proper oversight, and the potential manipulation of AI models to influence company strategy."
      },
      {
        desc: "You will be able to monitor these activities and session blocks via the Apex security platform, providing comprehensive oversight of AI-assisted decision-making processes. By enforcing this policy, we aim to protect the integrity and confidentiality of our strategic operations and sensitive documents."
      }
    ],
    groups:{
      title:'Groups',
      groupName:[{
        name1:"Finance"
      },{
        name1:"Strategy"
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

