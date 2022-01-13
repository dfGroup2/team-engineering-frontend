import { render, screen } from '@testing-library/react';
import TrainingSection from '../Components/GradProfileComponents/TrainingSection';
import { testGraduateUser } from './testData/sampleGraduateUser2';
const { graduateTraining } = testGraduateUser;
const { cohort, learningPath, trainer, finishedDate } = graduateTraining;
jest.mock('../Components/GradProfileComponents/TrainingModules', () => {
    return () => {
        return <p>MockTrainingModulesComponent</p>
    }
})


describe(`Test Suite for Training Section`, () => {

    beforeEach(() => {
        render(
            <TrainingSection graduateUserData={testGraduateUser} />
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

    describe('render tests', () => {
        test(`it should render "Software Engineering 3" as the cohort`, () => {
            expect(screen.findByText(cohort)).toBeTruthy();
        });

        test(`it should render "Software Engineering" as the learning path`, () => {
            expect(screen.findByText(learningPath)).toBeTruthy();
        });

        test(`it should render "Ed Wright" as the trainer`, () => {
            expect(screen.findByText(trainer)).toBeTruthy();
        });

        test(`it should render "Jan 11, 2022" as the finish date`, () => {
            expect(screen.findByText(finishedDate)).toBeTruthy();
        });

        test(`it should render the TrainingModulesComponent`, () => {
            expect(screen.getByText(/MockTrainingModulesComponent/i)).toBeInTheDocument();
        });
    })

});