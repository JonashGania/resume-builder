import React from "react";

interface PreviewButtonProps {
    handleClick: () => void;
}

const PreviewButton: React.FC<PreviewButtonProps> = ({ handleClick }) => {
    return (
        <div className="fixed block laptop:hidden bottom-4 right-4">
            <button 
                onClick={handleClick}
                className="px-6 py-3 bg-white text-xl font-semibold text-black shadow-md shadow-gray-400 rounded-3xl"
            >
                Preview
            </button>
        </div>
    )
}

export default PreviewButton