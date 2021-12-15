import { render, screen } from '@testing-library/react';

import PersonalStory from '../Components/PersonalStory';

describe(`PersonalStory component tests`, () => {
    beforeEach(() => {
        render(<PersonalStory />);
    });

    describe('Render Test', () => {

        test(`it should render degree`, () => {
            const element = screen.getByText(/Degree/i);
            expect(element).toBeInTheDocument();
        })
        test(`it should render personal story`, () => {
            const element = screen.getByText(/Personal Story/i);
            expect(element).toBeInTheDocument();
        })
         test(`it should render school qualifications`, () => {
            const element = screen.getByText(/School qualifications/i);
            expect(element).toBeInTheDocument();
         })
         test(`it should render work experiences`, () => {
            const element = screen.getByText(/Work experiences/i);
            expect(element).toBeInTheDocument();
         })
         test(`it should render personal achievements`, () => {
            const element = screen.getByText(/personal achievements/i);
            expect(element).toBeInTheDocument();
        })
        
    })
    });