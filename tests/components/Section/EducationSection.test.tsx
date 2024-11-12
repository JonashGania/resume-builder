import { render, screen } from '@testing-library/react'
import EducationSection from '../../../src/components/Section/EducationSection'
import { capitalizeWords } from '../../../src/helpers/utils'

describe('EducationSection', () => {
    it('should initially render headings and display no information when fields are empty', () => {
        render(
            <EducationSection educationInfo={{  
                schoolName: '', 
                location: '', 
                degree: '', 
                major: '',
                gradMonth: '', 
                gradYear: ''
            }}
            />
        )

        const headings = screen.getByRole('heading', {name: /Education/i});
        expect(headings).toBeInTheDocument();

        expect(screen.queryByText(/schoolName/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/location/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/degree/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/major/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/gradMonth/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/gradYear/i)).not.toBeInTheDocument();
    })

    it('should display the correct information when provided', () => {
        const mockEducationInfo = {
            schoolName: 'Hardvard University', 
            location: 'Cambridge', 
            degree: 'bachelor of science', 
            major: 'computer science',
            gradMonth: 'May', 
            gradYear: '2024'
        }

        render(<EducationSection educationInfo={mockEducationInfo}/>)

        const schoolName = screen.getByText(capitalizeWords(mockEducationInfo.schoolName));
        const location = screen.getByText(capitalizeWords(mockEducationInfo.location));
        const degree = screen.getByText(capitalizeWords(mockEducationInfo.degree));
        const major = screen.getByText(capitalizeWords(mockEducationInfo.major));
        const gradDate = screen.getByText(`${mockEducationInfo.gradMonth} ${mockEducationInfo.gradYear}`);

        expect(schoolName).toBeInTheDocument();
        expect(location).toBeInTheDocument();
        expect(degree).toBeInTheDocument();
        expect(major).toBeInTheDocument();
        expect(gradDate).toBeInTheDocument();
    })
})