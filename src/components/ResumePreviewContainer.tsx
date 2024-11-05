import ResumePreview from "./Section/ResumePreview"
import DownloadButton from "./Buttons/DownloadButton"
import { FormData } from "../interface/types"
import React, { useRef } from "react"

interface ResumePreviewProps {
    formData: FormData
}

const ResumePreviewContainer: React.FC<ResumePreviewProps> = ({ formData }) => {
    const resumeRef = useRef<HTMLDivElement>(null);

    return (
        <div className="laptop:w-[55%] w-full max-w-[855px] hidden laptop:block">
            <ResumePreview resumeRef={resumeRef} formData={formData}/>
            <DownloadButton formData={formData} resumeRef={resumeRef}/>
        </div>
    )
}

export default ResumePreviewContainer