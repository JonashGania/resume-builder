import React from "react";
import { EducationInfo } from "../../interface/types"
import { capitalizeWords } from "../../helpers/utils";

interface EducationSectionProps {
    educationInfo: EducationInfo;
}

const EducationSection: React.FC<EducationSectionProps> = ({ educationInfo }) => {
    const schoolName = capitalizeWords(educationInfo.schoolName);
    const location = capitalizeWords(educationInfo.location);
    const degree = capitalizeWords(educationInfo.degree);
    const major = capitalizeWords(educationInfo.major);

    return (
        <section data-testid="education-section" className="w-full pt-4">
            <h2 className="text-center font-bold pb-2">Education</h2>
            <div className="flex justify-between">
                <div>
                    <h2 className="text-lg font-bold leading-5">{schoolName}</h2>
                    <h4 className="leading-5">{degree}</h4>
                    <h4 className="leading-5"><i>{major}</i></h4>
                </div>
                <div className="text-end">
                    <h4>{location}</h4>
                    <h4>{educationInfo.gradMonth} {educationInfo.gradYear}</h4>
                </div>
            </div>
        </section>
    )
}

export default EducationSection