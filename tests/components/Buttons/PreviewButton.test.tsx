import { render, screen } from '@testing-library/react'
import PreviewButton from '../../../src/components/Buttons/PreviewButton'
import userEvent from '@testing-library/user-event';

describe('Preview Button', () => {
    it('should render preview button with "Preview" text', () => {
        const handleClick = vi.fn();

        render(<PreviewButton handleClick={handleClick}/>)

        const button = screen.getByRole('button', {name: /preview/i});
        expect(button).toBeInTheDocument();
    })

    it('should call handleClick when button is clicked', async () => {
        const handleClick = vi.fn();

        render(<PreviewButton handleClick={handleClick}/>)

        const button = screen.getByRole('button', {name: /preview/i});
        const user = userEvent.setup();
        await user.click(button);

        expect(handleClick).toHaveBeenCalledTimes(1);
    })
})