"use client"

import { useState } from "react"
import { FaChevronDown } from "react-icons/fa"
import ToggleButton from "./ToggleButton"

const StoreControl = () => {
    const [toggles, setToggles] = useState({
        requiredCustomerName: true,
        gameCancellationTimeout: false,
        pauseResumeBillingTimer: true,
        payFirstPlayNext: true,
        transferTable: true,
        amountRoundingOptions: true,
        roundingType: true,
        printReceipt: true,
    })

    const [customerNameValue, setCustomerNameValue] = useState(1)
    const [timeoutValue, setTimeoutValue] = useState(1)

    const handleToggle = (setting) => {
        setToggles((prev) => ({
            ...prev,
            [setting]: !prev[setting],
        }))
    }

    const customerNameOptions = [1, 2]
    const timeoutOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const CustomDropdown = ({ value, onChange, options, disabled }) => {
        const [isOpen, setIsOpen] = useState(false)

        return (
            <div className="relative">
                <div
                    className="flex items-center justify-between bg-[#000000] text-white px-5 py-2.5 gap-[50px] rounded-[10px] cursor-pointer"
                    onClick={() => !disabled && setIsOpen(!isOpen)}
                >
                    <span>{value}</span>
                    <FaChevronDown className="h-3 w-3" />
                </div>

                {isOpen && (
                    <div className="absolute top-10 left-0 mt-1 border border-[#3B4758] bg-black rounded-[10px] shadow-lg z-10 w-full max-h-40 overflow-y-auto scroll">
                        {options.map((option) => (
                            <div
                                key={option}
                                className="px-3 py-2 text-white cursor-pointer border-b border-[#3B4758] last:border-b-0"
                                onClick={() => {
                                    onChange(option)
                                    setIsOpen(false)
                                }}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        )
    }

    return (
        <div className="bg-[#1D232C] w-full rounded-xl p-4 md:p-5" style={{ boxShadow: "0px 4px 20px 0px #0706121A" }}>
            <h2 className="text-white text-[18px] font-semibold leading-[27px]">Store Control</h2>
            <div className="mt-4 md:mt-5 bg-[#161B21] p-4 md:p-5 rounded-lg">
                {/* Required Customer Name */}
                <div className="flex justify-between md:flex-row flex-col items-start md:items-center gap-4 pb-2.5 border-b border-[#3B4758]">
                    <div>
                        <h2 className="font-medium text-base lg:text-[18px] leading-[21.09px] text-white mb-[5px]">Required Customer Name</h2>
                        <p className="text-[#BAC4D1] text-sm lg:text-[16px] leading-[18.75px] font-normal">
                            Once enabled, the selected number of customer names must be filled in to start the table.
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <CustomDropdown
                            value={customerNameValue}
                            onChange={setCustomerNameValue}
                            options={customerNameOptions}
                            disabled={!toggles.requiredCustomerName}
                        />
                        <ToggleButton
                            isEnabled={toggles.requiredCustomerName}
                            onClick={() => handleToggle("requiredCustomerName")}
                        />
                    </div>
                </div>

                {/* Game Cancellation Timeout */}
                <div className="flex justify-between md:flex-row flex-col items-start md:items-center gap-4 py-2.5 border-b border-[#3B4758]">
                    <div>
                        <h2 className="font-medium text-base lg:text-[18px] leading-[21.09px] text-white mb-[5px]">Game Cancellation Timeout</h2>
                        <p className="text-[#BAC4D1] text-sm lg:text-[16px] leading-[18.75px] font-normal">
                            Once enabled, the game will automatically cancel if the customer exits within the set time limit.
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <CustomDropdown
                            value={timeoutValue}
                            onChange={setTimeoutValue}
                            options={timeoutOptions}
                            disabled={!toggles.gameCancellationTimeout}
                        />
                        <ToggleButton
                            isEnabled={toggles.gameCancellationTimeout}
                            onClick={() => handleToggle("gameCancellationTimeout")}
                        />
                    </div>
                </div>

                {/* Pause Resume Billing Timer */}
                <div className="flex justify-between md:flex-row flex-col items-start md:items-center gap-4 py-2.5 border-b border-[#3B4758]">
                    <div>
                        <h2 className="font-medium text-base lg:text-[18px] leading-[21.09px] text-white mb-[5px]">Pause Resume Billing Timer</h2>
                        <p className="text-[#BAC4D1] text-sm lg:text-[16px] leading-[18.75px] font-normal">
                            Pauses the timer, and the paused time is not counted in the total billing amount.
                        </p>
                    </div>
                    <ToggleButton
                        isEnabled={toggles.pauseResumeBillingTimer}
                        onClick={() => handleToggle("pauseResumeBillingTimer")}
                    />
                </div>

                {/* Pay First, Play Next */}
                <div className="flex justify-between md:flex-row flex-col items-start md:items-center gap-4 py-2.5 border-b border-[#3B4758]">
                    <div>
                        <h2 className="font-medium text-base lg:text-[18px] leading-[21.09px] text-white mb-[5px]">Pay First, Play Next</h2>
                        <p className="text-[#BAC4D1] text-sm lg:text-[16px] leading-[18.75px] font-normal">
                            Enabling this starts the game after the advance amount has been paid.
                        </p>
                    </div>
                    <ToggleButton isEnabled={toggles.payFirstPlayNext} onClick={() => handleToggle("payFirstPlayNext")} />
                </div>

                {/* Transfer Table */}
                <div className="flex justify-between md:flex-row flex-col items-start md:items-center gap-4 py-2.5 border-b border-[#3B4758]">
                    <div>
                        <h2 className="font-medium text-base lg:text-[18px] leading-[21.09px] text-white mb-[5px]">Transfer Table</h2>
                        <p className="text-[#BAC4D1] text-sm lg:text-[16px] leading-[18.75px] font-normal">
                            Transfers the current customer playing at one table to another table.
                        </p>
                    </div>
                    <ToggleButton isEnabled={toggles.transferTable} onClick={() => handleToggle("transferTable")} />
                </div>

                {/* Amount Rounding Options */}
                <div className="flex justify-between md:flex-row flex-col items-start md:items-center gap-4 py-2.5 border-b border-[#3B4758]">
                    <div>
                        <h2 className="font-medium text-base lg:text-[18px] leading-[21.09px] text-white mb-[5px]">Amount Rounding Options</h2>
                        <p className="text-[#BAC4D1] text-sm lg:text-[16px] leading-[18.75px] font-normal">
                            Enabling this starts the game after the advance amount has been paid.
                        </p>
                    </div>
                    <ToggleButton
                        isEnabled={toggles.amountRoundingOptions}
                        onClick={() => handleToggle("amountRoundingOptions")}
                    />
                </div>

                {/* Rounding Type */}
                <div className="flex justify-between md:flex-row flex-col items-start md:items-center gap-4 py-2.5 border-b border-[#3B4758]">
                    <div>
                        <h2 className="font-medium text-base lg:text-[18px] leading-[21.09px] text-white mb-[5px]">
                            Enabling this rounds off the amount based on the selected type:
                        </h2>
                        <ul className="text-[#BAC4D1] text-sm lg:text-[18px] md:leading-[21.09px] font-normal list-disc pl-5 space-y-1">
                            <li>Type 1: Rounds to the nearest whole number (e.g., 20.50 or 20.60 becomes 21, 20.40 becomes 20).</li>
                            <li>Type 2: Rounds to the nearest 5 (e.g., 23 becomes 25, 22 becomes 20).</li>
                        </ul>
                    </div>
                    <ToggleButton isEnabled={toggles.roundingType} onClick={() => handleToggle("roundingType")} />
                </div>

                {/* Print Receipt */}
                <div className="flex justify-between md:flex-row flex-col items-start md:items-center gap-4 pt-2.5">
                    <div>
                        <h2 className="font-medium text-base lg:text-[18px] leading-[21.09px] text-white mb-[5px]">Print Receipt:</h2>
                        <p className="text-[#BAC4D1] text-sm lg:text-[18px] leading-[21.09px] font-normal">Prints a copy of the bill.</p>
                    </div>
                    <ToggleButton isEnabled={toggles.printReceipt} onClick={() => handleToggle("printReceipt")} />
                </div>
            </div>
        </div>
    )
}

export default StoreControl

