import { fireEvent, render, screen } from '@testing-library/react'
import SkillsForm from '../../../src/components/Form/SkillsForm'
import { SkillsContext } from '../../../src/context/skillsContext';
import { ReactNode } from 'react';
import userEvent from '@testing-library/user-event';

const mockTechnicalSkills = [''];
const mockPersonalSkills = [''];
const mockHandleTS = vi.fn();
const mockHandlePS = vi.fn();
const mockAddTS = vi.fn();
const mockAddPS = vi.fn();

const MockSkillsProvider = ({ children }: {children: ReactNode}) => (
    <SkillsContext.Provider
      value={{
            technicalSkills: mockTechnicalSkills,
            personalSkills: mockPersonalSkills,
            handlePersonalSkills: mockHandlePS,
            handleTechnicalSkills: mockHandleTS,
            addPersonalSkills: mockAddPS,
            addTechnicalSkills: mockAddTS, 
      }}
    >
      {children}
    </SkillsContext.Provider>
);

describe('SkillsForm', () => {
    it('should initially render headings and inputs value', () => {
        render(
            <MockSkillsProvider>
                <SkillsForm />
            </MockSkillsProvider>
        )

        const TSHeading = screen.getByRole('heading', {name: /Technical Skills/i});
        expect(TSHeading).toBeInTheDocument();

        const PSHeading = screen.getByRole('heading', {name: /Personal Skills/i});
        expect(PSHeading).toBeInTheDocument();

        const technicalSkills = screen.getByTestId('technicalSkills');
        const personalSkills = screen.getByTestId('personalSkills');
        
        expect(technicalSkills).toBeInTheDocument();
        expect(technicalSkills).toHaveValue('');

        expect(personalSkills).toBeInTheDocument();
        expect(personalSkills).toHaveValue('');
    })

    it('should have correct parameters when handleTechnicalSkills and handlePersonalSkills called', () => {
        render(
            <MockSkillsProvider>
                <SkillsForm />
            </MockSkillsProvider>
        )

        const technicalSkills = screen.getAllByTestId('technicalSkills');
        const personalSkills = screen.getAllByTestId('personalSkills');

        fireEvent.change(technicalSkills[0], { target: { value: 'TypeScript' } });
        expect(mockHandleTS).toHaveBeenCalledWith(0, 'TypeScript');

        fireEvent.change(personalSkills[0], { target: { value: 'time management' } });
        expect(mockHandlePS).toHaveBeenCalledWith(0, 'time management');
    })

    it('should call addTechnicalSkills for technical skills and addPersonalSkills for personal skills when the "Add Skills" buttons are clicked', async () => {
        const user = userEvent.setup();
        render(
            <MockSkillsProvider>
                <SkillsForm />
            </MockSkillsProvider>
        )

        const addTechnicalButton = screen.getAllByText(/Add Skills/i)[0];
        const addPersonalButton = screen.getAllByText(/Add Skills/i)[1];
   
        await user.click(addTechnicalButton);
        expect(mockAddTS).toHaveBeenCalledTimes(1);

        await user.click(addPersonalButton);
        expect(mockAddPS).toHaveBeenCalledTimes(1);

    })
})