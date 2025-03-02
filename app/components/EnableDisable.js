"use client"

import { useState } from "react"
import Image from "next/image"

const EnableDisable = ({ initialState = false, enabledText = "Enabled", disabledText = "Disabled" }) => {
    const [isEnabled, setIsEnabled] = useState(initialState)

    const handleToggle = () => {
        setIsEnabled(!isEnabled)
    }

    return (
        <div className="flex items-center">
            <label className="switch relative inline-block w-[120px] h-[40px] cursor-pointer">
                <input
                    type="checkbox"
                    checked={isEnabled}
                    onChange={handleToggle}
                    className="sr-only"
                />
                <span className={`slider absolute top-0 left-0 right-0 bottom-0 rounded-[34px] transition-all duration-[0.4s] ${isEnabled ? "bg-[#134925]" : "bg-[#F2161A33]"
                    }`}>
                    <span className="absolute text-white text-[12px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        {isEnabled ? "ENABLED" : "DISABLED"}
                    </span>
                </span>

                {/* Toggle Circle */}
                <div
                    className="absolute h-[26px] w-[26px] left-[4px] bottom-[7px] rounded-full transition-all duration-[0.4s]"
                    style={{
                        transform: isEnabled ? "translateX(85px)" : "translateX(0)"
                    }}
                >
                    {/* Icon container */}
                    <div className="relative w-full h-full flex items-center justify-center">
                        {isEnabled ? (
                            <svg width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[30px] md:h-[30px] w-[25px] h-[25px]">
                                <rect width="30" height="30" rx="15" fill="black" />
                                <path d="M15 2.5V7.5" stroke="#07FF35" strokeWidth="1.875" strokeLinecap="round" />
                                <path d="M10.625 4.63281C6.58507 6.33971 3.75 10.339 3.75 15.0004C3.75 21.2136 8.7868 26.2504 15 26.2504C21.2133 26.2504 26.25 21.2136 26.25 15.0004C26.25 10.339 23.4149 6.33971 19.375 4.63281" stroke="#07FF35" strokeWidth="1.875" strokeLinecap="round" />
                            </svg>
                        ) : (
                            <svg width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[30px] md:h-[30px] w-[25px] h-[25px]">
                                <rect width="30" height="30" rx="15" fill="black" />
                                <path d="M15 2.5V7.5" stroke="#F2161A" strokeWidth="1.875" strokeLinecap="round" />
                                <path d="M10.625 4.63281C6.58507 6.33971 3.75 10.339 3.75 15.0004C3.75 21.2136 8.7868 26.2504 15 26.2504C21.2133 26.2504 26.25 21.2136 26.25 15.0004C26.25 10.339 23.4149 6.33971 19.375 4.63281" stroke="#F2161A" strokeWidth="1.875" strokeLinecap="round" />
                            </svg>
                        )}
                    </div>
                </div>
            </label>
        </div>
    )
}

export default EnableDisable