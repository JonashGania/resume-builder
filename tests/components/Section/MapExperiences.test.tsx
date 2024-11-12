import { render, screen } from '@testing-library/react'
import MapExperiences from '../../../src/components/Section/MapExperiences'
import { capitalizeWords } from '../../../src/helpers/utils'
import { formattedDate } from '../../../src/helpers/utils'

describe('MapExperiences', () => {
    it('should initially display no information when fields are empty', () => {
        render(
            <MapExperiences experienceInfo={{ 
                position: '',
                companyName: '',
                companyCity: '',
                startDate: '',
                endDate: '',
                jobDescription: '',
                workingHere: false,
            }}
            />
        )

        expect(screen.queryByText(/position/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/companyName/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/companyCity/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/startDate/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/endDate/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/jobDescription/i)).not.toBeInTheDocument();
    })

    it('should display the correct information when provided', () => {
        const mockExpereienceInfo = {
            position: 'Software Engineer',
            companyName: 'Tech Corp',
            companyCity: 'Houston, TX',
            startDate: '01/02/2024',
            endDate: '06/20/2020',
            jobDescription: 'Development web and mobile applications',
            workingHere: false,
        }

        render(<MapExperiences experienceInfo={mockExpereienceInfo}/>)

        const position = screen.getByText(capitalizeWords(mockExpereienceInfo.position));
        const companyName = screen.getByText(mockExpereienceInfo.companyName);
        const location = screen.getByText(capitalizeWords(mockExpereienceInfo.companyCity));
        const jobDescription = screen.getByText(mockExpereienceInfo.jobDescription);
        const workDate = screen.getByText(`${formattedDate(mockExpereienceInfo.startDate)} - ${formattedDate(mockExpereienceInfo.endDate)}`)

        expect(position).toBeInTheDocument();
        expect(companyName).toBeInTheDocument();
        expect(location).toBeInTheDocument();
        expect(workDate).toBeInTheDocument();
        expect(jobDescription).toBeInTheDocument();
    })

    it('should render "Current" when workingHere is true', () => {
        const mockExpereienceInfo = {
            position: 'Software Engineer',
            companyName: 'Tech Corp',
            companyCity: 'Houston, TX',
            startDate: '01/02/2024',
            endDate: '06/20/2020',
            jobDescription: 'Development web and mobile applications',
            workingHere: true,
        }

        render(<MapExperiences experienceInfo={mockExpereienceInfo}/>)

        const currentWorkDate = screen.getByText(`${formattedDate(mockExpereienceInfo.startDate)} - Current`);
        expect(currentWorkDate).toBeInTheDocument();
    })
})