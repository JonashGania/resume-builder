import { fireEvent, render, screen } from '@testing-library/react'
import EducationForm from '../../../src/components/Form/EducationForm'

describe('EducationForm', () => {
    const educationData = {
        schoolName: '', 
        location: '', 
        degree: '', 
        major: '',
        gradMonth: '', 
        gradYear: ''
    }
    const mockOnChange = vi.fn();

    it('should render the inputs with empty value and headings', () => {
        render(<EducationForm educationData={educationData} onChange={mockOnChange}/>)

        const heading = screen.getByRole('heading');
        expect(heading).toHaveTextContent('Education');

        const schoolNameInput = screen.getByTestId('school-name');
        expect(schoolNameInput).toBeInTheDocument();
        expect(schoolNameInput).toHaveValue(educationData.schoolName);

        const schoolLocationInput = screen.getByTestId('school-location');
        expect(schoolLocationInput).toBeInTheDocument();
        expect(schoolLocationInput).toHaveValue(educationData.location);

        const degreeInput = screen.getByTestId('degree');
        expect(degreeInput).toBeInTheDocument();
        expect(degreeInput).toHaveValue(educationData.degree);

        const majorInput = screen.getByTestId('major');
        expect(majorInput).toBeInTheDocument();
        expect(majorInput).toHaveValue(educationData.major);

    })

    it('should call onChange with correct arguments when inputs change', () => {
        render(<EducationForm educationData={educationData} onChange={mockOnChange}/>)

        const schoolNameInput = screen.getByTestId('school-name');
        fireEvent.change(schoolNameInput, { target: { value: 'MIT' } });
        expect(mockOnChange).toHaveBeenCalledWith('educationInfo', 'schoolName', 'MIT');

        const schoolLocationInput = screen.getByTestId('school-location');
        fireEvent.change(schoolLocationInput, { target: { value: 'Cambridge, MA' } });
        expect(mockOnChange).toHaveBeenCalledWith('educationInfo', 'location', 'Cambridge, MA');

        const degreeInput = screen.getByTestId('degree');
        fireEvent.change(degreeInput, { target: { value: 'Bachelor of Science' } });
        expect(mockOnChange).toHaveBeenCalledWith('educationInfo', 'degree', 'Bachelor of Science');

        const majorInput = screen.getByTestId('major');
        fireEvent.change(majorInput, { target: { value: 'Computer Science' } });
        expect(mockOnChange).toHaveBeenCalledWith('educationInfo', 'major', 'Computer Science');
    })

    it('should render Dropdowns with correct props', () => {
        render(<EducationForm educationData={educationData} onChange={mockOnChange}/>)

        const monthDropdown = screen.getByRole('button', {name: /Month/i});
        expect(monthDropdown).toBeInTheDocument();
        expect(monthDropdown).toHaveTextContent('Month');


        const yearDropdown = screen.getByRole('button', {name: /Year/i});
        expect(yearDropdown).toBeInTheDocument();
        expect(yearDropdown).toHaveTextContent('Year');
    })
})