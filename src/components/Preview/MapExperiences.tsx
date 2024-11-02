import React from "react";
import { formattedDate } from "../../helpers/utils";
import { ExperienceInfo } from "../../interface/types";
import { useExperience } from "../../context/context";

interface MapExperiencesProps {
    experienceInfo: ExperienceInfo
}

const MapExperiences: React.FC<MapExperiencesProps> = ({ experienceInfo }) => {
    const startDate = formattedDate(experienceInfo.startDate);
    const endDate = formattedDate(experienceInfo.endDate);

    const { workingHere } = useExperience();

    return (
        <div className="pb-8">
            <div className="flex justify-between">
                <div>
                    <h2 className="text-lg font-bold leading-5">{experienceInfo.companyName}</h2>
                    <h4>{experienceInfo.position}</h4>
                </div>
                <div className="text-end">
                    <h4 className="leading-5">{experienceInfo.companyCity}</h4>
                    <h4>{startDate} - {workingHere ? "Current" : endDate}</h4>
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