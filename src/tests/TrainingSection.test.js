import { render, screen } from '@testing-library/react';
import TrainingSection from '../Components/GradProfileComponents/TrainingSection';
import { testGraduateUser } from './testData/sampleGraduateUser';
const { graduateTraining } = testGraduateUser;
const { cohort, learningPath, trainer, finishedDate } = graduateTraining;

describe(`Test Suite for Training Section`, () => {

    beforeEach(() => {
        render(
            <TrainingSection graduateTrainingData={graduateTraining} />
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

    xtest(`it should render module 1, challenge B`, () => {
        const element = screen.getByText(/module 1, challenge B/i);
        expect(element).toBeInTheDocument();
    });

    xtest(`it should render module 2, challenge C`, () => {
        const element = screen.getByText(/module 2, challenge C/i);
        expect(element).toBeInTheDocument();
    });

    describe(`Data rendering tests for the your training section`, () => {

        test(`it should render "javascript programming"`, () => {
            expect(screen.getByText(/javascript programming/i)).toBeInTheDocument();
        });

        test(`it should render "bank challenge"`, () => {
            expect(screen.getByText(/bank challenge/i)).toBeInTheDocument();
        });

        test(`it should render "news summary challenge"`, () => {
            expect(screen.getByText(/news summary challenge/i)).toBeInTheDocument();
        });

        test(`it should render "rock Paper Scissors Challenge"`, () => {
            expect(screen.getByText(/rock paper scissors challenge/i)).toBeInTheDocument();
        });

        test(`it should render "chitter Challenge"`, () => {
            expect(screen.getByText(/chitter challenge/i)).toBeInTheDocument();
        });

        test(`it should render testDrivenDevelopment`, () => {
            expect(screen.getByText(/test driven development/i)).toBeInTheDocument();
        });

        test(`it should render thirdPartyIntegration`, () => {
            expect(screen.getByText(/third Party Integration/i)).toBeInTheDocument();
        });

        test(`it should render businessServices`, () => {
            expect(screen.getByText(/business Services/i)).toBeInTheDocument();
        });

        test(`it should render fullStackApplication`, () => {
            expect(screen.getByText(/full Stack Application/i)).toBeInTheDocument();
        });

        test(`it should render javaChallenge`, () => {
            expect(screen.getByText(/java Challenge/i)).toBeInTheDocument();
        });

        test(`it should render agileTeamCollaboration`, () => {
            expect(screen.getByText(/agile Team Collaboration/i)).toBeInTheDocument();
        });

        test(`it should render interviewChallenges`, () => {
            expect(screen.getByText(/interview Challenges/i)).toBeInTheDocument();
        });

        test(`it should render "pending" 9 times`, () => {
            const numberPending = screen.getAllByText(/pending/i).length;
            expect(numberPending).toBe(9);
        });

        test(`it should render pass 1 time`, () => {
            const numberPass = screen.getAllByText(/pass/i).length;
            expect(numberPass).toBe(1);
        });

        test(`it should render failed 1 time`, () => {
            const numberFailed = screen.getAllByText(/Fail/i).length;
            expect(numberFailed).toBe(1);
        });

        test(`it should render todo 1 time`, () => {
            const numberTodo = screen.getAllByText(/todo/i).length;
            expect(numberTodo).toBe(1);
        });

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

    });

});