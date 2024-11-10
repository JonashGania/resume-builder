import { render, screen } from '@testing-library/react'
import StepsNavigate from '../../../src/components/Buttons/StepsNavigate'
import userEvent from '@testing-library/user-event';

describe('StepsNavigate', () => {
    const mockOnNext = vi.fn();
    const mockOnBack = vi.fn();

    it('should disable the Back button on the first step and not call onBack', async () => {
        render(<StepsNavigate isFirstStep={true} isLastStep={false} onNext={mockOnNext} onBack={mockOnBack}/>)

        const backButton = screen.getByRole('button', {name: /back/i});
        const nextButton = screen.getByRole('button', {name: /next/i});

        expect(backButton).toBeInTheDocument();
        expect(backButton).toBeDisabled();

        expect(nextButton).toBeInTheDocument();
        expect(nextButton).toBeEnabled();

        const user = userEvent.setup();
        await user.click(backButton);

        expect(mockOnBack).not.toHaveBeenCalled();
    })

    it('should disable the Next button on the last step and not call onNext', async () => {
        render(<StepsNavigate isFirstStep={false} isLastStep={true} onNext={mockOnNext} onBack={mockOnBack}/>)

        const backButton = screen.getByRole('button', {name: /back/i});
        const nextButton = screen.getByRole('button', {name: /next/i});

        expect(backButton).toBeEnabled();
        expect(nextButton).toBeDisabled();

        const user = userEvent.setup();
        await user.click(nextButton);

        expect(mockOnNext).not.toHaveBeenCalled();
    })

    it('should call onBack when Back button is clicked and is enabled', async () => {
        render(<StepsNavigate isFirstStep={false} isLastStep={true} onNext={mockOnNext} onBack={mockOnBack}/>)

        const backButton = screen.getByRole('button', {name: /back/i});
        const user = userEvent.setup();
        await user.click(backButton);

        expect(mockOnBack).toHaveBeenCalledTimes(1);
    })

    it('should call onNext when Next button is clicked and is enabled', async () => {
        render(<StepsNavigate isFirstStep={true} isLastStep={false} onNext={mockOnNext} onBack={mockOnBack}/>)

        const nextButton = screen.getByRole('button', {name: /next/i});
        const user = userEvent.setup();
        await user.click(nextButton);

        expect(mockOnNext).toHaveBeenCalledTimes(1);
    })
})