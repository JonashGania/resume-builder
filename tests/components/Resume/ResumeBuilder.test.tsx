import { render, screen } from '@testing-library/react'
import ResumeBuilder from '../../../src/components/ResumeBuilder'
import Form from '../../../src/components/Form/Form'
import ResumePreviewContainer from '../../../src/components/ResumePreviewContainer'
import PreviewContent from '../../../src/components/PreviewContent'
import PreviewButton from '../../../src/components/Buttons/PreviewButton'
import userEvent from '@testing-library/user-event'

vi.mock('../../../src/components/Form/Form', () => ({
    default: vi.fn(() => <div data-testid="form-container"/>)
}))

vi.mock('../../../src/components/ResumePreviewContainer', () => ({
    default: vi.fn(() => <div data-testid="resume-preview-container"/>)
}))

vi.mock('../../../src/components/PreviewContent', () => ({
    default: vi.fn(({ isOpen }) => (
        <div data-testid="preview-content" className={isOpen ? 'open' : ''}>
            <button>Close</button>
        </div>
    ))
}))

vi.mock('../../../src/components/Buttons/PreviewButton', () => ({
    default: vi.fn(({ handleClick }) => (
        <button data-testid="preview-button-mock" onClick={handleClick}>
          Preview
        </button>
    )),
}))

describe('ResumeBuilder', () => {
    it('should render child components', () => {
        render(<ResumeBuilder />);

        expect(screen.getByTestId("form-container")).toBeInTheDocument();
        expect(screen.getByTestId("resume-preview-container")).toBeInTheDocument();
        expect(screen.getByTestId("preview-content")).toBeInTheDocument();
        expect(screen.getByTestId("preview-button-mock")).toBeInTheDocument();
    })

    it('should open the preview when PreviewButton is clicked', async () => {
        const user = userEvent.setup();
        render(<ResumeBuilder />)

        const button = screen.getByRole('button', {name: /Preview/i});
        await user.click(button);

        expect(screen.getByTestId('preview-content')).toHaveClass('open');
    })

    it('should pass the props on the Form component', () => {
        render(<ResumeBuilder />);

        expect(Form).toHaveBeenCalledWith(
            expect.objectContaining({
                formData: expect.any(Object),
                onInputChange: expect.any(Function)
            }),
            {}
        )
    })

    it('should pass the props on ResumePreviewContainer component', () => {
        render(<ResumeBuilder />)

        expect(ResumePreviewContainer).toHaveBeenCalledWith(
            expect.objectContaining({
                formData: expect.any(Object),
            }),
            {}
        )
    })

    it('should pass the props on PreviewContent component and updates "isOpen" when close button clicked', async () => {
        const user = userEvent.setup()
        render(<ResumeBuilder />)

        expect(PreviewContent).toHaveBeenCalledWith(
            expect.objectContaining({
                formData: expect.any(Object),
                isOpen: true,
                handleClosePreview: expect.any(Function)
            }),
            {}
        )

        const button = screen.getByRole('button', {name: /close/i});

        await user.click(button);

        expect(PreviewContent).toHaveBeenCalledWith(
            expect.objectContaining({
                isOpen: false,
            }),
            {}
        )
    })

    it('should pass the props on PreviewButton component', () => {
        render(<ResumeBuilder />)

        expect(PreviewButton).toHaveBeenCalledWith(
            expect.objectContaining({
                handleClick: expect.any(Function)
            }),
            {}
        )
    })

})