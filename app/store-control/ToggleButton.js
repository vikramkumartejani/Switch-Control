import React from 'react'
import { GiPowerButton } from "react-icons/gi";

const ToggleButton = ({ isEnabled, onClick }) => {
    return (
        <div className="flex items-center">
            <label className="switch relative inline-block w-[120px] h-[40px] cursor-pointer">
                <input
                    type="checkbox"
                    checked={isEnabled}
                    onChange={onClick}
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
                            <div className='bg-black rounded-full w-[28px] h-[28px] flex items-center justify-center'>
                                <GiPowerButton className='text-[#07FF35] -mt-[1px] ' size={24} />
                            </div>
                        ) : (
                            <div className='bg-black rounded-full w-[28px] h-[28px] flex items-center justify-center'>
                                <GiPowerButton className='text-[#F2161A] -mt-[1px] -ml-[1px]' size={24} />
                            </div>
                        )}
                    </div>
                </div>
            </label>
        </div>
    )
}

export default ToggleButton