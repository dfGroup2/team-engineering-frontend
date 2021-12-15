import { render, screen } from '@testing-library/react';

import InfoSection from '../Components/InfoSection';

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

        
        
    })
    });