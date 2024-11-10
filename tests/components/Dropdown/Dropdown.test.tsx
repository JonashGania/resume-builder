import { act, render, screen } from '@testing-library/react'
import Dropdown from '../../../src/components/Dropdown/Dropdown'
import userEvent from '@testing-library/user-event';

describe('Dropdown', () => {
    const mockOnChange = vi.fn();
    const itemOptions = ['January', 'February', 'March', 'April']

    it('should toggle visibility when the button is clicked', async () => {
        render(
            <Dropdown 
            options={itemOptions} 
            selectSpan='Month' 
            section='educationInfo' 
            field='gradMonth' 
            onChange={mockOnChange}/>
        )

        const button = screen.getByRole('button');

        let itemList = screen.queryAllByTestId('dropdown-item');
        expect(itemList).toHaveLength(0);

        const user = userEvent.setup();
        await user.click(button);

        itemList = screen.queryAllByTestId('dropdown-item');
        expect(itemList).toHaveLength(itemOptions.length);

        itemOptions.forEach((item, index) => {
            const name = itemList[index];
            expect(name).toBeInTheDocument();
            expect(name).toHaveTextContent(item);
        })
    })

    it('should close the dropdown when clicking outside', async () => {
        render(
            <Dropdown 
            options={itemOptions} 
            selectSpan='Month' 
            section='educationInfo' 
            field='gradMonth' 
            onChange={mockOnChange}/>
        )

        const button = screen.getByRole('button');
        const user = userEvent.setup();
        await user.click(button);

        let itemList = screen.queryAllByTestId('dropdown-item');
        expect(itemList).toHaveLength(itemOptions.length);

        await user.click(document.body);

        itemList = screen.queryAllByTestId('dropdown-item');
        expect(itemList).toHaveLength(0);

        itemOptions.forEach((item) => {
            const name = screen.queryByText(item);
            expect(name).not.toBeInTheDocument();
        })
    })

    it('should call onChange with correct arguments when an option is selected', async () => {
        render(
            <Dropdown 
            options={itemOptions} 
            selectSpan='Month' 
            section='educationInfo' 
            field='gradMonth' 
            onChange={mockOnChange}/>
        )

        const button = screen.getByRole('button');
        const user = userEvent.setup();

        await user.click(button);

        const option = screen.getByText('January');
        await user.click(option);

        expect(mockOnChange).toHaveBeenCalledWith('educationInfo', 'gradMonth', 'January')
    })
})