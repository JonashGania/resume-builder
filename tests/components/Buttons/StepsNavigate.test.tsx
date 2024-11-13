import { render, screen } from '@testing-library/react'
import StepsNavigate from '../../../src/components/Buttons/StepsNavigate'
import userEvent from '@testing-library/user-event';

const mockOnNext = vi.fn();
const mockOnBack = vi.fn();

describe('StepsNavigate', () => {
    it('should render Next and Back button', () => {
        render(<StepsNavigate isFirstStep={true} isLastStep={false} onNext={mockOnNext} onBack={mockOnBack}/>)

        const backButton = screen.getByRole('button', {name: /back/i});
        const nextButton = screen.getByRole('button', {name: /next/i});

        expect(backButton).toBeInTheDocument();
        expect(nextButton).toBeInTheDocument();
    })

    it('should disable the Back button on the first step and not call onBack', async () => {
        const user = userEvent.setup();

        render(<StepsNavigate isFirstStep={true} isLastStep={false} onNext={mockOnNext} onBack={mockOnBack}/>)

        const backButton = screen.getByRole('button', {name: /back/i});
        const nextButton = screen.getByRole('button', {name: /next/i});

        expect(backButton).toBeDisabled();
        expect(nextButton).toBeEnabled();

        await user.click(backButton);

        expect(mockOnBack).not.toHaveBeenCalled();
    })

    it('should disable the Next button on the last step and not call onNext', async () => {
        const user = userEvent.setup();
        
        render(<StepsNavigate isFirstStep={false} isLastStep={true} onNext={mockOnNext} onBack={mockOnBack}/>)

        const backButton = screen.getByRole('button', {name: /back/i});
        const nextButton = screen.getByRole('button', {name: /next/i});

        expect(backButton).toBeEnabled();
        expect(nextButton).toBeDisabled();

        await user.click(nextButton);

        expect(mockOnNext).not.toHaveBeenCalled();
    })

    it('should call onBack when Back button is clicked and is enabled', async () => {
        const user = userEvent.setup();
        render(<StepsNavigate isFirstStep={false} isLastStep={true} onNext={mockOnNext} onBack={mockOnBack}/>)

        const backButton = screen.getByRole('button', {name: /back/i});
        await user.click(backButton);

        expect(mockOnBack).toHaveBeenCalledTimes(1);
    })

    it('should call onNext when Next button is clicked and is enabled', async () => {
        const user = userEvent.setup();
        render(<StepsNavigate isFirstStep={true} isLastStep={false} onNext={mockOnNext} onBack={mockOnBack}/>)

        const nextButton = screen.getByRole('button', {name: /next/i});
        await user.click(nextButton);

        expect(mockOnNext).toHaveBeenCalledTimes(1);
    })
})