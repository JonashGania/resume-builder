import AddButton from "../Buttons/AddButton"

const SkillsForm = () => {
    return (
        <div>
            <div>
                <h2 className="text-xl font-bold">Techinical Skills</h2>
                <div className="flex flex-col gap-2">
                    <input 
                        type="text" 
                        placeholder="Skills" 
                        className="w-full mt-1 border rounded-sm border-gray-300 px-2 py-2 outline-none text-slate-600 focus:border-slate-600 text-ellipsis"
                    />
                </div>
                <AddButton addText="Skills"/>
            </div>
           
            <div className="pt-12">
                <h2 className="text-xl font-bold">Personal Skills</h2>
                <div className="flex flex-col gap-2">
                    <input 
                        type="text" 
                        placeholder="Skills" 
                        className="w-full mt-1 border rounded-sm border-gray-300 px-2 py-2 outline-none text-slate-600 focus:border-slate-600 text-ellipsis"
                    />
                </div>
                <AddButton addText="Skills"/>
            </div>
        </div>
    )
}

export default SkillsForm