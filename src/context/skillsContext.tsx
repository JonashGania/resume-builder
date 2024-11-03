import React, { createContext, ReactNode, useContext, useState } from "react";

interface Children{
    children: ReactNode
}

interface SkillsContextProps{
    technicalSkills: string[], 
    personalSkills: string[], 
    handleTechnicalSkills: (index: number, value: string) => void, 
    handlePersonalSkills: (index: number, value: string) => void, 
    addTechnicalSkills: () => void, 
    addPersonalSkills: () => void,
}


const SkillsContext = createContext<SkillsContextProps | undefined>(undefined);

export const useSkills = () => {    // custom hook for using Skills Context
    const context = useContext(SkillsContext);
    if (!context) {
        throw new Error('useSkills must be used within an SkillsProvider')
    }
    return context
}

export const SkillsProvider: React.FC<Children> = ({ children }) => {
    const [technicalSkills, setTechnicalSkills] = useState(['']);
    const [personalSkills, setPersonalSkills] = useState(['']);

    const handleTechnicalSkills = (index: number, value: string) => {
        const newValues = [...technicalSkills];
        newValues[index] = value;
        setTechnicalSkills(newValues);
    }

    const handlePersonalSkills = (index: number, value: string) => {
        const newValues = [...personalSkills];
        newValues[index] = value;
        setPersonalSkills(newValues);
    }

    const addTechnicalSkills = () => {
        setTechnicalSkills([...technicalSkills, '']);
    }

    const addPersonalSkills = () => {
        setPersonalSkills([...personalSkills, '']);
    }

    return (
        <SkillsContext.Provider value={{ technicalSkills, personalSkills, handleTechnicalSkills, handlePersonalSkills, addTechnicalSkills, addPersonalSkills }}>
            {children}
        </SkillsContext.Provider>
    )
}