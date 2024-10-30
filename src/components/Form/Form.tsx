import PersonalInfo from "./PersonalInfo"
import Education from "./Education"
import StepsNavigate from "../StepsNavigate"

const Form = () => {
    return (
        <div className="w-2/5 bg-white px-8 pt-8 pb-6 rounded-md min-h-[550px] flex flex-col justify-between">
            <Education />
            <StepsNavigate />
        </div>
    )
}

export default Form