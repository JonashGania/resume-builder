import React from "react";
import { FormData } from "../../interface/types";
import { PersonalInfo } from "../../interface/types";

interface PersonalInfoProps {
    data: PersonalInfo;
    onChange: (section: keyof FormData, field: string, value: string) => void;
}

const PersonalInfoForm: React.FC<PersonalInfoProps> = ({ data, onChange }) => {

    return (
        <div>
            <h2 className="text-xl font-bold pb-4">Personal Information</h2>
            <div className="flex flex-col gap-4">
                <div className="flex w-full gap-4 flex-col mobile:flex-row">
                    <div className="mobile:w-1/2 w-full">
                        <label htmlFor="firstName" className=" text-slate-600">First Name</label>
                        <input 
                            type="text"
                            value={data.firstName} 
                            id="firstName"
                            data-testid="firstName" 
                            onChange={(e) => onChange('personalInfo', 'firstName', e.target.value)}
                            className="w-full mt-1 border rounded-sm border-gray-300 px-2 py-2 outline-none text-slate-600 focus:border-slate-600 text-ellipsis"
                        />
                    </div>
                    <div className="mobile:w-1/2 w-full">
                        <label htmlFor="lastName" className=" text-slate-600">Last Name</label>
                        <input 
                            type="text" 
                            id="lastName" 
                            data-testid="lastName"
                            value={data.lastName} 
                            onChange={(e) => onChange('personalInfo', 'lastName', e.target.value)} 
                            className="w-full mt-1 border rounded-sm border-gray-300 px-2 py-2 outline-none text-slate-600 focus:border-slate-600 text-ellipsis"
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-slate-600">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        data-testid="email"
                        value={data.email} 
                        onChange={(e) => onChange('personalInfo', 'email', e.target.value)} 
                        className="w-full mt-1 border rounded-sm border-gray-300 px-2 py-2 outline-none text-slate-600 focus:border-slate-600 text-ellipsis" 
                        autoComplete="off"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="phone" className="text-slate-600">Phone</label>
                    <input 
                        type="tel" 
                        id="phone"
                        data-testid="phone" 
                        value={data.phone}
                        inputMode="numeric"
                        pattern="[0-9]*"
                        onChange={(e) => onChange('personalInfo', 'phone', e.target.value.replace(/[^0-9]/g, ''))} 
                        className="w-full mt-1 border rounded-sm border-gray-300 px-2 py-2 outline-none text-slate-600 focus:border-slate-600 text-ellipsis"
                    />
                </div>
                <div className="flex w-full gap-4 flex-col mobile:flex-row">
                    <div className="mobile:w-1/2 w-full">
                        <label htmlFor="address" className="text-slate-600">Address</label>
                        <input 
                            type="text" 
                            id="address"
                            data-testid="address" 
                            value={data.address} 
                            onChange={(e) => onChange('personalInfo', 'address', e.target.value)} 
                            className="w-full mt-1 border rounded-sm border-gray-300 px-2 py-2 outline-none text-slate-600 focus:border-slate-600 text-ellipsis"
                        />
                    </div>
                    <div className="mobile:w-1/2 w-full flex gap-2">
                        <div className="mobile:w-1/2 w-full">
                            <label htmlFor="city" className="text-slate-600">City</label>
                            <input 
                                type="text" 
                                id="city"
                                data-testid="city" 
                                value={data.city} 
                                onChange={(e) => onChange('personalInfo', 'city', e.target.value)} 
                                className="w-full mt-1 border rounded-sm border-gray-300 px-2 py-2 outline-none text-slate-600 focus:border-slate-600 text-ellipsis"
                            />
                        </div>
                        <div className="mobile:w-1/2 w-full">
                            <label htmlFor="postal-code" className="text-slate-600">Postal Code</label>
                            <input 
                                type="text" 
                                id="postal-code"
                                data-testid="postal-code" 
                                value={data.postalCode} 
                                onChange={(e) => onChange('personalInfo', 'postalCode', e.target.value)} 
                                className="w-full mt-1 border rounded-sm border-gray-300 px-2 py-2 outline-none text-slate-600 focus:border-slate-600 text-ellipsis"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfoForm;