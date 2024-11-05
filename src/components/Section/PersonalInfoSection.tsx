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
            <div className="border-b border-black">
                <h2 className="text-3xl font-bold pb-2">{firstName} {lastName}</h2>
                <div className="flex flex-col leading-5">
                    <span>{address} </span>
                    <span>{city}, {personalInfo.postalCode}</span>
                    <span>{personalInfo.email}</span>
                    <span>{personalInfo.phone}</span>
                </div>
            </div>
        </section>
    )
}

export default PersonalInfoSection