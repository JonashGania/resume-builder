import React from "react"
import { ExperienceInfo } from "../../interface/types"
import { formattedDate } from "../../helpers/utils"

interface ExperienceSectionProps {
    experienceInfo: ExperienceInfo
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experienceInfo }) => {
    const startDate = formattedDate(experienceInfo.startDate);
    const endDate = formattedDate(experienceInfo.endDate);

    return (
        <section className="w-full pt-8">
            <h2 className="text-center font-bold pb-2">Experience</h2>
            <div className="pb-8">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-lg font-bold leading-5">{experienceInfo.companyName}</h2>
                        <h4>{experienceInfo.position}</h4>
                    </div>
                    <div className="text-end">
                        <h4 className="leading-5">{experienceInfo.companyCity}</h4>
                        <h4>{startDate} - {endDate}</h4>
                    </div>
                </div>
                <div>
                    <span><i>Job Description</i></span>
                    <p className="pl-8">{experienceInfo.jobDescription}</p>
                </div>
            </div>


        </section>
    )
}

export default ExperienceSection