import { useState } from "react";
import Form from "./Form/Form"
import ResumePreview from "./Preview/ResumePreview"
import { FormData } from "../interface/types";

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
    experienceInfo: {
        position: '',
        companyName: '',
        companyCity: '',
        startDate: '',
        endDate: '',
        jobDescription: '',
    }
}

const ResumeBuilder = () => {
    const [formData, setFormData] = useState<FormData>(initialFormData);

    const handleInputChange = (section: keyof FormData, field: string, value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [section]: { ...prevData[section], [field]: value},
        }))
    }

    return (
        <div className="w-full flex gap-6 pt-8">
            <Form formData={formData} onInputChange={handleInputChange}/>
            <ResumePreview formData={formData}/>
        </div>
    )
}

export default ResumeBuilder