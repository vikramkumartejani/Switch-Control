import React from 'react'
import { GiPowerButton } from "react-icons/gi";

const ToggleButton = ({ isEnabled, onClick }) => {
    return (
        <button
            className={`h-[40px] md:h-[50px] rounded-[20px] md:rounded-[30px] min-w-[120px] px-2.5 flex items-center ${isEnabled ? "bg-[#07FF3533] justify-between" : "bg-[#F2161A33] flex-row-reverse justify-between"
                } gap-[5px]`}
            onClick={onClick}
        >
            <h3 className={`text-[14px] font-normal leading-[16.41px]  ${isEnabled ? "text-[#07FF35] pt-0.5" : "text-[#F2161A] pt-0.5"}`}>
                {isEnabled ? "Enabled" : "Disabled"}
            </h3>
            <span className={`w-[5px] h-[5px] rounded-full ${isEnabled ? "bg-[#07FF35]" : "bg-[#F2161A]"}`}></span>

            {isEnabled ? (
                <div className='bg-black rounded-full w-[28px] h-[28px] flex items-center justify-center'>
                    <GiPowerButton className='text-[#07FF35] -mt-[1px] ' size={24} />
                </div>
            ) : (
                <div className='bg-black rounded-full w-[28px] h-[28px] flex items-center justify-center'>
                    <GiPowerButton className='text-[#F2161A] -mt-[1px] -ml-[1px]' size={24} />
                </div>
            )}
        </button>
    )
}

export default ToggleButton
