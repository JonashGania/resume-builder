import { render, screen } from '@testing-library/react'
import PersonalInfoSection from '../../../src/components/Section/PersonalInfoSection'
import { capitalizeWords } from '../../../src/helpers/utils'

describe('PersonalInfoSection', () => {
    it('should initially display no information when fields are empty', () => {
        render(
            <PersonalInfoSection personalInfo={{ 
                firstName: '', 
                lastName: '', 
                email: '', 
                phone: '', 
                address: '', 
                city: '', 
                postalCode: ''
            }}
            />
        )

        expect(screen.queryByText(/firstName/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/lastName/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/email/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/phone/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/address/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/city/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/postalCode/i)).not.toBeInTheDocument();
    })

    it('should display information when provided', () => {
        const mockPersonalInfo = {
            firstName: 'John', 
            lastName: 'Doe', 
            email: 'johndoe@email.com', 
            phone: '0987654321', 
            address: '123 Mango Street', 
            city: 'Houston, TX', 
            postalCode: '1111'
        }
        render(<PersonalInfoSection personalInfo={mockPersonalInfo}/>)

        const fullName = screen.getByText(`${capitalizeWords(mockPersonalInfo.firstName)} ${capitalizeWords(mockPersonalInfo.lastName)}`);
        const address = screen.getByText(capitalizeWords(mockPersonalInfo.address));
        const city = screen.getByText(`${capitalizeWords(mockPersonalInfo.city)}, ${mockPersonalInfo.postalCode}`);
        const email = screen.getByText(mockPersonalInfo.email);
        const phone = screen.getByText(mockPersonalInfo.phone);

        
        expect(fullName).toBeInTheDocument();
        expect(address).toBeInTheDocument();
        expect(city).toBeInTheDocument();
        expect(email).toBeInTheDocument();
        expect(phone).toBeInTheDocument();
    })
})