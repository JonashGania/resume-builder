import { render, screen } from '@testing-library/react'
import SkillsSection from '../../../src/components/Section/SkillsSection'
import { SkillsContext } from '../../../src/context/skillsContext'
import { ReactNode } from 'react';

describe('SkillsSection', () => {
    const mockTechnicalSkills = ['JavaScript', 'React', 'Laravel'];
    const mockPersonalSkills = ['Communication', 'Time management', 'Teamwork'];
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

    it('should skills and headings', () => {
        render(
            <MockSkillsProvider>
                <SkillsSection />
            </MockSkillsProvider>
        )

        expect(screen.getByRole('heading', {name: /technical skills/i})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: /personal skills/i})).toBeInTheDocument();

        mockTechnicalSkills.forEach(skill => {
            expect(screen.getByText(skill)).toBeInTheDocument();
        })

        mockPersonalSkills.forEach(skill => {
            expect(screen.getByText(skill)).toBeInTheDocument();
        })
    })
})