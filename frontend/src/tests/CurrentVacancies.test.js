import { render, screen } from '@testing-library/react';

import CurrentVacancies from '../Components/IndustryProfileComponents/CurrentVacancies';

describe(`CurrentVacancies component tests`, () => {
    beforeEach(() => {
        render(<CurrentVacancies />);
    });

    describe('Render Test', () => {

        test(`it should render current vacancies`, () => {
            const element = screen.getByText(/current vacancies/i);
            expect(element).toBeInTheDocument();
        })
        test(`it should render vacancy 1`, () => {
            const element = screen.getByText(/vacancy 1/i);
            expect(element).toBeInTheDocument();
        })
        


    })
});
