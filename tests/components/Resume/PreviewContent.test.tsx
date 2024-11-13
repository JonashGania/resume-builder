import { render, screen } from '@testing-library/react'
import PreviewContent from '../../../src/components/PreviewContent'
import { ExperienceProvider } from '../../../src/context/experienceContext';
import { SkillsProvider } from '../../../src/context/skillsContext';
import userEvent from '@testing-library/user-event';

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
const mockHandleClosePreview = vi.fn();

describe('PreviewContent', () => {
    it('should render overlay when isOpen is true', () => {
        render(
            <SkillsProvider>
                <ExperienceProvider>
                    <PreviewContent formData={mockFormData} isOpen={true} handleClosePreview={mockHandleClosePreview}/>
                </ExperienceProvider>
            </SkillsProvider>
        )

        const overlay = screen.getByTestId('preview-overlay');
        expect(overlay).toHaveClass('open');

        expect(screen.getByTestId('resume-preview')).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /Download PDF/i })).toBeInTheDocument();
    })

    it('should not render overlay with open class when isOpen is false', () => {
        render(
            <SkillsProvider>
                <ExperienceProvider>
                    <PreviewContent formData={mockFormData} isOpen={false} handleClosePreview={mockHandleClosePreview}/>
                </ExperienceProvider>
            </SkillsProvider>
        )

        const overlay = screen.getByTestId('preview-overlay');
        expect(overlay).not.toHaveClass('open');
    })

    it('should calls handleClosePreview when close button is clicked', async () => {
        const user = userEvent.setup()
        render(
            <SkillsProvider>
                <ExperienceProvider>
                    <PreviewContent formData={mockFormData} isOpen={false} handleClosePreview={mockHandleClosePreview}/>
                </ExperienceProvider>
            </SkillsProvider>
        )

        const button = screen.getByRole('button', {name: /close/i});

        await user.click(button);
        expect(mockHandleClosePreview).toHaveBeenCalled();
    })
})