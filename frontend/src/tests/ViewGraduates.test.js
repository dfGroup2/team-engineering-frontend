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
        test(`it should render graduates images`, () => {
        const numberOfImages = screen.getAllByAltText(/graduate image/i).length;
        expect(numberOfImages).toBe(3);

    })
        test(`it should render view all button`, () => {
        const element = screen.getAllByDisplayValue(/view all/i);
        expect(element).toBeInDocument();
})
    })
});