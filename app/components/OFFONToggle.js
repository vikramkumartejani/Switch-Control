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
            className={`h-[40px] md:h-[45px] rounded-[20px] min-w-[80px] md:rounded-[25px] px-2.5 pr-3 flex items-center relative overflow-hidden transition-all duration-300 ${
                isEnabled ? "bg-[#07FF3533] justify-between" : "bg-[#F2161A33] flex-row-reverse justify-between"
            } gap-[5px]`}
            onClick={handleToggle}
        >
            {/* Background color overlay - animates with scale */}
            <div 
                className={`absolute top-0 left-0 h-full rounded-[20px] md:rounded-[25px] transition-all duration-300 ${
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
                {isEnabled ? "On" : "Off"}
            </h3>
            
            {/* Indicator Dot */}
            <span className={`w-[5px] h-[5px] rounded-full z-10 transition-all duration-300 ${
                isEnabled ? "bg-[#07FF35]" : "bg-[#F2161A]"
            }`}></span>
            
            {/* Toggle Icon with sliding animation */}
            <div 
                className="relative z-10 transition-all duration-300"
                style={{
                    transform: isEnabled ? "translateX(0)" : "translateX(0)"
                }}
            >
                <div className="relative w-[25px] h-[25px] md:w-[25px] md:h-[25px]">
                    <Image
                        src={isEnabled ? "/assets/enable.svg" : "/assets/disabled.svg"}
                        alt={isEnabled ? "enable" : "disable"}
                        width={25}
                        height={25}
                        className="md:w-[25px] md:h-[25px] w-[25px] h-[25px] transition-opacity duration-300"
                        style={{
                            opacity: isEnabled ? 1 : 0,
                            position: "absolute",
                            top: 0,
                            left: 0
                        }}
                    />
                    <Image
                        src="/assets/disabled.svg"
                        alt="disable"
                        width={25}
                        height={25}
                        className="md:w-[25px] md:h-[25px] w-[25px] h-[25px] transition-opacity duration-300"
                        style={{
                            opacity: isEnabled ? 0 : 1,
                            position: "absolute",
                            top: 0,
                            left: 0
                        }}
                    />
                </div>
            </div>
        </button>
    )
}

export default OFFONToggle