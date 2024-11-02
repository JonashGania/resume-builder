import React, { createContext, ReactNode, useContext, useState } from "react"
import { ExperienceInfo } from "../interface/types"

interface Children {
    children: ReactNode;
}

interface ExperienceContextProps {
    experiences: ExperienceInfo[];
    currentExperience: ExperienceInfo;
    workingHere: boolean;
    setCurrentExperience: (experience: ExperienceInfo) => void;
    addExperience: () => void;
    handleCurrentlyWorkHere: () => void;
}

const ExperienceContext = createContext<ExperienceContextProps | undefined>(undefined);

export const useExperience = () => {    // custom hook
    const context = useContext(ExperienceContext);
    if (!context) {
        throw new Error("useExperience must be used within an ExperienceProvider");
    }
    return context;
}

export const ExperienceProvider: React.FC<Children> = ({ children }) => {
    const [experiences, setExperiences] = useState<ExperienceInfo[]>([]);
    const [workingHere, setWorkingHere] = useState(false);
    const [currentExperience, setCurrentExperience] = useState<ExperienceInfo>({
        position: '',
        companyName: '',
        companyCity: '',
        startDate: '',
        endDate: '',
        jobDescription: '',
    })

    const addExperience = () => {
        setExperiences([...experiences, currentExperience]);
        setCurrentExperience({
            position: '',
            companyName: '',
            companyCity: '',
            startDate: '',
            endDate: '',
            jobDescription: '',
        })
    }

    const handleCurrentlyWorkHere = () => {
        setWorkingHere(!workingHere);
    }

    return (
        <ExperienceContext.Provider value={{ experiences, currentExperience, workingHere, setCurrentExperience, addExperience, handleCurrentlyWorkHere }}>
            {children}
        </ExperienceContext.Provider>
    )
}