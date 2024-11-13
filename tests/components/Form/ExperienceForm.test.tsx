import { fireEvent, render, screen } from '@testing-library/react'
import ExperienceForm from '../../../src/components/Form/ExperienceForm'
import { ExperienceContext } from '../../../src/context/experienceContext'
import { ReactNode } from 'react'
import { ExperienceInfo } from '../../../src/interface/types'
import userEvent from '@testing-library/user-event'

const currectExperience = {
    position: '',
    companyName: '',
    companyCity: '',
    startDate: '',
    endDate: '',
    jobDescription: '',
    workingHere: false,
}
const mockOnChange = vi.fn();
const mockAddExperience = vi.fn();
const mockHandleCurrentlyWorkHere = vi.fn();
const mockExperiences: ExperienceInfo[] = [];

const MockExperienceProvider = ({ children }: {children: ReactNode}) => (
    <ExperienceContext.Provider
      value={{
        experiences: mockExperiences,
        currentExperience: currectExperience,
        setCurrentExperience: mockOnChange,
        addExperience: mockAddExperience,
        handleCurrentlyWorkHere: mockHandleCurrentlyWorkHere,
      }}
    >
      {children}
    </ExperienceContext.Provider>
);

describe('ExperienceForm', () => {
    it('should render the inputs with empty value and headingss', () => {
        render(
            <MockExperienceProvider>
                <ExperienceForm />
            </MockExperienceProvider>
        )

        const heading = screen.getByRole('heading');
        expect(heading).toHaveTextContent('Experience');

        const jobTitleInput = screen.getByTestId('job-title');
        expect(jobTitleInput).toBeInTheDocument();
        expect(jobTitleInput).toHaveValue(currectExperience.position);

        const companyInput = screen.getByTestId('company');
        expect(companyInput).toBeInTheDocument();
        expect(companyInput).toHaveValue(currectExperience.companyName);

        const companyLocationInput = screen.getByTestId('company-location');
        expect(companyLocationInput).toBeInTheDocument();
        expect(companyLocationInput).toHaveValue(currectExperience.companyCity);

        const startDateInput = screen.getByTestId('start-date');
        expect(startDateInput).toBeInTheDocument();
        expect(startDateInput).toHaveValue(currectExperience.startDate);

        const endDateInput = screen.getByTestId('end-date');
        expect(endDateInput).toBeInTheDocument();
        expect(endDateInput).toHaveValue(currectExperience.endDate);

        const jobDescriptionInput = screen.getByTestId('job-description');
        expect(jobDescriptionInput).toBeInTheDocument();
        expect(jobDescriptionInput).toHaveValue(currectExperience.jobDescription);
    })

    it('should call onChange handlers with correct arguments when inputs change', () => {
        render(
            <MockExperienceProvider>
                <ExperienceForm />
            </MockExperienceProvider>
        )

        const jobTitleInput = screen.getByTestId('job-title');
        fireEvent.change(jobTitleInput, { target: { value: 'Software Engineer' } });
        expect(mockOnChange).toHaveBeenCalledWith({...currectExperience, position: 'Software Engineer'})

        const companyInput = screen.getByTestId('company');
        fireEvent.change(companyInput, { target: { value: 'Tech Corp' } });
        expect(mockOnChange).toHaveBeenCalledWith({...currectExperience, companyName: 'Tech Corp'})

        const companyLocationInput = screen.getByTestId('company-location');
        fireEvent.change(companyLocationInput, { target: { value: 'San Francisco, CA' } });
        expect(mockOnChange).toHaveBeenCalledWith({...currectExperience, companyCity: 'San Francisco, CA'})

        const startDateInput = screen.getByTestId('start-date');
        fireEvent.change(startDateInput, { target: { value: '01/02/2024' } });
        expect(mockOnChange).toHaveBeenCalledWith({...currectExperience, startDate: '01/02/2024'})

        const endDateInput = screen.getByTestId('end-date');
        fireEvent.change(endDateInput, { target: { value: '04/03/2024' } });
        expect(mockOnChange).toHaveBeenCalledWith({...currectExperience, endDate: '04/03/2024'})

        const jobDescriptionInput = screen.getByTestId('job-description');
        fireEvent.change(jobDescriptionInput, { target: { value: 'fix front-end bugs' } });
        expect(mockOnChange).toHaveBeenCalledWith({...currectExperience, jobDescription: 'fix front-end bugs'})
    })

    it('should call handleCurrentlyWorkHere when checkbox is toggled', async () => {
        const user = userEvent.setup();
        render(
            <MockExperienceProvider>
                <ExperienceForm />
            </MockExperienceProvider>
        )

        const checkbox = screen.getByRole('checkbox');
        await user.click(checkbox);

        expect(mockHandleCurrentlyWorkHere).toHaveBeenCalled();
    })

    it('should call addExperience when AddButton is clicked', async () => {
        const user = userEvent.setup();
        render(
            <MockExperienceProvider>
                <ExperienceForm />
            </MockExperienceProvider>
        )

        const button = screen.getByRole('button', {name: /Add Experience/i});

        await user.click(button);
        expect(mockAddExperience).toHaveBeenCalled();
    })
})