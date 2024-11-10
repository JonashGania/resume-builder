import { render, screen } from '@testing-library/react'
import DropdownList from '../../../src/components/Dropdown/DropdownList'
import userEvent from '@testing-library/user-event';

describe('DropdownList', () => {
    const mockSelectOption = vi.fn();
    const itemOptions = ['item1', 'item2', 'item3', 'item4']

    it('should render options when menuShow is true', () => {
        render(<DropdownList options={itemOptions} selectOption={mockSelectOption} menuShow={true}/>)

        const itemList = screen.getAllByTestId('dropdown-item');
        expect(itemList).toHaveLength(itemOptions.length);

        itemOptions.forEach((item, index) => {
            const name = itemList[index];
            expect(name).toBeInTheDocument();
        })
    })

    it('should not render options when menuShow is false', () => {
        render(<DropdownList options={itemOptions} selectOption={mockSelectOption} menuShow={false}/>)

        itemOptions.forEach(item => {
            const list = screen.queryByText(item);
            expect(list).not.toBeInTheDocument();
        })
    })

    it('should call selectOption with the correct item when an option is clicked', async () => {
        render(<DropdownList options={itemOptions} selectOption={mockSelectOption} menuShow={true}/>)
        const optionList = screen.getByText('item1');
        const user = userEvent.setup();

        await user.click(optionList);

        expect(mockSelectOption).toHaveBeenCalledTimes(1);
        expect(mockSelectOption).toHaveBeenCalledWith('item1');
    })
})