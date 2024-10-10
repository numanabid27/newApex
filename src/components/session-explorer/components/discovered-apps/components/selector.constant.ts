import microsoftDefender from "@/common/assets/images/microsoftDefender.svg";
import altoNetwork from "@/common/assets/images/altoNetwork.svg";
import zscalar from "@/common/assets/images/zscalar.svg";
import catoNetworks from "@/common/assets/images/catoNetworks.svg";
import checkPoint from "@/common/assets/images/checkPoint.svg";
import crowdStrike from "@/common/assets/images/crowdStrike.svg";


export const actions = [
    {
        id: 1,
        label: "Microsoft Defender",
        img: microsoftDefender,
    },
    {
        id: 2,
        label: "Palo Alto Networks",
        img: altoNetwork,
    },
    {
        id: 3,
        label: "Zscalar",
        img: zscalar,
    },
    {
        id: 4,
        label: "Cato Networks",
        img: catoNetworks,
    },
    {
        id: 5,
        label: "CrowdStrike Falcon",
        img: checkPoint,
    },
    {
        id: 6,
        label: "Check Point",
        img: crowdStrike,
    }
];

export const multiAction = [
    {
        id: 1,
        label: "SaaS Web-app",
    },
    {
        id: 2,
        label: "Native Endpoint app",
    },
    {
        id: 3,
        label: "IDE endpoint calls",
    },
];

export const multiActionDepartments = [
    {
        id: 1,
        label: "Departments",
    },
];

export const multiActionApplication  = [
    {
        id: 1,
        label: "Application",
    },
];

export const multiActionRisk  = [
    {
        id: 1,
        label: "Risk",
    },
];