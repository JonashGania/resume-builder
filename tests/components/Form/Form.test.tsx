import { fireEvent, getByText, render, screen } from '@testing-library/react'
import Form from '../../../src/components/Form/Form'
import userEvent from '@testing-library/user-event';

describe('Form', () => {
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

    it('should render the first step by default and "Back" button is disabled', () => {
        render(<Form formData={mockFormData} onInputChange={mockInputChange}/>)
        const personalInfo = screen.getByText(/personal information/i);
        expect(personalInfo).toBeInTheDocument();

        const backButton = screen.getByRole('button', {name: /back/i});
        expect(backButton).toBeDisabled();
    })

    it('should navigate to the next step when "Next" button is clicked', async () => {
        render(<Form formData={mockFormData} onInputChange={mockInputChange}/>)
        const button = screen.getByRole('button', {name: /Next/i});
        const user = userEvent.setup();

        await user.click(button);
        expect(screen.getByText(/education/i)).toBeInTheDocument();
    })

    it('should navigate to the previous step when "Back" button is clicked', async () => {
        render(<Form formData={mockFormData} onInputChange={mockInputChange}/>)
        const nextButton = screen.getByRole('button', {name: /Next/i});
        const backButton = screen.getByRole('button', {name: /Back/i});
        const user = userEvent.setup();

        await user.click(nextButton);

        await user.click(backButton);

        expect(screen.getByText(/personal information/i)).toBeInTheDocument();
    })


})