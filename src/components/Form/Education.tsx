import Dropdown from "../Dropdown/Dropdown";
import { data } from "../../data/data";

const Education = () => {
    return (
        <div>
            <h2 className="text-xl font-bold pb-4">Education</h2>
            <div className="flex flex-col gap-4">
                <div>
                    <label htmlFor="school-name">School Name</label>
                    <input type="text" id="school-name" className="w-full mt-1 border rounded-sm border-gray-300 px-2 py-2 outline-none text-slate-600 focus:border-slate-600 text-ellipsis"/>
                </div>
                <div>
                    <label htmlFor="school-location">School Location</label>
                    <input type="text" id="school-location" className="w-full mt-1 border rounded-sm border-gray-300 px-2 py-2 outline-none text-slate-600 focus:border-slate-600 text-ellipsis"/>
                </div>
                <div>
                    <label htmlFor="degree">Degree</label>
                    <input type="text" id="degree" className="w-full mt-1 border rounded-sm border-gray-300 px-2 py-2 outline-none text-slate-600 focus:border-slate-600 text-ellipsis"/>
                </div>
                <div>
                    <label htmlFor="major">Major/Field of Study</label>
                    <input type="text" id="major" className="w-full mt-1 border rounded-sm border-gray-300 px-2 py-2 outline-none text-slate-600 focus:border-slate-600 text-ellipsis"/>
                </div>
                <div>
                    <span>Graduation Date</span>
                    <div className="w-full flex gap-4 mt-1">
                        <div className="w-1/2">
                            <Dropdown options={data.months}  selectSpan={'Month'}/>
                        </div>
                        <div className="w-1/2">
                            <Dropdown options={data.years} selectSpan={'Year'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;