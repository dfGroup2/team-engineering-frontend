import { render, screen } from '@testing-library/react';

import PersonalStory from '../Components/GradProfileComponents/PersonalStory';

import { testGraduateUser } from './testData/sampleGraduateUser';
const { personalStory } = testGraduateUser;

describe(`PersonalStory component tests`, () => {
    beforeEach(() => {
        render(<PersonalStory personalStoryData={personalStory} />);
    });

    describe('Render Test', () => {

        test(`it should render degree`, () => {
            const element = screen.getByText(/Degree/i);
            expect(element).toBeInTheDocument();
        });

        test(`it should render personal story`, () => {
            const element = screen.getByText(/Personal Story/i);
            expect(element).toBeInTheDocument();
        });

        test(`it should render school qualifications`, () => {
            const element = screen.getByText(/School qualifications/i);
            expect(element).toBeInTheDocument();
        });

        test(`it should render work experiences`, () => {
            const element = screen.getByText(/Work experiences/i);
            expect(element).toBeInTheDocument();
        });

        test(`it should render personal achievements`, () => {
            const element = screen.getByText(/personal achievements/i);
            expect(element).toBeInTheDocument();
        });

        test(`it should render the data passed through the props`, () => {

            expect(screen.findByText(personalStory.degree.subject)).toBeTruthy();
            expect(screen.findByText(personalStory.degree.university)).toBeTruthy();
            // expect(screen.getByText(/1 school qualification/i)).toBeInTheDocument();
            // expect(screen.getByText(/1 work experience/i)).toBeInTheDocument();
            // expect(screen.getByText(/1 personal achievement/i)).toBeInTheDocument();

        });

    });
});