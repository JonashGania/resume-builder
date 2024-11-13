import { act, render, screen } from '@testing-library/react'
import Dropdown from '../../../src/components/Dropdown/Dropdown'
import userEvent from '@testing-library/user-event';

const mockOnChange = vi.fn();
const itemOptions = ['January', 'February', 'March', 'April']

describe('Dropdown', () => {
    it('should initially render placeholder text', () => {
        render(
            <Dropdown 
                options={itemOptions} 
                selectSpan='Month' 
                section='educationInfo' 
                field='gradMonth' 
                onChange={mockOnChange}
            />
        )

        expect(screen.getByText('Month')).toBeInTheDocument();
    })

    it('should toggle the Dropdown when clicked', async () => {
        const user = userEvent.setup();
        render(
            <Dropdown 
                options={itemOptions} 
                selectSpan='Month' 
                section='educationInfo' 
                field='gradMonth' 
                onChange={mockOnChange}
            />
        )

        expect(screen.queryByRole('list')).not.toBeInTheDocument();

        const button = screen.getByRole('button');
        await user.click(button);

        expect(screen.queryByRole('list')).toBeInTheDocument();

        const itemList = screen.queryAllByTestId('dropdown-item');
        itemOptions.forEach((item, index) => {
            const name = itemList[index];
            expect(name).toBeInTheDocument();
            expect(name).toHaveTextContent(item);
        })
    })

    it('should close the dropdown when clicking outside', async () => {
        const user = userEvent.setup();
        render(
            <Dropdown 
            options={itemOptions} 
            selectSpan='Month' 
            section='educationInfo' 
            field='gradMonth' 
            onChange={mockOnChange}/>
        )

        const button = screen.getByRole('button');
        await user.click(button);

        expect(screen.queryByRole('list')).toBeInTheDocument();

        await user.click(document.body);

        expect(screen.queryByRole('list')).not.toBeInTheDocument();

        itemOptions.forEach((item) => {
            const name = screen.queryByText(item);
            expect(name).not.toBeInTheDocument();
        })
    })

    it('should call onChange with correct arguments when an option is selected', async () => {
        const user = userEvent.setup();
        render(
            <Dropdown 
            options={itemOptions} 
            selectSpan='Month' 
            section='educationInfo' 
            field='gradMonth' 
            onChange={mockOnChange}/>
        )

        const button = screen.getByRole('button');

        await user.click(button);

        const option = screen.getByText(itemOptions[0]);
        await user.click(option);

        expect(mockOnChange).toHaveBeenCalledWith('educationInfo', 'gradMonth', 'January')
    })
})