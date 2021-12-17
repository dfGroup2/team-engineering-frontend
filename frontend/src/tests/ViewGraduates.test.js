import { render, screen } from '@testing-library/react';

import ViewGraduates from '../Components/IndustryProfileComponents/ViewGraduates';

describe(`ViewGraduates component tests`, () => {
    beforeEach(() => {
        render(<ViewGraduates />);
    });

    describe('Render Test', () => {
        test(`it should render graduates`, () => {
            const element = screen.getByText(/graduates/i);
            expect(element).toBeInTheDocument();
        })
    })
});