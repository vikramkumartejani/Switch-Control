import { useState, useEffect, useRef } from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi';

function ResetWiFi() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(prevState => !prevState);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
                buttonRef.current && !buttonRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative">
            <button
                ref={buttonRef}
                className="bg-[#3B4758] w-[36px] h-[36px] rounded-full flex items-center justify-center"
                onClick={toggleDropdown}
            >
                <HiOutlineDotsVertical size={20} />
            </button>

            {isOpen && (
                <div
                    ref={dropdownRef}
                    className="bg-[#3B4758] absolute right-0 top-10 p-0.5 rounded-lg w-[150px]"
                >
                    <button className="w-full text-white text-[14px] leading-[16.41px] font-normal bg-[#161B21] p-2.5 rounded">
                        Reset Wi-Fi
                    </button>
                </div>
            )}
        </div>
    );
}

export default ResetWiFi;
