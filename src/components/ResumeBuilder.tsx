import { useState } from "react";
import Form from "./Form/Form"
import ResumePreviewContainer from "./ResumePreviewContainer";
import PreviewContent from "./PreviewContent";
import PreviewButton from "./Buttons/PreviewButton";
import { FormData } from "../interface/types";
import { ExperienceProvider } from "../context/experienceContext";
import { SkillsProvider } from "../context/skillsContext";

const initialFormData: FormData = {
    personalInfo: {
        firstName: '', 
        lastName: '', 
        email: '', 
        phone: '', 
        address: '', 
        city: '', 
        postalCode: ''
    },
    educationInfo: {
        schoolName: '', 
        location: '', 
        degree: '', 
        major: '',
        gradMonth: '', 
        gradYear: ''
    },
}

const ResumeBuilder = () => {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    const handleInputChange = (section: keyof FormData, field: string, value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [section]: { ...prevData[section], [field]: value},
        }))
    }

    const handleOpenPreview = () => {
        setIsPreviewOpen(true);
    }
    
    const handleClosePreview = () => {
        setIsPreviewOpen(false);
    }


    return (
        <SkillsProvider>
            <ExperienceProvider>
                <div>
                    <div className="w-full flex justify-center gap-6 pt-8">
                        <Form formData={formData} onInputChange={handleInputChange}/>
                        <ResumePreviewContainer formData={formData}/>
                    </div>
                    <PreviewContent formData={formData} isOpen={isPreviewOpen} handleClosePreview={handleClosePreview}/>
                    <PreviewButton handleClick={handleOpenPreview}/>
                </div>
            </ExperienceProvider>
        </SkillsProvider>
    )
}

export default ResumeBuilder