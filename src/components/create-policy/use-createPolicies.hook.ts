"use client";

import { useEffect, useState } from "react";

export default function useCreatePolicies() {
    const [isHide, setIsHide] = useState(false);
    const [checkedValues, setCheckedValues] = useState<any>([]);

    const handleClick = (e: any) => {
        setIsHide((prev) => !prev);
    };

    const handleChange = (label: any) => {
        setCheckedValues((prev: any) =>
        prev.includes(label)
            ? prev.filter((value: any) => value !== label)
            : [...prev, label]
        );
    };
    useEffect(() => {
        checkedValues.length === 0  &&  setIsHide(false) ;
    }, [checkedValues]);

    return{
        handleClick,
        handleChange,
        isHide,
        checkedValues,
        setIsHide
    }
}
