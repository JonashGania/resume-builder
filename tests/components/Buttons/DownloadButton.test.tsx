import { render, screen } from '@testing-library/react'
import DownloadButton from '../../../src/components/Buttons/DownloadButton'
import userEvent from '@testing-library/user-event'
import { handleDownloadPDF } from '../../../src/helpers/utils'

vi.mock('../../../src/helpers/utils', () => ({
    handleDownloadPDF: vi.fn(),
}))

describe('Download Button', () => {
    it('should render button text', () => {
        render(<DownloadButton formData={{}} resumeRef={{ current: null }}/>)

        expect(screen.getByText(/Download/i)).toBeInTheDocument();
    })

    it('should expect to call handleDownloadPDF when button is clicked', async () => {
        const { handleDownloadPDF } = await import('../../../src/helpers/utils');

        render(<DownloadButton formData={{}} resumeRef={{ current: null }} />);

        const button = screen.getByRole('button');
        const user = userEvent.setup();
        await user.click(button);
        
        expect(handleDownloadPDF).toHaveBeenCalledTimes(1);
    })
})