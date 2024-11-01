import React, { useState } from "react"
import PersonalInfoForm from "./PersonalInfoForm"
import EducationForm from "./EducationForm"
import ExperienceForm from "./ExperienceForm"
import SkillsForm from "./SkillsForm"
import StepsNavigate from "../StepsNavigate"
import { FormData } from "../../interface/types"

interface FormProps {
    formData: FormData;
    onInputChange: (section: keyof FormData, field: string, value: string) => void;
}

const Form: React.FC<FormProps> = ({ formData, onInputChange }) => {
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        <PersonalInfoForm data={formData.personalInfo} onChange={onInputChange} />,
        <EducationForm educationData={formData.educationInfo} onChange={onInputChange}/>,
        <ExperienceForm experienceData={formData.experienceInfo} onChange={onInputChange} />,
        <SkillsForm />,
    ]

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    }

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    }

    return (
        <div className="w-[45%]">
            <div className="bg-white px-8 pt-8 pb-6 rounded-md min-h-[550px] flex flex-col justify-between">
                {steps[currentStep]}
                <StepsNavigate 
                    isFirstStep={currentStep === 0} 
                    isLastStep={currentStep === steps.length - 1} 
                    onNext={handleNext} 
                    onBack={handleBack} 
                />
            </div>
        </div>
      
    )
}

export default Form