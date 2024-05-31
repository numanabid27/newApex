"use client";

import { useEffect, useState } from "react";
import { AIBOOM_TABLE_DATA } from "./aiBoom.constant";

export default function useAiboom() {
    const [isDetail, setIsDetail] = useState<any>(null);
    const [isColor, setIsColor] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(false);
    const [isClicked, setIsClicked] = useState(null);
    const [value, setIsValue] = useState<any>(0);
    const [repo, setRepo] = useState('')

    const handleChange = (event:any, newValue:any) => {
        setIsValue(newValue);
    };

    const handleClick = (id: any) => {
        setIsLoading(true);
        const res = AIBOOM_TABLE_DATA.find((item: any) => item.id == parseInt(id));
        const detail :any = res ? res.folderName : null;
        setRepo(detail)
        setIsDetail(id);
        setIsColor(id);
        setTimeout(() => {
            setIsDetail(res?.files);
            setIsLoading(false);
        }, 400);
    };

    useEffect(() => {
        if (!isDetail) {
            setIsDetail(AIBOOM_TABLE_DATA[0].files);
            setRepo(AIBOOM_TABLE_DATA[0]?.folderName);
            setIsColor(AIBOOM_TABLE_DATA[0]?.id);
        }
        
    }, [isDetail]);
    return {
        isDetail,
        handleClick,
        isLoading,
        hoveredIndex,
        isClicked,
        setHoveredIndex,
        setIsClicked,
        handleChange,
        value,
        repo,
        isColor
    };
}
