import {
  USER_1,
  USER_2,
  USER_3,
} from "../sessions/session.constant";
import chart1 from "@/common/assets/images/11.png"
import chart2 from "@/common/assets/images/12.png"
import chart3 from "@/common/assets/images/13.png"

export const SESSION_USER_DATA = [
    {
      id: 1,
      name: "John Smith",
      violation: ["1 Critical", "2 High"],
      violationCat: "ChatGPT",
      mails: "john@email.com",
      department: "R&D",
      riskScore: "High",
      issues:["1 Critical", "2 High"],
      messages: "1832",
      sessions:"120",
      usage:chart1,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      violation: ["1 Critical", "2 High"],
      violationCat: "Bard",
      mails: "james@email.com",
      department: "R&D",
      riskScore: "Medium",
      issues:["1 Critical", "2 High"],
      messages: "1521",
      sessions:"120",
      usage:chart2,
    },
    {
      id: 3,
      name: "Michael Brown",
      violation: ["1 Critical", "2 High"],
      violationCat: "OpenAI",
      mails: "emily@email.com",
      department: "HR",
      riskScore: "Low",
      issues:["1 Critical", "2 High"],
      messages: "499",
      sessions:"120",
      usage:chart3,
    },
    {
      id: 4,
      name: "Emily Davis",
      violation: ["1 Critical", "2 High"],
      violationCat: "OpenAI",
      mails: "michael@email.com",
      department: "IT",
      riskScore: "High",
      issues:["1 Critical", "2 High"],
      messages: "254",
      sessions:"104",
      usage:chart1,
    },
    {
      id: 5,
      name: "David Wilson",
      violation: ["1 Critical", "2 High"],
      violationCat: "OpenAI",
      mails: "jesicca@email.com",
      department: "Operations",
      riskScore: "Medium",
      issues:["1 Critical", "2 High"],
      messages: "124",
      sessions:"94",
      usage:chart2,
    },
    {
      id: 6,
      name: "Jessica Garcia",
      violation: ["1 Critical", "2 High"],
      violationCat: "OpenAI",
      mails: "ashley@email.com",
      department: "R&D",
      riskScore: "Medium",
      issues:["1 Critical", "2 High"],
      messages: "90",
      sessions:"51",
      usage:chart1,
    },
    {
      id: 7,
      name: "Daniel Martinez",
      violation: ["1 Critical", "2 High"],
      violationCat: "OpenAI",
      mails: "chris@email.com",
      department: "HR",
      riskScore: "Low",
      issues:["1 Critical", "2 High"],
      messages: "17",
      sessions:"37",
      usage:chart2,
    },
    {
      id: 8,
      name: "Ashley Hernandez",
      violation: ["1 Critical", "2 High"],
      violationCat: "OpenAI",
      mails: "chris@email.com",
      department: "HR",
      riskScore: "Low",
      issues:["1 Critical", "2 High"],
      messages: "17",
      sessions:"37",
      usage:chart3,
    },
    {
      id: 9,
      name: "James Lopez",
      violation: ["1 Critical", "2 High"],
      violationCat: "OpenAI",
      mails: "chris@email.com",
      department: "HR",
      riskScore: "Low",
      issues:["1 Critical", "2 High"],
      messages: "17",
      sessions:"37",
      usage:chart1,
    },
    {
      id: 10,
      name: "Laura Thompson",
      violation: ["1 Critical", "2 High"],
      violationCat: "OpenAI",
      mails: "chris@email.com",
      department: "HR",
      riskScore: "Low",
      issues:["1 Critical", "2 High"],
      messages: "17",
      sessions:"37",
      usage:chart2,
    },
    {
      id: 11,
      name: "Robert Anderson",
      violation: ["1 Critical", "2 High"],
      violationCat: "OpenAI",
      mails: "chris@email.com",
      department: "HR",
      riskScore: "Low",
      issues:["1 Critical", "2 High"],
      messages: "17",
      sessions:"37",
      usage:chart3,
    },
    {
      id: 12,
      name: "Michelle Taylor",
      violation: ["1 Critical", "2 High"],
      violationCat: "OpenAI",
      mails: "chris@email.com",
      department: "HR",
      riskScore: "Low",
      issues:["1 Critical", "2 High"],
      messages: "17",
      sessions:"37",
      usage:chart1,
    },
    {
      id: 13,
      name: "Thomas Harris",
      violation: ["1 Critical", "2 High"],
      violationCat: "OpenAI",
      mails: "chris@email.com",
      department: "HR",
      riskScore: "Low",
      issues:["1 Critical", "2 High"],
      messages: "17",
      sessions:"37",
      usage:chart2,
    },
    {
      id: 14,
      name: "Jennifer Clark",
      violation: ["1 Critical", "2 High"],
      violationCat: "OpenAI",
      mails: "chris@email.com",
      department: "HR",
      riskScore: "Low",
      issues:["1 Critical", "2 High"],
      messages: "17",
      sessions:"37",
      usage:chart3,
    },
    {
      id: 15,
      name: "Charles Lewis",
      violation: ["1 Critical", "2 High"],
      violationCat: "OpenAI",
      mails: "chris@email.com",
      department: "HR",
      riskScore: "Low",
      issues:["1 Critical", "2 High"],
      messages: "17",
      sessions:"37",
      usage:chart1,
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