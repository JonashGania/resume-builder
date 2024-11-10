import React from "react"

interface DropdownListInt {
    options: string[];
    selectOption: (option: string) => void;
    menuShow: boolean;
}

const DropdownList: React.FC<DropdownListInt> = ({ options, selectOption, menuShow }) => {
    return (
        <>
            {menuShow && (
                <ul className={`dropdown-list flex w-full absolute mt-1 right-0 flex-col z-10 bg-white px-2 py-2 max-h-[200px] overflow-y-scroll`}>
                    {options.map((item, index) => (
                        <li 
                            key={index}
                            data-testid="dropdown-item" 
                            onClick={() => selectOption(item)}
                            className="py-1 hover:font-semibold cursor-pointer text-slate-600 hover:text-black"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default DropdownList