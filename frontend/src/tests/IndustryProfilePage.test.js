import { render, screen } from '@testing-library/react';

import IndustryProfilePage from '../Components/IndustryProfileComponents/IndustryProfilePage';

describe(`IndustryProfilePage component tests`, () => {
    beforeEach(() => {
        render(<IndustryProfilePage />);
    });

    describe('Render Test', () => {

        test(`it should render your industry profile`, () => {
            const element = screen.getByText(/industry profile/i);
            expect(element).toBeInTheDocument();
        })
        test(`it should render company name`, () => {
            const element = screen.getByText(/company name/i);
            expect(element).toBeInTheDocument();
        })
    })
});
