import AddButton from "../Buttons/AddButton"
import { useSkills } from "../../context/skillsContext"

const SkillsForm = () => {
    const { technicalSkills, personalSkills, handleTechnicalSkills, handlePersonalSkills, addTechnicalSkills, addPersonalSkills } = useSkills()

    return (
        <div>
            <div>
                <h2 className="text-xl font-bold">Technical Skills</h2>
                <div className="flex flex-col gap-2">
                    {technicalSkills.map((value, index)  =>(
                        <input
                            key={index}
                            data-testid="technicalSkills" 
                            type="text"
                            value={value}
                            onChange={(e) => handleTechnicalSkills(index, e.target.value)} 
                            placeholder="Skills" 
                            className="w-full mt-1 border rounded-sm border-gray-300 px-2 py-2 outline-none text-slate-600 focus:border-slate-600 text-ellipsis"
                        />
                    ))}
                </div>

                <AddButton 
                    addText="Skills" 
                    handleClick={addTechnicalSkills}
                />
            </div>
           
            <div className="pt-12">
                <h2 className="text-xl font-bold">Personal Skills</h2>
                <div className="flex flex-col gap-2">
                    {personalSkills.map((value,index) => (
                        <input
                            key={index}
                            data-testid="personalSkills" 
                            type="text"
                            value={value}
                            onChange={(e) => handlePersonalSkills(index, e.target.value)} 
                            placeholder="Skills" 
                            className="w-full mt-1 border rounded-sm border-gray-300 px-2 py-2 outline-none text-slate-600 focus:border-slate-600 text-ellipsis"
                        />
                    ))}
                </div>
                <AddButton 
                    addText="Skills" 
                    handleClick={addPersonalSkills}
                />
            </div>
        </div>
    )
}

export default SkillsForm