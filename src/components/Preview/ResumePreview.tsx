import PersonalInfoSection from "./PersonalInfoSection"
import EducationSection from "./EducationSection"
import ExperienceSection from "./ExperienceSection"
import SkillsSection from "./SkillsSection"
import { FormData } from "../../interface/types"
import React from "react"

interface ResumePreviewProps {
    formData: FormData
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ formData }) => {
    return (
        <div className="w-[55%]">
            <div className="resume-preview bg-white min-h-[550px] rounded-md px-16 py-16">
                <PersonalInfoSection personalInfo={formData.personalInfo}/>
                <EducationSection educationInfo={formData.educationInfo}/>
                <ExperienceSection/>
                <SkillsSection />
            </div>
            <button className="px-4 py-3 bg-black rounded-md flex items-center gap-2 mt-8 justify-self-end">
                <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} viewBox="0 0 512 512">
                    <path fill="#ffffff" d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z"/>
                </svg>
                <span className="text-white">
                    Download PDF
                </span>
            </button>
        </div>
    )
}

export default ResumePreview