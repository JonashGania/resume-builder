import React from "react";
import { EducationInfo } from "../../interface/types"

interface EducationSectionProps {
    educationInfo: EducationInfo;
}

const EducationSection: React.FC<EducationSectionProps> = ({ educationInfo }) => {
    return (
        <section className="w-full pt-8">
            <h2 className="text-center font-bold pb-2">Education</h2>
            <div className="flex justify-between">
                <div>
                    <h2 className="text-lg font-bold leading-5">{educationInfo.schoolName}</h2>
                    <h4 className="leading-5">{educationInfo.degree}</h4>
                    <h4 className="leading-5"><i>{educationInfo.major}</i></h4>
                </div>
                <div className="text-end">
                    <h4>{educationInfo.location}</h4>
                    <h4>{educationInfo.gradMonth} {educationInfo.gradYear}</h4>
                </div>
            </div>
        </section>
    )
}

export default EducationSection