import { fireEvent, render, screen } from '@testing-library/react'
import PersonalInfoForm from '../../../src/components/Form/PersonalInfoForm'

describe('PersonalInfoForm', () => {
    const mockOnChange = vi.fn();
    const mockPersonalInfo = {
        firstName: '', 
        lastName: '', 
        email: '', 
        phone: '', 
        address: '', 
        city: '', 
        postalCode: ''
    }

    it('should render inputs with empty values and headings', () => {
        render(<PersonalInfoForm data={mockPersonalInfo} onChange={mockOnChange}/>)

        const heading = screen.getByRole('heading');
        expect(heading).toHaveTextContent('Personal Information');

        const firstNameInput = screen.getByTestId('firstName');
        expect(firstNameInput).toBeInTheDocument();
        expect(firstNameInput).toHaveValue(mockPersonalInfo.firstName);

        const lastNameInput = screen.getByTestId('lastName');
        expect(lastNameInput).toBeInTheDocument();
        expect(lastNameInput).toHaveValue(mockPersonalInfo.lastName);

        const emailInput = screen.getByTestId('email');
        expect(emailInput).toBeInTheDocument();
        expect(emailInput).toHaveValue(mockPersonalInfo.email);

        const phoneInput = screen.getByTestId('phone');
        expect(phoneInput).toBeInTheDocument();
        expect(phoneInput).toHaveValue(mockPersonalInfo.phone);

        const addressInput = screen.getByTestId('address');
        expect(addressInput).toBeInTheDocument();
        expect(addressInput).toHaveValue(mockPersonalInfo.address);

        const cityInput = screen.getByTestId('city');
        expect(cityInput).toBeInTheDocument();
        expect(cityInput).toHaveValue(mockPersonalInfo.city);

        const postalCodeInput = screen.getByTestId('postal-code');
        expect(postalCodeInput).toBeInTheDocument();
        expect(postalCodeInput).toHaveValue(mockPersonalInfo.postalCode);
    })

    it('should call onChange with correct arguments when inputs change', () => {
        render(<PersonalInfoForm data={mockPersonalInfo} onChange={mockOnChange}/>)

        const firstNameInput = screen.getByTestId('firstName');
        fireEvent.change(firstNameInput, { target: { value: 'John' } });
        expect(mockOnChange).toHaveBeenCalledWith('personalInfo', 'firstName', 'John');

        const lastNameInput = screen.getByTestId('lastName');
        fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
        expect(mockOnChange).toHaveBeenCalledWith('personalInfo', 'lastName', 'Doe');

        const emailInput = screen.getByTestId('email');
        fireEvent.change(emailInput, { target: { value: 'johndoe@email.com' } });
        expect(mockOnChange).toHaveBeenCalledWith('personalInfo', 'email', 'johndoe@email.com');

        const phoneInput = screen.getByTestId('phone');
        fireEvent.change(phoneInput, { target: { value: '0987654321' } });
        expect(mockOnChange).toHaveBeenCalledWith('personalInfo', 'phone', '0987654321');

        const addressInput = screen.getByTestId('address');
        fireEvent.change(addressInput, { target: { value: '123 Mcdonalds Street' } });
        expect(mockOnChange).toHaveBeenCalledWith('personalInfo', 'address', '123 Mcdonalds Street');

        const cityInput = screen.getByTestId('city');
        fireEvent.change(cityInput, { target: { value: 'Houston' } });
        expect(mockOnChange).toHaveBeenCalledWith('personalInfo', 'city', 'Houston');

        const postalCodeInput = screen.getByTestId('postal-code');
        fireEvent.change(postalCodeInput, { target: { value: '1234' } });
        expect(mockOnChange).toHaveBeenCalledWith('personalInfo', 'postalCode', '1234');
    })
})