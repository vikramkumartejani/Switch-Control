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
                <svg width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[30px] md:h-[30px] w-[25px] h-[25px]">
                    <rect width="30" height="30" rx="15" fill="black"/>
                    <path d="M15 2.5V7.5" stroke="#07FF35" strokeWidth="1.875" strokeLinecap="round"/>
                    <path d="M10.625 4.63281C6.58507 6.33971 3.75 10.339 3.75 15.0004C3.75 21.2136 8.7868 26.2504 15 26.2504C21.2133 26.2504 26.25 21.2136 26.25 15.0004C26.25 10.339 23.4149 6.33971 19.375 4.63281" stroke="#07FF35" strokeWidth="1.875" strokeLinecap="round"/>
                </svg>
            ) : (
                <svg width="50" height="50" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[30px] md:h-[30px] w-[25px] h-[25px]">
                    <rect width="30" height="30" rx="15" fill="black"/>
                    <path d="M15 2.5V7.5" stroke="#F2161A" strokeWidth="1.875" strokeLinecap="round"/>
                    <path d="M10.625 4.63281C6.58507 6.33971 3.75 10.339 3.75 15.0004C3.75 21.2136 8.7868 26.2504 15 26.2504C21.2133 26.2504 26.25 21.2136 26.25 15.0004C26.25 10.339 23.4149 6.33971 19.375 4.63281" stroke="#F2161A" strokeWidth="1.875" strokeLinecap="round"/>
                </svg>
            )}
        </button>
    )
}

export default ToggleButton