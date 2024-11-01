import AddButton from "../Buttons/AddButton"
import React from "react";
import { ExperienceInfo } from "../../interface/types"
import { FormData } from "../../interface/types";

interface ExperienceFormProps {
    experienceData: ExperienceInfo,
    onChange: (section: keyof FormData, field: string, value: string) => void;
}

const ExperienceForm: React.FC<ExperienceFormProps> = ({ experienceData, onChange }) => {
    return (
        <div>
            <h2 className="text-xl font-bold pb-4">Experience</h2>
            <div className="flex flex-col gap-2">
                <div>
                    <input 
                        type="text" 
                        id="job-title" 
                        placeholder="Position"
                        value={experienceData.position}
                        onChange={(e) => onChange('experienceInfo', 'position', e.target.value)}
                        className="w-full mt-1 border rounded-sm border-gray-300 px-2 py-2 outline-none text-slate-600 focus:border-slate-600 text-ellipsis"
                    />
                </div>
                <div >
                    <input 
                        type="text" 
                        id="company" 
                        placeholder="Company/Organization"
                        value={experienceData.companyName}
                        onChange={(e) => onChange('experienceInfo', 'companyName', e.target.value)} 
                        className="w-full mt-1 border rounded-sm border-gray-300 px-2 py-2 outline-none text-slate-600 focus:border-slate-600 text-ellipsis"
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        id="company-location" 
                        placeholder="Company City/State"
                        value={experienceData.companyCity}
                        onChange={(e) => onChange('experienceInfo', 'companyCity', e.target.value)} 
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
                            value={experienceData.startDate}
                            onChange={(e) => onChange('experienceInfo', 'startDate', e.target.value)} 
                            className="w-full mt-1 border rounded-sm border-gray-300 px-2 py-2 outline-none text-slate-600 focus:border-slate-600 text-ellipsis"
                        />
                    </div>
                    <div className="w-1/2 flex flex-col">
                        <span>End Date</span>
                        <input 
                            type="text" 
                            id="end-date" 
                            placeholder="MM/DD/YYYY"
                            value={experienceData.endDate}
                            onChange={(e) => onChange('experienceInfo', 'endDate', e.target.value)} 
                            className="w-full mt-1 border rounded-sm border-gray-300 px-2 py-2 outline-none text-slate-600 focus:border-slate-600 text-ellipsis"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 cursor-pointer"/>
                    <span className="text-md text-slate-600">I currently work here</span>
                </div>
                <div>
                    <textarea 
                        id="job-description" 
                        placeholder="Job Description" 
                        cols={30}
                        rows={3}
                        value={experienceData.jobDescription}
                        onChange={(e) => onChange('experienceInfo', 'jobDescription', e.target.value)}
                        className="w-full border rounded-sm border-gray-300 px-2 py-2 outline-none text-slate-600 focus:border-slate-600 resize-none"
                    >
                    </textarea>
                </div>
            </div>
            <div>
                <AddButton addText="Experience"/>
            </div>
        </div>
    )
}

export default ExperienceForm