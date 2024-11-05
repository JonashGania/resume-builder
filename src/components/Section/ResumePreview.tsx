import PersonalInfoSection from "./PersonalInfoSection"
import EducationSection from "./EducationSection"
import ExperienceSection from "./ExperienceSection"
import SkillsSection from "./SkillsSection"
import React from "react"
import { FormData } from "../../interface/types"

interface ResumePreviewProps {
    formData: FormData
    resumeRef: React.RefObject<HTMLDivElement>
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ resumeRef, formData }) => {
    return (
        <div ref={resumeRef} className="resume-preview font-lato bg-white min-h-[600px] rounded-md px-8 py-8 laptop:px-16 laptop:py-16">
            <PersonalInfoSection personalInfo={formData.personalInfo}/>
            <EducationSection educationInfo={formData.educationInfo}/>
            <ExperienceSection/>
            <SkillsSection />
        </div>
    )
}

export default ResumePreview