import pdf from "@/common/assets/images/pdf.svg";
import world from "@/common/assets/images/world.svg";
import excel from "@/common/assets/images/excel.svg";
import power from "@/common/assets/images/power.svg";

export const FILES_SESSION_DATA = [
    {
      id: 1,
      fileName: "Company goals 2024",
      fileType: pdf,
      intraction: "12,453",
      users: "892",
      sensitivity : "Highly Confidential",
      path: "/corporate-strategy/2025-vision/initiatives/"
    },
    {
      id: 2,
      fileName: "Employee code of conduct",
      fileType: power,
      intraction: "8,356",
      users: "605",
      sensitivity : "Confidential",
      path: "/corporate-strategy/2025-vision/initiatives/"
    },
    {
      id: 3,
      fileName: "Q1 plan and projections",
      fileType: world,
      intraction: "5321",
      users: "102",
      sensitivity : "Confidential",
      path: "/corporate-strategy/2025-vision/initiatives/"
    },
    {
        id: 4,
        fileName: "Annual R&D Expense Report 2023 ",
        fileType: excel,
        intraction: "420",
        users: "305",
        sensitivity : "Medium",
        path: "/finance/quarterly-reports/Q4-2023/"
    },
    {
        id: 5,
        fileName: "2024 Clinical Trial Results Summary",
        fileType: pdf,
        intraction: "315",
        users: "892",
        sensitivity : "None",
        path: "/innovation/lab-notes/drug-trial-21/"
    },
    {
        id: 6,
        fileName: "Pharmaceutical Product Launch Plan",
        fileType: excel,
        intraction: "12",
        users: "892",
        sensitivity : "None",
        path: "/innovation/lab-notes/drug-trial-21/"
    }
];