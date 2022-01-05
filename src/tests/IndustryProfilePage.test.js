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
        test(`it should render company email`, () => {
            const element = screen.getByText(/company email/i);
            expect(element).toBeInTheDocument();
        })
        test(`it should render company phone number`, () => {
            const element = screen.getByText(/company phone number/i);
            expect(element).toBeInTheDocument();
        })
        test(`it should render company address`, () => {
            const element = screen.getByText(/company address/i);
            expect(element).toBeInTheDocument();
        })
        


    })
});
