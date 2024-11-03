export interface PersonalInfo {
    firstName: string, 
    lastName: string, 
    email: string, 
    phone: string, 
    address: string, 
    city: string, 
    postalCode: string
}

export interface EducationInfo {
    schoolName: string, 
    location: string, 
    degree: string, 
    major: string, 
    gradMonth: string, 
    gradYear: string,
}

export interface ExperienceInfo{
    position: string,
    companyName: string,
    companyCity: string,
    startDate: string,
    endDate: string,
    jobDescription: string,
    workingHere: boolean,
}

export interface FormData{
    personalInfo: PersonalInfo;
    educationInfo: EducationInfo;
}