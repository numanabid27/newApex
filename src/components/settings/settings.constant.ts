import chatgpt from '@/common/assets/images/chatgpt.svg';
import github from '@/common/assets/images/github.svg';
import zoom from '@/common/assets/images/zoom.svg';
import ms365 from '@/common/assets/images/ms-365.svg';
import glean from '@/common/assets/images/glean.svg';
import azure from '@/common/assets/images/azure.svg';
import zscaler from '@/common/assets/images/zscaler.svg';
import falcon from '@/common/assets/images/falcon.svg';
import msxdr from '@/common/assets/images/msxdr.svg';
import paloAlto from '@/common/assets/images/palo-alto.svg';
import checkPoint from '@/common/assets/images/check-point.svg';
import teams from '@/common/assets/images/teams.svg';
import slack from '@/common/assets/images/slack2.svg';
import box from '@/common/assets/images/box.svg';
import drive from '@/common/assets/images/drive.svg';
import msSharepoint from '@/common/assets/images/ms-sharepoint.svg';
import azureAD from '@/common/assets/images/azure-ad.svg';
import okta from '@/common/assets/images/okta.svg';
import splunk from '@/common/assets/images/splunk.svg';
import ibm from '@/common/assets/images/ibm.svg';
import serviceNow from '@/common/assets/images/serviceNow.svg';
import snyk from '@/common/assets/images/snyk.svg';
import semgrep from '@/common/assets/images/semgrep.svg';
import codeQl from '@/common/assets/images/codeQl.svg';

export const TYPE = [
  {
    id: 1,
    label: "Type1",
  },
  {
    id: 2,
    label: "Type2",
  },
  {
    id: 3,
    label: "Type3",
  },
];

export const STATUS = [
  {
    id: 1,
    label: "online",
  },
  {
    id: 2,
    label: "offline",
  }
];

export const TabsButtons = [
  { text: "AI applications" },
  { text: "Network & Endpoint security" },
  { text: "Messaging" },
  { text: "File systems" },
  { text: "SSO" },
  { text: "SIEM & Ticketing" },
  { text: "Detection services" }
];

export const AI_APPLICATION_TAB = [
  { icon: chatgpt,
    title: 'ChatGPT',
    online: true,
    text: 'Analyze and detect findings in ChatGPT conversations, GPTs and files uploaded.'
  },
  { icon: github,
    title: 'GitHub Copilot',
    online: false,
    text: 'Integrate to get visibility, detection and prevention over GitHub Copilot'
  },
  { icon: zoom,
    title: 'Zoom AI',
    online: true,
    text: 'Analyze and detect findings in Zoom AI meeting summaries. '
  },
  { icon: ms365,
    title: 'Microsoft 365 Copilot',
    online: true,
    text: 'Integrate to secure AI-assisted workflows and detect risks in Microsoft 365 Copilot’s'
  },
  { icon: glean,
    title: 'Glean',
    online: false,
    text: 'Integrate to enhance data security and monitor AI-driven search and knowledge management across your organization with Glean.'
  },
  { icon: azure,
    title: 'Azure OpenAI',
    online: false,
    text: 'Integrate to ensure the security of AI models and data managed through Azure OpenAI, with visibility into potential risks and automated detection of anomalies.'
  }
];

export const NETWORK_AND_ENDPOINT_SECURITY_TAB = [
  { icon: zscaler,
    title: 'Zscaler',
    online: true,
    text: 'Connect using read-only API access to gain full visibility of GenAI usage.'
  },
  { icon: falcon,
    title: 'CrowdStrike Falcon',
    online: true,
    text: 'Identify shadow AI applications and IDE extensions by connecting to Falcon EDR.'
  },
  { icon: msxdr,
    title: 'Microsoft Defender XDR',
    online: true,
    text: 'Connect using read only API access to gain full visibility of 3rd party GenAI apps usage.'
  },
  { icon: paloAlto,
    title: 'Palo Alto Networks Cortex',
    online: true,
    text: 'Connect to Cortex XDR read-only API to gain full visibility of GenAI usage.'
  },
  { icon: checkPoint,
    title: 'Check Point',
    online: true,
    text: 'Connect using read only API access to gain full visibility of 3rd party GenAI apps usage.'
  },
];

export const MESSAGING_TAB = [
  { icon: slack,
    title: 'Slack',
    online: true,
    text: 'Receive Slack notifications on alerts and occasional reports by integrating with Slack'
  },
  { icon: teams,
    title: 'Teams',
    online: true,
    text: 'Receive Teams notifications on alerts and occasional reports by integrating with Microsoft Teams.'
  }
];

export const FILE_SYSTEMS_TAB = [
  { icon: box,
    title: 'Box',
    online: true,
    text: 'Integrate to Apex Portal and upload files directly to your chat conversations'
  },
  { icon: drive,
    title: 'Drive',
    online: true,
    text: 'Integrate to Apex Portal and upload files directly to your chat conversations'
  },
  { icon: msSharepoint,
    title: 'Microsoft Sharepoint',
    online: true,
    text: 'Integrate to Apex Portal and upload files directly to your chat conversations'
  }
];

export const SSO_TAB = [
  { icon: azureAD,
    title: 'Azure AD',
    online: true,
    text: 'Integrate to sync groups, enable SSO for seamless login to the Apex Portal, and monitor and report on risky users to enhance security and compliance.'
  },
  { icon: okta,
    title: 'Okta',
    online: true,
    text: ' Integrate to synchronize user groups, provide SSO access to the Apex Portal, and generate reports on potentially risky users to strengthen your security posture.'
  }
];

export const SIEM_AND_TICKETING_TAB = [
  { icon: azureAD,
    title: 'Microsoft Sentinel',
    online: true,
    text: 'Integrate to send all alerts and logging from Apex to Microsoft Sentinel, enabling automated workflows in SOAR and linking alerts to tickets in your ticketing systems.'
  },
  { icon: splunk,
    title: 'Splunk',
    online: true,
    text: 'Integrate to get visibility, detection and prevention over GitHub Copilot'
  },
  { icon: ibm,
    title: 'Qradar',
    online: true,
    text: 'Integrate to push all alerts and logging from Apex to IBM QRadar, enabling seamless automation in SOAR and ticket creation in your existing ticketing systems.'
  },
  { icon: okta,
    title: 'Exabeam',
    online: true,
    text: 'Integrate to secure AI-assisted workflows and detect risks in Microsoft 365 Copilot’s'
  },
  { icon: serviceNow,
    title: 'ServiceNow',
    online: true,
    text: 'Integrate to automatically route all alerts and logging from Apex into ServiceNow, creating tickets and enabling automated workflows for incident management and resolution.'
  },
  { icon: paloAlto,
    title: 'Palo Alto Networks XSOAR',
    online: false,
    text: 'Integrate to send all alerts and logging from Apex to Palo Alto Networks XSOAR, automating responses through SOAR workflows and linking to tickets in your ticketing systems.'
  }
];

export const DETECTION_SERVICES_TABS = [
  { icon: snyk,
    title: 'Snyk',
    online: true,
    text: 'Integrate with Snyk to enforce your existing code detection policies on AI code assistants, ensuring the security of open-source dependencies in your codebase by detecting and remediating vulnerabilities.'
  },
  { icon: semgrep,
    title: 'Semgrep',
    online: true,
    text: 'Integrate Semgrep to apply and enforce your established code detection policies on AI code assistants, utilizing AI-driven static analysis to detect vulnerabilities and maintain secure coding practices.'
  },
  { icon: codeQl,
    title: 'CodeQL',
    online: true,
    text: 'Integrate CodeQL to strengthen your code security by enforcing the code detection policies on AI code assistants, using AI-powered analysis to detect and prevent vulnerabilities in your codebase.'
  }
];
