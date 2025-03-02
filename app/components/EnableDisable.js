"use client"

import { useState } from "react"
import { GiPowerButton } from "react-icons/gi";

const EnableDisable = ({ initialState = false }) => {
    const [isEnabled, setIsEnabled] = useState(initialState)

    const handleToggle = () => {
        setIsEnabled(!isEnabled)
    }

    return (
        <div className="flex items-center">
            <label className="relative inline-block w-[100px] h-[40px] cursor-pointer">
                <input
                    type="checkbox"
                    checked={isEnabled}
                    onChange={handleToggle}
                    className="sr-only"
                />
                <span className={`absolute top-0 left-0 right-0 bottom-0 rounded-[34px] transition-all duration-[0.4s] ${isEnabled ? "bg-[#134925]" : "bg-[#F2161A33]"
                    }`}>
                    <span className={`absolute text-white text-[12px] top-1/2 transform -translate-y-1/2 ${isEnabled ? "left-[10px] -translate-x-0" : "right-[10px] translate-x-0"
                        }`}>
                        {isEnabled ? "ENABLED" : "DISABLED"}
                    </span>
                </span>

                {/* Toggle Circle */}
                <div
                    className="absolute h-[26px] w-[26px] bottom-[7px] transition-all duration-[0.4s]"
                    style={{
                        left: isEnabled ? "70px" : "4px"
                    }}
                >
                    {/* Icon container */}
                    <div className="relative w-full h-full flex items-center justify-center">
                        {isEnabled ? (
                            <div  >
                                <GiPowerButton className='text-[#07FF35] -mt-[1px] ' size={24} />
                            </div>
                        ) : (
                            <div >
                                <GiPowerButton className='text-[#F2161A] -mt-[1px] -ml-[1px]' size={24} />
                            </div>
                        )}
                    </div>
                </div>
            </label>
        </div>
    )
}

export default EnableDisable