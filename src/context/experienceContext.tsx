import React, { createContext, ReactNode, useContext, useState } from "react"
import { ExperienceInfo } from "../interface/types"

interface Children {
    children: ReactNode;
}

interface ExperienceContextProps {
    experiences: ExperienceInfo[];
    currentExperience: ExperienceInfo;
    setCurrentExperience: (experience: ExperienceInfo) => void;
    addExperience: () => void;
    handleCurrentlyWorkHere: () => void;
}

export const ExperienceContext = createContext<ExperienceContextProps | undefined>(undefined);

export const useExperience = () => {    // custom hook for using Experience Context
    const context = useContext(ExperienceContext);
    if (!context) {
        throw new Error("useExperience must be used within an ExperienceProvider");
    }
    return context;
}

export const ExperienceProvider: React.FC<Children> = ({ children }) => {
    const [experiences, setExperiences] = useState<ExperienceInfo[]>([]);
    const [currentExperience, setCurrentExperience] = useState<ExperienceInfo>({
        position: '',
        companyName: '',
        companyCity: '',
        startDate: '',
        endDate: '',
        jobDescription: '',
        workingHere: false,
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
            workingHere: false,
        })
    }

    const handleCurrentlyWorkHere = () => {
        setCurrentExperience(prevExperience => ({
            ...prevExperience,
            workingHere: !prevExperience.workingHere,
        }))
    }

    return (
        <ExperienceContext.Provider value={{ experiences, currentExperience, setCurrentExperience, addExperience, handleCurrentlyWorkHere }}>
            {children}
        </ExperienceContext.Provider>
    )
}