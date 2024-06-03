import {
  USER_1,
  USER_2,
  USER_3,
} from "../sessions/session.constant";

export const SESSION_USER_DATA = [
    {
      id: 1,
      name: "John doe",
      violation: ["1 Critical", "2 High"],
      violationCat: "ChatGPT",
      mails: "john@email.com",
      department: "R&D",
      riskScore: "High",
      issues:["1 Critical", "2 High"],
      messages: "1832",
      sessions:"120",
      usage:""
    },
    {
      id: 2,
      name: "James Patterson",
      violation: ["1 Critical", "2 High"],
      violationCat: "Bard",
      mails: "james@email.com",
      department: "R&D",
      riskScore: "Medium",
      issues:["1 Critical", "2 High"],
      messages: "1521",
      sessions:"120",
      usage:""
    },
    {
      id: 3,
      name: "Emily Johnson",
      violation: ["1 Critical", "2 High"],
      violationCat: "OpenAI",
      mails: "emily@email.com",
      department: "HR",
      riskScore: "Low",
      issues:["1 Critical", "2 High"],
      messages: "499",
      sessions:"120",
      usage:""
    },
    {
      id: 4,
      name: "Michael Thompson",
      violation: ["1 Critical", "2 High"],
      violationCat: "OpenAI",
      mails: "michael@email.com",
      department: "IT",
      riskScore: "High",
      issues:["1 Critical", "2 High"],
      messages: "254",
      sessions:"104",
      usage:""
    },
    {
      id: 5,
      name: "Jessica Miller",
      violation: ["1 Critical", "2 High"],
      violationCat: "OpenAI",
      mails: "jesicca@email.com",
      department: "Operations",
      riskScore: "Medium",
      issues:["1 Critical", "2 High"],
      messages: "124",
      sessions:"94",
      usage:""
    },
    {
      id: 6,
      name: "Ashley Brown",
      violation: ["1 Critical", "2 High"],
      violationCat: "OpenAI",
      mails: "ashley@email.com",
      department: "R&D",
      riskScore: "Medium",
      issues:["1 Critical", "2 High"],
      messages: "90",
      sessions:"51",
      usage:""
    },
    {
      id: 7,
      name: "Christopher Davis",
      violation: ["1 Critical", "2 High"],
      violationCat: "OpenAI",
      mails: "chris@email.com",
      department: "HR",
      riskScore: "Low",
      issues:["1 Critical", "2 High"],
      messages: "17",
      sessions:"37",
      usage:""
    },
];



export const SESSION_GRAPH = [
  {
    id:1,
    title:"John White",
    value:'100',
    chart:USER_1,
  },
  {
    id:2,
    title:"George Mayer",
    value:'100',
    chart:USER_2,
  },
  {
    id:3,
    title:"Cindy Sherman",
    value:'100',
    chart:USER_1,
  },
  {
    id:4,
    title:"Barbara Kruger",
    value:'100',
    chart:USER_2,
  },
  {
    id:5,
    title:"Michael Black",
    value:'100',
    chart:USER_3,
  }
]