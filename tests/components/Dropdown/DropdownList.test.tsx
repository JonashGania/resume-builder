import { render, screen } from '@testing-library/react'
import DropdownList from '../../../src/components/Dropdown/DropdownList'
import userEvent from '@testing-library/user-event';

const mockSelectOption = vi.fn();
const itemOptions = ['item1', 'item2', 'item3', 'item4']
describe('DropdownList', () => {
    it('should render option lists when menuShow is true', () => {
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
        const user = userEvent.setup();
        render(<DropdownList options={itemOptions} selectOption={mockSelectOption} menuShow={true}/>)

        const optionList = screen.getByText('item1');
        await user.click(optionList);

        expect(mockSelectOption).toHaveBeenCalled();
        expect(mockSelectOption).toHaveBeenCalledWith('item1');
    })
})