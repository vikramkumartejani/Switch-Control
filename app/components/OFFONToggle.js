"use client"

import { useState } from "react"
import Image from "next/image"

const OFFONToggle = ({ initialState = false }) => {
    const [isEnabled, setIsEnabled] = useState(initialState)

    const handleToggle = () => {
        setIsEnabled(!isEnabled)
    }

    return (
        <button
            className={`h-[40px] md:h-[45px] rounded-[20px] min-w-[80px] md:rounded-[25px] px-2.5 pr-3 flex items-center ${isEnabled ? "bg-[#07FF3533] justify-between" : "bg-[#F2161A33] flex-row-reverse justify-between"
                } gap-[5px]`}
            onClick={handleToggle}
        >
            <h3
                className={`text-[14px] font-normal leading-[16.41px] ${isEnabled ? "text-[#07FF35] pt-0.5" : "text-[#F2161A] pt-0.5"
                    }`}
            >
                {isEnabled ? "On" : "Off"}
            </h3>
            <span className={`w-[5px] h-[5px] rounded-full ${isEnabled ? "bg-[#07FF35]" : "bg-[#F2161A]"}`}></span>
            <Image
                src={isEnabled ? "/assets/enable.svg" : "/assets/disabled.svg"}
                alt={isEnabled ? "enable" : "disable"}
                width={25}
                height={25}
                className="md:w-[25px] md:h-[25px] w-[25px] h-[25px]"
            />
        </button>
    )
}

export default OFFONToggle

