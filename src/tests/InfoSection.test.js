import { render, screen } from '@testing-library/react';

import InfoSection from '../Components/GradProfileComponents/InfoSection';

describe(`InfoSection component tests`, () => {
    beforeEach(() => {
        render(<InfoSection />);
    });

    describe('Render Test', () => {

        test(`it should render your information`, () => {
            const element = screen.getByText(/your information/i);
            expect(element).toBeInTheDocument();
        })
        test(`it should render badges`, () => {
            const element = screen.getByText(/badges/i);
            expect(element).toBeInTheDocument();
        })
        xtest(`it should render badge A`, () => {
            const element = screen.getByText(/badge A/i);
            expect(element).toBeInTheDocument();
        })
        test(`it should render badge A four times`, () => {
            const numberOfBadges = screen.getAllByText(/badge a/i).length;
            expect(numberOfBadges).toBe(4);
        })
        test(`it should render scores`, () => {
            const element = screen.getByText(/scores/i);
            expect(element).toBeInTheDocument();
        })
        test(`it should render aptitude`, () => {
            const element = screen.getByText(/aptitude/i);
            expect(element).toBeInTheDocument();
        })
        test(`it should render java`, () => {
            const element = screen.getByText(/java/i);
            expect(element).toBeInTheDocument();
        })

    })
});