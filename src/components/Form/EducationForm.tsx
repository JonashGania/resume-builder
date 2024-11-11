import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import { data } from "../../data/data";
import { EducationInfo } from "../../interface/types";
import { FormData } from "../../interface/types";

interface EducationFormProps {
    educationData: EducationInfo;
    onChange: (section: keyof FormData, field: string, value: string) => void;
}

const EducationForm: React.FC<EducationFormProps> = ({ educationData, onChange }) => {
    return (
        <div>
            <h2 className="text-xl font-bold pb-4">Education</h2>
            <div className="flex flex-col gap-2">
                <div>
                    <input 
                        type="text" 
                        id="school-name"
                        data-testid='school-name' 
                        placeholder="School/University"
                        value={educationData.schoolName}
                        onChange={(e) => onChange('educationInfo', 'schoolName', e.target.value)}
                        className="w-full mt-1 border rounded-sm border-gray-300 px-2 py-2 outline-none text-slate-600 focus:border-slate-600 text-ellipsis"
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        id="school-location"
                        data-testid='school-location'
                        placeholder="Location"
                        value={educationData.location}
                        onChange={(e) => onChange('educationInfo', 'location', e.target.value)} 
                        className="w-full mt-1 border rounded-sm border-gray-300 px-2 py-2 outline-none text-slate-600 focus:border-slate-600 text-ellipsis"
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        id="degree"
                        data-testid='degree' 
                        placeholder="Degree" 
                        value={educationData.degree}
                        onChange={(e) => onChange('educationInfo', 'degree', e.target.value)}
                        className="w-full mt-1 border rounded-sm border-gray-300 px-2 py-2 outline-none text-slate-600 focus:border-slate-600 text-ellipsis"
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        id="major"
                        data-testid='major' 
                        placeholder="Major/Field of Study" 
                        value={educationData.major}
                        onChange={(e) => onChange('educationInfo', 'major', e.target.value)}
                        className="w-full mt-1 border rounded-sm border-gray-300 px-2 py-2 outline-none text-slate-600 focus:border-slate-600 text-ellipsis"
                    />
                </div>
                <div className="pt-4">
                    <span>Graduation Date</span>
                    <div className="w-full flex-col mobile:flex-row flex gap-4 mt-1">
                        <div className="mobile:w-1/2 w-full">
                            <Dropdown 
                                options={data.months} 
                                selectSpan={'Month'} 
                                section="educationInfo" 
                                field="gradMonth" 
                                onChange={onChange}
                            />
                        </div>
                        <div className="mobile:w-1/2 w-full">
                            <Dropdown 
                                options={data.years} 
                                selectSpan={'Year'} 
                                section="educationInfo" 
                                field="gradYear" 
                                onChange={onChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationForm;