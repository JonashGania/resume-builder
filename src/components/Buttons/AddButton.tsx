import React from "react";

interface AddButtonProps {
    addText: string;
}

const AddButton: React.FC<AddButtonProps> = ({ addText }) => {
    return (
        <button className="py-3 px-4 bg-black flex items-center gap-2 rounded-md mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 448 512">
                <path fill="#ffffff" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
            </svg>
            <span className="text-white">Add {addText}</span>
        </button>
    )
}

export default AddButton