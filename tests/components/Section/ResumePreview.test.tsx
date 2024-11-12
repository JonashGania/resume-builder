import { render, screen } from '@testing-library/react'
import ResumePreview from '../../../src/components/Section/ResumePreview'
import { ExperienceProvider } from '../../../src/context/experienceContext';
import { SkillsProvider } from '../../../src/context/skillsContext';

describe('ResumePreview', () => {
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

    it('should render all resume sections', () => {
        render(
            <SkillsProvider>
                <ExperienceProvider>
                    <ResumePreview resumeRef={mockResumeRef} formData={mockFormData}/>
                </ExperienceProvider>
            </SkillsProvider>
        )

        expect(screen.getByTestId('personalInfo-section')).toBeInTheDocument();
        expect(screen.getByTestId('education-section')).toBeInTheDocument();
        expect(screen.getByTestId('experience-section')).toBeInTheDocument();
        expect(screen.getByTestId('skills-section')).toBeInTheDocument();
    })
})