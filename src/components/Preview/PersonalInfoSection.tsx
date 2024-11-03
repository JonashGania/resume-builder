import React from "react";
import { PersonalInfo } from "../../interface/types";
import { capitalizeWords } from "../../helpers/utils";

interface PersonalInfoProps {
    personalInfo: PersonalInfo;
}

const PersonalInfoSection: React.FC<PersonalInfoProps> = ({ personalInfo }) => {
    const firstName = capitalizeWords(personalInfo.firstName);
    const lastName = capitalizeWords(personalInfo.lastName);
    const address = capitalizeWords(personalInfo.address);
    const city = capitalizeWords(personalInfo.city);

    return (
        <section className="w-full">
            <h2 className="text-center text-xl border-black border-b font-bold">{firstName} {lastName}</h2>
            <div className="text-center">
                <span>{address} </span>
                <span>• {city}, {personalInfo.postalCode} </span>
                <span>• {personalInfo.email} </span>
                <span>• {personalInfo.phone}</span>
            </div>
        </section>
    )
}

export default PersonalInfoSection