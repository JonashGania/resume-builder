import AddButton from "../Buttons/AddButton"
import { ExperienceInfo } from "../../interface/types"
import { useExperience } from "../../context/experienceContext";

const ExperienceForm = () => {
    const {currentExperience, setCurrentExperience, addExperience, handleCurrentlyWorkHere} = useExperience();

    const handleChange = (field: keyof ExperienceInfo, value: string) => {
        setCurrentExperience({...currentExperience, [field]: value});
    }

    return (
        <div>
            <h2 className="text-xl font-bold pb-4">Experience</h2>
            <div className="flex flex-col gap-2">
                <div>
                    <input 
                        type="text" 
                        id="job-title" 
                        placeholder="Position"
                        value={currentExperience.position}
                        onChange={(e) => handleChange('position', e.target.value)}
                        className="w-full mt-1 border rounded-sm border-gray-300 px-2 py-2 outline-none text-slate-600 focus:border-slate-600 text-ellipsis"
                    />
                </div>
                <div >
                    <input 
                        type="text" 
                        id="company" 
                        placeholder="Company/Organization"
                        value={currentExperience.companyName}
                        onChange={(e) => handleChange('companyName', e.target.value)} 
                        className="w-full mt-1 border rounded-sm border-gray-300 px-2 py-2 outline-none text-slate-600 focus:border-slate-600 text-ellipsis"
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        id="company-location" 
                        placeholder="Company City/State"
                        value={currentExperience.companyCity}
                        onChange={(e) => handleChange('companyCity', e.target.value)} 
                        className="w-full mt-1 border rounded-sm border-gray-300 px-2 py-2 outline-none text-slate-600 focus:border-slate-600 text-ellipsis"
                    />
                </div>
                <div className="w-full flex gap-4 mt-4"> 
                    <div className="w-1/2">
                        <span>Start Date</span>
                        <input 
                            type="text" 
                            id="start-date" 
                            placeholder="MM/DD/YYYY"
                            value={currentExperience.startDate}
                            onChange={(e) => handleChange('startDate', e.target.value.replace(/[^0-9/]/g, ''))} 
                            className="w-full mt-1 border rounded-sm border-gray-300 px-2 py-2 outline-none text-slate-600 focus:border-slate-600 text-ellipsis"
                        />
                    </div>
                    <div className="w-1/2 flex flex-col">
                        <span>End Date</span>
                        <input 
                            type="text" 
                            id="end-date" 
                            placeholder="MM/DD/YYYY"
                            value={currentExperience.endDate}
                            disabled={currentExperience.workingHere}
                            onChange={(e) => handleChange('endDate', e.target.value.replace(/[^0-9/]/g, ''))} 
                            className="w-full mt-1 border rounded-sm border-gray-300 px-2 py-2 outline-none text-slate-600 focus:border-slate-600 text-ellipsis"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <input 
                        type="checkbox" 
                        className="w-4 h-4 cursor-pointer"
                        checked={currentExperience.workingHere} 
                        onClick={handleCurrentlyWorkHere}
                    />
                    <span className="text-md text-slate-600">I currently work here</span>
                </div>
                <div>
                    <textarea 
                        id="job-description" 
                        placeholder="Job Description" 
                        cols={30}
                        rows={3}
                        value={currentExperience.jobDescription}
                        onChange={(e) => handleChange('jobDescription', e.target.value)}
                        className="w-full border rounded-sm border-gray-300 px-2 py-2 outline-none text-slate-600 focus:border-slate-600 resize-none"
                    >
                    </textarea>
                </div>
            </div>
            <div>
                <AddButton addText="Experience" handleClick={addExperience}/>
            </div>
        </div>
    )
}

export default ExperienceForm