import React, { useRef } from "react"
import ResumePreview from "./Section/ResumePreview"
import { FormData } from "../interface/types"
import DownloadButton from "./Buttons/DownloadButton"

interface ResumePreviewProps {
    formData: FormData;
    isOpen: boolean;
    handleClosePreview: () => void;
}

const PreviewContent: React.FC<ResumePreviewProps> = ({ formData, isOpen, handleClosePreview }) => {
    const resumeRef = useRef<HTMLDivElement>(null);

    return (
        <div className={`preview-overlay ${isOpen ? 'open' : ''} fixed top-0 left-0 w-full min-h-screen bg-[rgba(0,0,0,0.6)] laptop:hidden flex items-center px-4 z-10`}>
            <div className={`preview-container ${isOpen ? 'open' : ''} bg-white w-full max-w-[700px] mx-auto h-[95vh] rounded-xl px-4 py-4 flex flex-col gap-4`}>
                <div className="h-full border-l-2 border-t-2 border-black overflow-y-scroll preview-scrollbar">
                    <ResumePreview resumeRef={resumeRef} formData={formData}/>
                </div>
                <div className="w-full flex items-center justify-center gap-4">
                    <div className="w-[50%] bg-gray-300 rounded-md">
                        <button 
                            onClick={handleClosePreview} 
                            className="flex items-center justify-center w-full py-2 gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} viewBox="0 0 384 512">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                            <span className="font-semibold">Close</span>
                        </button>
                    </div>
                    <div className="w-[50%] bg-black flex justify-center items-center rounded-md">
                        <DownloadButton formData={formData} resumeRef={resumeRef}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreviewContent 