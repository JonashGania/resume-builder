import { render, screen } from '@testing-library/react'
import Form from '../../../src/components/Form/Form'
import userEvent from '@testing-library/user-event';

vi.mock('../../../src/components/Form/PersonalInfoForm', () => ({
    default: ({ onChange }) => <div data-testid="personal-info-form ">Personal Information</div>
}))

vi.mock('../../../src/components/Form/EducationForm', () => ({
    default: ({ onChange }) => <div data-testid="education-form ">Education</div>
}))

vi.mock('../../../src/components/Form/ExperienceForm', () => ({
    default: () => <div data-testid="experience-form ">Experience</div>
}))

vi.mock('../../../src/components/Form/SkillsForm', () => ({
    default: () => <div data-testid="Skills-form ">Skills</div>
}))

vi.mock('../../../src/components/Buttons/StepsNavigate', () => ({
    default: ({ isFirstStep, isLastStep, onNext, onBack }) => (
        <div>
            <button disabled={isFirstStep} onClick={onBack} data-testid="back-button">Back</button>
            <button disabled={isLastStep} onClick={onNext} data-testid="next-button">Next</button>
        </div>
    )
}))
const mockInputChange = vi.fn();
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
}

describe('Form', () => {
    it('should render the first step by default and "Back" button is disabled', () => {
        render(<Form formData={mockFormData} onInputChange={mockInputChange}/>)
        const personalInfo = screen.getByTestId("personal-info-form");
        expect(personalInfo).toBeInTheDocument();

        const backButton = screen.getByRole('button', {name: /back/i});
        expect(backButton).toBeDisabled();
    })

    it('should navigate to the next step when "Next" button is clicked', async () => {
        const user = userEvent.setup();
        render(<Form formData={mockFormData} onInputChange={mockInputChange}/>)

        expect(screen.getByTestId("personal-info-form")).toBeInTheDocument();

        const button = screen.getByRole('button', {name: /Next/i});
        await user.click(button);

        expect(screen.getByTestId("education-form")).toBeInTheDocument();
    })

    it('should navigate to the previous step when "Back" button is clicked', async () => {
        const user = userEvent.setup();
        render(<Form formData={mockFormData} onInputChange={mockInputChange}/>)

        expect(screen.getByTestId("personal-info-form")).toBeInTheDocument();
    
        const nextButton = screen.getByRole('button', {name: /Next/i});
        await user.click(nextButton);

        expect(screen.getByTestId("education-form")).toBeInTheDocument();

        const backButton = screen.getByRole('button', {name: /Back/i});
        await user.click(backButton);

        expect(screen.getByTestId("personal-info-form")).toBeInTheDocument();
    })
})