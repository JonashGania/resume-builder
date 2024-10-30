import React, { useState, useEffect, useRef } from "react";
import DropdownList from "./DropdownList"

interface DropdownInt {
    options: string[];
    selectSpan: string;
}

const Dropdown: React.FC<DropdownInt> = ({ options, selectSpan }) => {
    const [menuShow, setMenuShow] = useState(false);
    const [selected, setSelected] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setMenuShow(!menuShow);
    }

    const handleSelectOption = (option: string) => {
        setSelected(option);
        setMenuShow(false);
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setMenuShow(false);
            }
        }

        document.addEventListener('click', handleClickOutside);
        return(() => {
            document.removeEventListener('click', handleClickOutside);
        })
    }, []);

    return (
        <div ref={dropdownRef} className=" min-w-[185px] relative w-full">
            <button 
                className="bg-transparent px-2 py-2 border rounded-sm border-gray-300 flex items-center justify-between gap-4 w-full"
                onClick={toggleMenu}
            >
                
                <span className="text-slate-600">{selected ? selected : selectSpan}</span>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 512 512">
                        <path fill="#475569" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
                    </svg>
                </div>
            </button>
            <DropdownList options={options} selectOption={handleSelectOption} menuShow={menuShow} />
        </div>
    )
}


export default Dropdown