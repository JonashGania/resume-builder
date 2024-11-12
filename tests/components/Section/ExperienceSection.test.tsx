import { render, screen } from '@testing-library/react'
import ExperienceSection from '../../../src/components/Section/ExperienceSection'
import MapExperiences from '../../../src/components/Section/MapExperiences'
import { ExperienceContext } from '../../../src/context/experienceContext';
import { ExperienceInfo } from '../../../src/interface/types';
import { ReactNode } from 'react';

vi.mock('../../../src/components/Section/MapExperiences');

describe('ExperienceSection', () => {
    const mockExperiences: ExperienceInfo[] = [
        {   position: 'Software Engineer', 
            companyName: 'ABC Corp', 
            companyCity: 'Houston', 
            startDate: '01/02/2024', 
            endDate: '05/02/2024', 
            jobDescription: 'Web development', 
            workingHere: false 
        },
        {   position: 'Frontend Developer', 
            companyName: 'XYZ Inc', 
            companyCity: 'Los Angeles', 
            startDate: '07/02/2024', 
            endDate: '', 
            jobDescription: 'Web development', 
            workingHere: true 
        },
    ];

    const mockOnChange = vi.fn();
    const mockAddExperience = vi.fn();
    const mockHandleCurrentlyWorkHere = vi.fn();
    
    it('should render heading and render each experiences array', () => {
        const currectExperience = {
            position: '',
            companyName: '',
            companyCity: '',
            startDate: '',
            endDate: '',
            jobDescription: '',
            workingHere: false,
        }
        render(
            <ExperienceContext.Provider
                value={{
                experiences: mockExperiences,
                currentExperience: currectExperience,
                setCurrentExperience: mockOnChange,
                addExperience: mockAddExperience,
                handleCurrentlyWorkHere: mockHandleCurrentlyWorkHere,
                }}
            >
                <ExperienceSection />
            </ExperienceContext.Provider>
        )


        const heading = screen.getByRole('heading', {name: /Experience/i});
        expect(heading).toBeInTheDocument();

        mockExperiences.forEach((experience, index) => {
            expect(MapExperiences).toHaveBeenNthCalledWith(index + 1, { experienceInfo: experience }, {});
        })
    })

    it('should render currentExperience if it exists', () => {
         const currectExperience = {
            position: 'Senior Software Engineer', 
            companyName: 'QWER Corp', 
            companyCity: 'Houston', 
            startDate: '01/02/2024', 
            endDate: '05/02/2024', 
            jobDescription: 'Web development', 
            workingHere: true 
        }
        render(
            <ExperienceContext.Provider
                value={{
                experiences: mockExperiences,
                currentExperience: currectExperience,
                setCurrentExperience: mockOnChange,
                addExperience: mockAddExperience,
                handleCurrentlyWorkHere: mockHandleCurrentlyWorkHere,
                }}
            >
                <ExperienceSection />
            </ExperienceContext.Provider>
        )

        expect(MapExperiences).toHaveBeenCalledWith({ experienceInfo: currectExperience }, {});
    })
})