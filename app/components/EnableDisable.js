"use client"

import { useState } from "react"
import Image from "next/image"

const EnableDisable = ({ initialState = false, enabledText = "Enabled", disabledText = "Disabled" }) => {
    const [isEnabled, setIsEnabled] = useState(initialState)

    const handleToggle = () => {
        setIsEnabled(!isEnabled)
    }

    return (
        <button
            className={`h-[40px] md:h-[50px] rounded-[20px] md:rounded-[30px] min-w-[120px] px-2.5 flex items-center ${isEnabled ? "bg-[#07FF3533] justify-between" : "bg-[#F2161A33] flex-row-reverse justify-between"
                } gap-[5px]`}
            onClick={handleToggle}
        >
            <h3
                className={`text-[14px] font-normal leading-[16.41px] ${isEnabled ? "text-[#07FF35] pt-0.5" : "text-[#F2161A] pt-0.5"
                    }`}
            >
                {isEnabled ? enabledText : disabledText}
            </h3>
            <span className={`w-[5px] h-[5px] rounded-full ${isEnabled ? "bg-[#07FF35]" : "bg-[#F2161A]"}`}></span>
            <Image
                src={isEnabled ? "/assets/enable.svg" : "/assets/disabled.svg"}
                alt={isEnabled ? "enable" : "disable"}
                width={30}
                height={30}
                className="md:w-[30px] md:h-[30px] w-[25px] h-[25px]"
            />
        </button>
    )
}

export default EnableDisable

