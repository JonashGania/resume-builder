import { render, screen } from '@testing-library/react'
import ResumePreview from '../../../src/components/Section/ResumePreview'

vi.mock('../../../src/components/Section/PersonalInfoSection', () => ({ 
    default: ({ personalInfo }) => <div data-testid="personal-info-section">Personal Information</div>
}))

vi.mock('../../../src/components/Section/EducationSection', () => ({
    default: ({ educationInfo }) => <div data-testid="education-section">Education</div>
}))

vi.mock('../../../src/components/Section/ExperienceSection', () => ({
    default: () => <div data-testid="experience-section">Experience</div>
}))

vi.mock('../../../src/components/Section/SkillsSection', () => ({
    default: () => <div data-testid="skills-section">Skills</div>
}))

const mockResumeRef = { current: null };
const mockFormData = {
    personalInfo: {
        firstName: '', 
        lastName: '', 
        email: '', 
        phone: '', 
        address: '', 
        city: '', 
        postalCode: ''
    },
    educationInfo: {
        schoolName: '', 
        location: '', 
        degree: '', 
        major: '',
        gradMonth: '', 
        gradYear: ''
    },
};

describe('ResumePreview', () => {
    it('should render all resume sections', () => {
        render(<ResumePreview resumeRef={mockResumeRef} formData={mockFormData}/>)

        expect(screen.getByTestId('personal-info-section')).toBeInTheDocument();
        expect(screen.getByTestId('education-section')).toBeInTheDocument();
        expect(screen.getByTestId('experience-section')).toBeInTheDocument();
        expect(screen.getByTestId('skills-section')).toBeInTheDocument();
    })
})