import { render, screen } from '@testing-library/react'
import AddButton from '../../../src/components/Buttons/AddButton'
import userEvent from '@testing-library/user-event'

describe('Add Button', () => {
    it('should render add button with custom text', () => {
        render(<AddButton addText='Skills'/>)

        expect(screen.getByText(/Add Skills/i)).toBeInTheDocument();
    })

    it('should call handleClick when the button is clicked', async () => {
        const handleClick = vi.fn();

        render(<AddButton handleClick={handleClick}/>)

        const button = screen.getByRole('button');
        const user = userEvent.setup();
        await user.click(button);

        expect(handleClick).toHaveBeenCalledTimes(1);
    })
})