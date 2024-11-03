import React from "react";
import { formattedDate } from "../../helpers/utils";
import { ExperienceInfo } from "../../interface/types";
import { capitalizeWords } from "../../helpers/utils";

interface MapExperiencesProps {
    experienceInfo: ExperienceInfo
}

const MapExperiences: React.FC<MapExperiencesProps> = ({ experienceInfo }) => {
    const startDate = formattedDate(experienceInfo.startDate);
    const endDate = formattedDate(experienceInfo.endDate);
    const position = capitalizeWords(experienceInfo.position);
    const location = capitalizeWords(experienceInfo.companyCity)

    return (
        <div className="pb-8">
            <div className="flex justify-between">
                <div>
                    <h2 className="text-lg font-bold leading-5">{experienceInfo.companyName}</h2>
                    <h4>{position}</h4>
                </div>
                <div className="text-end">
                    <h4 className="leading-5">{location}</h4>
                    <h4>{startDate} - {experienceInfo.workingHere ? "Current" : endDate}</h4>
                </div>
            </div>
            <div>
                <span><i>Job Description</i></span>
                <p className="pl-8 w-full break-words">{experienceInfo.jobDescription}</p>
            </div>
        </div>
    )
}

export default MapExperiences