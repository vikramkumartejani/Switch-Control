"use client"

import { useState } from "react"
import Image from "next/image"
import EnableDisable from './EnableDisable'
import OFFONToggle from './OFFONToggle'
import ResetWiFi from './ResetWiFi'

const smartLightsData = [
    { name: "Smart Light 1", icon: "/assets/light.png", initialState: true },
    { name: "Smart Light 2", icon: "/assets/light.png", initialState: false },
    { name: "Smart Light 3", icon: "/assets/light.png", initialState: true },
    { name: "Smart Light 4", icon: "/assets/light.png", initialState: false },
    { name: "Smart Light 5", icon: "/assets/light.png", initialState: false },
    { name: "Smart Light 6", icon: "/assets/light.png", initialState: true },
    { name: "Smart Light 7", icon: "/assets/light.png", initialState: false },
    { name: "Smart Light 8", icon: "/assets/light.png", initialState: true },
]

const smartLightsData4 = [
    { name: "Smart Light 1", icon: "/assets/light.png", initialState: true },
    { name: "Smart Light 2", icon: "/assets/light.png", initialState: false },
    { name: "Smart Light 3", icon: "/assets/light.png", initialState: true },
    { name: "Smart Light 4", icon: "/assets/light.png", initialState: false },
]

const DeviceControlPanel = () => {
    const [allSwitchesOn8Port, setAllSwitchesOn8Port] = useState(false)
    const [allSwitchesOn4Port, setAllSwitchesOn4Port] = useState(true)

    const toggleAllSwitches8Port = () => {
        setAllSwitchesOn8Port(!allSwitchesOn8Port)
    }

    const toggleAllSwitches4Port = () => {
        setAllSwitchesOn4Port(!allSwitchesOn4Port)
    }

    return (
        <div className="flex flex-col gap-5">
            {/* 8 Port Device */}
            <div className="bg-[#1D232C] rounded-xl p-4 md:p-5 border border-white/30" style={{ boxShadow: "0px 4px 20px 0px #0706121A" }}>
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <h2 className="text-white text-[18px] font-semibold leading-[27px]">8 Port Device</h2>
                    <div className="flex items-center gap-2.5">
                        <button
                            className={`${allSwitchesOn8Port ? "bg-[#134925]" : "bg-[#F2161A33]"} rounded-[20px] md:rounded-[30px] h-[40px] md:h-[50px] flex items-center justify-center gap-[5px] px-3.5`}
                            onClick={toggleAllSwitches8Port}
                        >
                            <Image
                                src={allSwitchesOn8Port ? "/assets/enable.svg" : "/assets/disabled.svg"}
                                alt={allSwitchesOn8Port ? "enable" : "disabled"}
                                width={30}
                                height={30}
                                className="md:w-[30px] md:h-[30px] w-[25px] h-[25px]"
                            />
                            <span
                                className={`w-[5px] h-[5px] rounded-full ${allSwitchesOn8Port ? "bg-[#07FF35]" : "bg-[#F2161A]"}`}
                            ></span>
                            <h3
                                className={`${allSwitchesOn8Port ? "text-[#07FF35]" : "text-[#F2161A]"} text-[14px] font-normal leading-[16.41px] pt-0.5`}
                            >
                                {allSwitchesOn8Port ? "All Switch On" : "All Switch Off"}
                            </h3>
                        </button>
                        <ResetWiFi />
                    </div>
                </div>

                {/* 8 Port Controller */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 mt-2.5">
                    {/* 8 Port Controller */}
                    <div className="bg-[#161B21] border border-[#2E3237] p-[15px] rounded-xl">
                        <div className="flex items-center justify-between gap-5">
                            <Image src="/assets/home-automation.png" alt="box-icons" width={40} height={40} />
                            <div className="flex items-center gap-1.5">
                                <h3 className="text-white text-[14px] font-normal leading-[20px]">Status:</h3>
                                <div className="bg-[#07FF3533] w-fit flex items-center gap-1 rounded-[30px] p-2.5">
                                    <span className="min-w-[5px] min-h-[5px] rounded-full bg-[#07FF35]"></span>
                                    <h3 className="text-[#07FF35] text-[14px] font-normal leading-[16.41px]">Online</h3>
                                </div>
                            </div>
                        </div>

                        <div className="mt-2.5 text-white">
                            <h3 className="text-[16px] font-bold leading-[20px]">8 Port Controller</h3>
                            <ul className="mt-1 list-disc pl-5">
                                <li className="text-[14px] font-medium leading-[20px]">
                                    Warranty Till: <span className="font-normal">17 Dec 2025</span>
                                </li>
                                <li className="text-[14px] font-medium leading-[20px]">
                                    Device Name: <span className="font-normal">4 Node</span>
                                </li>
                                <li className="text-[14px] font-medium leading-[20px]">
                                    Serial Number: <span className="font-normal">CC:DB:33:44:01:74</span>
                                </li>
                                <li className="text-[14px] font-medium leading-[20px]">
                                    Limited Warranty: <span className="font-normal">17 Dec 2025</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Manual Enable/Disable */}
                    <div className="bg-[#161B21] border border-[#2E3237] p-[15px] rounded-xl">
                        <div className="flex items-center justify-between gap-5">
                            <Image src="/assets/setting.png" alt="box-icons" width={40} height={40} />
                            <EnableDisable initialState={true} />
                        </div>

                        <div className="mt-3 text-white space-y-2.5">
                            <h3 className="text-[16px] font-bold leading-[20px]">Manual Enable/Disable</h3>
                            <p className="text-[16px] font-normal leading-[18px]">
                                Enabling this will activate the device's manual buttons.
                            </p>
                        </div>
                    </div>

                    {/* Auto Manual Enable/Disable */}
                    <div className="bg-[#161B21] border border-[#2E3237] p-[15px] rounded-xl">
                        <div className="flex items-center justify-between gap-5">
                            <Image src="/assets/setting.png" alt="box-icons" width={40} height={40} />
                            <EnableDisable initialState={false} />
                        </div>

                        <div className="mt-3 text-white space-y-2.5">
                            <h3 className="text-[16px] font-bold leading-[20px]">Auto Manual Enable/Disable</h3>
                            <p className="text-[16px] font-normal leading-[18px]">
                                Enabling this activates auto mode; manual buttons are enabled when offline and disabled when online.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Smart Light Box */}
                <div className="mt-2.5 grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-8 gap-2.5">
                    {smartLightsData.map((light, index) => (
                        <div key={index} className="bg-[#161B21] border border-[#2E3237] rounded-xl px-3.5 py-2.5">
                            <div className="space-y-[10px]">
                                <div className="flex justify-between w-full items-center gap-2 sm:gap-4">
                                    <Image src={light.icon || "/placeholder.svg"} alt="box-icons" width={40} height={40} />
                                    <OFFONToggle initialState={light.initialState} />
                                </div>
                                <h3 className="text-white text-[14px] font-semibold leading-[16.41px]">{light.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 4 Port Device */}
            <div className="bg-[#1D232C] rounded-xl p-4 md:p-5 border border-white/30" style={{ boxShadow: "0px 4px 20px 0px #0706121A" }}>
                <div className="flex items-center flex-wrap justify-between gap-4">
                    <h2 className="text-white text-[18px] font-semibold leading-[27px]">4 Port Device</h2>
                    <div className="flex items-center gap-2.5">
                        <button
                            className={`${allSwitchesOn4Port ? "bg-[#134925]" : "bg-[#F2161A33]"} rounded-[20px] md:rounded-[30px] h-[40px] md:h-[50px] flex items-center justify-center gap-[5px] px-3.5`}
                            onClick={toggleAllSwitches4Port}
                        >
                            <Image
                                src={allSwitchesOn4Port ? "/assets/enable.svg" : "/assets/disabled.svg"}
                                alt={allSwitchesOn4Port ? "enable" : "disabled"}
                                width={30}
                                height={30}
                                className="md:w-[30px] md:h-[30px] w-[25px] h-[25px]"
                            />
                            <span
                                className={`w-[5px] h-[5px] rounded-full ${allSwitchesOn4Port ? "bg-[#07FF35]" : "bg-[#F2161A]"}`}
                            ></span>
                            <h3
                                className={`${allSwitchesOn4Port ? "text-[#07FF35]" : "text-[#F2161A]"} text-[14px] font-normal leading-[16.41px] pt-0.5`}
                            >
                                {allSwitchesOn4Port ? "All Switch On" : "All Switch Off"}
                            </h3>
                        </button>
                        <ResetWiFi />
                    </div>
                </div>

                {/* 4 Port Controller */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 mt-2.5">
                    {/* Status */}
                    <div className="bg-[#161B21] border border-[#2E3237] p-[15px] rounded-xl">
                        <div className="flex items-center justify-between gap-5">
                            <Image src="/assets/home-automation.png" alt="box-icons" width={40} height={40} />
                            <div className="flex items-center gap-1.5">
                                <h3 className="text-white text-[14px] font-normal leading-[20px]">Status:</h3>
                                <div className="bg-[#07FF3533] w-fit flex items-center gap-1 rounded-[30px] p-2.5">
                                    <span className="min-w-[5px] min-h-[5px] rounded-full bg-[#07FF35]"></span>
                                    <h3 className="text-[#07FF35] text-[14px] font-normal leading-[16.41px]">Online</h3>
                                </div>
                            </div>
                        </div>

                        <div className="mt-2.5 text-white">
                            <h3 className="text-[16px] font-bold leading-[20px]">8 Port Controller</h3>
                            <ul className="mt-1 list-disc pl-5">
                                <li className="text-[14px] font-medium leading-[20px]">
                                    Warranty Till: <span className="font-normal">17 Dec 2025</span>
                                </li>
                                <li className="text-[14px] font-medium leading-[20px]">
                                    Device Name: <span className="font-normal">4 Node</span>
                                </li>
                                <li className="text-[14px] font-medium leading-[20px]">
                                    Serial Number: <span className="font-normal">CC:DB:33:44:01:74</span>
                                </li>
                                <li className="text-[14px] font-medium leading-[20px]">
                                    Limited Warranty: <span className="font-normal">17 Dec 2025</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Manual Enable/Disable */}
                    <div className="bg-[#161B21] border border-[#2E3237] p-[15px] rounded-xl">
                        <div className="flex items-center justify-between gap-5">
                            <Image src="/assets/setting.png" alt="box-icons" width={40} height={40} />
                            <EnableDisable initialState={true} />
                        </div>

                        <div className="mt-3 text-white space-y-2.5">
                            <h3 className="text-[16px] font-bold leading-[20px]">Manual Enable/Disable</h3>
                            <p className="text-[16px] font-normal leading-[18px]">
                                Enabling this will activate the device's manual buttons.
                            </p>
                        </div>
                    </div>

                    {/* Auto Manual Enable/Disable */}
                    <div className="bg-[#161B21] border border-[#2E3237] p-[15px] rounded-xl">
                        <div className="flex items-center justify-between gap-5">
                            <Image src="/assets/setting.png" alt="box-icons" width={40} height={40} />
                            <EnableDisable initialState={false} />
                        </div>

                        <div className="mt-3 text-white space-y-2.5">
                            <h3 className="text-[16px] font-bold leading-[20px]">Auto Manual Enable/Disable</h3>
                            <p className="text-[16px] font-normal leading-[18px]">
                                Enabling this activates auto mode; manual buttons are enabled when offline and disabled when online.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Smart Light Box */}
                <div className="mt-2.5 grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-8 gap-2.5">
                    {smartLightsData4.map((light, index) => (
                        <div key={index} className="bg-[#161B21] border border-[#2E3237] rounded-xl px-3.5 py-2.5">
                            <div className="space-y-[10px]">
                                <div className="flex justify-between w-full items-center gap-2 sm:gap-4">
                                    <Image src={light.icon || "/placeholder.svg"} alt="box-icons" width={40} height={40} />
                                    <OFFONToggle initialState={light.initialState} />
                                </div>
                                <h3 className="text-white text-[14px] font-semibold leading-[16.41px]">{light.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DeviceControlPanel

