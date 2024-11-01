import React from "react";
import { PersonalInfo } from "../../interface/types";

interface PersonalInfoProps {
    personalInfo: PersonalInfo;
}

const PersonalInfoSection: React.FC<PersonalInfoProps> = ({ personalInfo }) => {
    return (
        <section className="w-full">
            <h2 className="text-center text-xl border-black border-b font-bold">{personalInfo.firstName} {personalInfo.lastName}</h2>
            <div className="text-center">
                <span>{personalInfo.address} </span>
                <span>• {personalInfo.city}, {personalInfo.postalCode} </span>
                <span>• {personalInfo.email} </span>
                <span>• {personalInfo.phone}</span>
            </div>
        </section>
    )
}

export default PersonalInfoSection