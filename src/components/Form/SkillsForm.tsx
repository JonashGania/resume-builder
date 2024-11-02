import React, { useState } from "react"
import AddButton from "../Buttons/AddButton"
import { SkillsInfo } from "../../interface/types"

interface SkillsFormProps {
    skillsData: SkillsInfo
}

const SkillsForm: React.FC<SkillsFormProps> = ({ skillsData }) => {
    const [inputsTS, setInputsTS] = useState(skillsData.technicalSkills);
    const [inputsPS, setInputsPS] = useState(skillsData.personalSkills);

    const inputChangeTS = (index: number, value: string) => {
        const newValues = [...inputsTS];
        newValues[index] = value;
        setInputsTS(newValues);
    }

    const inputChangePS = (index: number, value: string) => {
        const newValues = [...inputsPS];
        newValues[index] = value;
        setInputsPS(newValues);
    }

    const handleAddTSInputs = () => {
        setInputsTS([...inputsTS, '']);
    }

    const handleAddPSInputs = () => {
        setInputsPS([...inputsPS, '']);
    }

    console.log(inputsPS)

    return (
        <div>
            <div>
                <h2 className="text-xl font-bold">Techinical Skills</h2>
                <div className="flex flex-col gap-2">
                    {inputsTS.map((value, index)  =>(
                        <input
                            key={index} 
                            type="text"
                            value={value}
                            onChange={(e) => inputChangeTS(index, e.target.value)} 
                            placeholder="Skills" 
                            className="w-full mt-1 border rounded-sm border-gray-300 px-2 py-2 outline-none text-slate-600 focus:border-slate-600 text-ellipsis"
                        />
                    ))}
                </div>

                <AddButton 
                    addText="Skills" 
                    handleClick={handleAddTSInputs}
                />
            </div>
           
            <div className="pt-12">
                <h2 className="text-xl font-bold">Personal Skills</h2>
                <div className="flex flex-col gap-2">
                    {inputsPS.map((value,index) => (
                        <input
                            key={index} 
                            type="text"
                            value={value}
                            onChange={(e) => inputChangePS(index, e.target.value)} 
                            placeholder="Skills" 
                            className="w-full mt-1 border rounded-sm border-gray-300 px-2 py-2 outline-none text-slate-600 focus:border-slate-600 text-ellipsis"
                        />
                    ))}
                </div>
                <AddButton 
                    addText="Skills" 
                    handleClick={handleAddPSInputs}
                />
            </div>
        </div>
    )
}

export default SkillsForm