import { render, screen } from '@testing-library/react'
import DownloadButton from '../../../src/components/Buttons/DownloadButton'
import userEvent from '@testing-library/user-event'

vi.mock('../../../src/helpers/utils', () => ({
    handleDownloadPDF: vi.fn(),
}))

describe('Download Button', () => {
    it('should render button text', () => {
        render(<DownloadButton formData={{}} resumeRef={{ current: null }}/>)

        expect(screen.getByRole('button', {name: /Download/i})).toBeInTheDocument();
    })

    it('should expect to call handleDownloadPDF when button is clicked', async () => {
        const { handleDownloadPDF } = await import('../../../src/helpers/utils');
        const user = userEvent.setup();

        render(<DownloadButton formData={{}} resumeRef={{ current: null }} />);

        const button = screen.getByRole('button');
        await user.click(button);
        
        expect(handleDownloadPDF).toHaveBeenCalled();
    })
})