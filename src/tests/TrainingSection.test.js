import { render, screen } from '@testing-library/react';
import TrainingSection from '../Components/GradProfileComponents/TrainingSection';
import { testGraduateUser } from './testData/sampleGraduateUser';
const { graduateTraining } = testGraduateUser;
const { courseModules } = graduateTraining;

describe(`Test Suite for Training Section`, () => {

    beforeEach(() => {
        render(
            <TrainingSection trainingInfo={graduateTraining} />
        );
    });

    test(`it should render a "your training" heading`, () => {
        const element = screen.getByText(/your training/i);
        expect(element).toBeInTheDocument();
    });

    test(`it should render cohort`, () => {
        const element = screen.getByText(/cohort/i);
        expect(element).toBeInTheDocument();
    });

    test(`it should render learning path`, () => {
        const element = screen.getByText(/learning path/i);
        expect(element).toBeInTheDocument();
    });

    test(`it should render trainer`, () => {
        const element = screen.getByText(/trainer/i);
        expect(element).toBeInTheDocument();
    });

    test(`it should render training finish date`, () => {
        const element = screen.getByText(/training finish date/i);
        expect(element).toBeInTheDocument();
    });

    xtest(`it should render module 1, challenge A`, () => {
        const element = screen.getByText(/module 1, challenge A/i);
        expect(element).toBeInTheDocument();
    });

    test(`it should render module 1, challenge B`, () => {
        const element = screen.getByText(/module 1, challenge B/i);
        expect(element).toBeInTheDocument();
    });

    test(`it should render module 2, challenge C`, () => {
        const element = screen.getByText(/module 2, challenge C/i);
        expect(element).toBeInTheDocument();
    });

    describe(`Data rendering tests for the your training section`, () => {

        xtest(`it should render "Software Engineering" as the cohort`, () => {
            expect(screen.findByText(graduateTraining.learningPath)).toBeTruthy();
        });

        test(`it should render "javascript programming"`, () => {
            expect(screen.findByText(Object.keys(courseModules.fundamentals)[0])).toBeTruthy();
        });

    });

});