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
            className={`h-[40px] md:h-[50px] rounded-[20px] md:rounded-[30px] min-w-[120px] px-2.5 flex items-center relative overflow-hidden transition-all duration-300 ${
                isEnabled ? "bg-[#07FF3533] justify-between" : "bg-[#F2161A33] flex-row-reverse justify-between"
            } gap-[5px]`}
            onClick={handleToggle}
        >
            {/* Background color overlay - animates with scale */}
            <div 
                className={`absolute top-0 left-0 h-full rounded-[20px] md:rounded-[30px] transition-all duration-300 ${
                    isEnabled ? "bg-[#07FF3533] w-full scale-100" : "bg-[#F2161A33] w-1/2 scale-0"
                }`}
                style={{
                    transformOrigin: isEnabled ? "right center" : "left center"
                }}
            />
            
            {/* Text Label */}
            <h3
                className={`text-[14px] font-normal leading-[16.41px] z-10 transition-all duration-300 ${
                    isEnabled ? "text-[#07FF35] pt-0.5" : "text-[#F2161A] pt-0.5"
                }`}
            >
                {isEnabled ? enabledText : disabledText}
            </h3>
            
            {/* Indicator Dot */}
            <span className={`w-[5px] h-[5px] rounded-full z-10 transition-all duration-300 ${
                isEnabled ? "bg-[#07FF35]" : "bg-[#F2161A]"
            }`}></span>
            
            {/* Toggle Icon with fade animation */}
            <div className="relative z-10 w-[30px] h-[30px] md:w-[30px] md:h-[30px]">
                <Image
                    src="/assets/enable.svg"
                    alt="enable"
                    width={30}
                    height={30}
                    className="absolute top-0 left-0 md:w-[30px] md:h-[30px] w-[25px] h-[25px] transition-opacity duration-300"
                    style={{
                        opacity: isEnabled ? 1 : 0
                    }}
                />
                <Image
                    src="/assets/disabled.svg"
                    alt="disable"
                    width={30}
                    height={30}
                    className="absolute top-0 left-0 md:w-[30px] md:h-[30px] w-[25px] h-[25px] transition-opacity duration-300"
                    style={{
                        opacity: isEnabled ? 0 : 1
                    }}
                />
            </div>
        </button>
    )
}

export default EnableDisable