import { render, screen } from '@testing-library/react';
import TrainingModules from '../Components/GradProfileComponents/TrainingModules';
import { testGraduateUser } from './testData/sampleGraduateUser2';

describe(`Data rendering tests for the training module section`, () => {

    const mockCapitaliseFirstLetter = jest.fn();

    beforeEach(() => {
        render(
            <TrainingModules trainingModules={testGraduateUser.graduateTraining.courseModules} capitaliseFirstLetter={mockCapitaliseFirstLetter} />
        );
    });

    xtest(`it should render "javascript programming"`, () => {
        expect(screen.getByText(/javascriptprogramming/i)).toBeInTheDocument();
    });

    xtest(`it should render "bank challenge"`, () => {
        expect(screen.getByText(/bankchallenge/i)).toBeInTheDocument();
    });

    xtest(`it should render "news summary challenge"`, () => {
        expect(screen.getByText(/newssummarychallenge/i)).toBeInTheDocument();
    });

    xtest(`it should render "rock Paper Scissors Challenge"`, () => {
        expect(screen.getByText(/rockpaperscissorschallenge/i)).toBeInTheDocument();
    });

    xtest(`it should render "chitter Challenge"`, () => {
        expect(screen.getByText(/chitterchallenge/i)).toBeInTheDocument();
    });

    xtest(`it should render testDrivenDevelopment`, () => {
        expect(screen.getByText(/testdrivendevelopment/i)).toBeInTheDocument();
    });

    xtest(`it should render thirdPartyIntegration`, () => {
        expect(screen.getByText(/thirdPartyIntegration/i)).toBeInTheDocument();
    });

    xtest(`it should render businessServices`, () => {
        expect(screen.getByText(/businessServices/i)).toBeInTheDocument();
    });

    xtest(`it should render fullStackApplication`, () => {
        expect(screen.getByText(/fullStackApplication/i)).toBeInTheDocument();
    });

    xtest(`it should render javaChallenge`, () => {
        expect(screen.getByText(/javaChallenge/i)).toBeInTheDocument();
    });

    xtest(`it should render agileTeamCollaboration`, () => {
        expect(screen.getByText(/agileTeamCollaboration/i)).toBeInTheDocument();
    });

    xtest(`it should render interviewChallenges`, () => {
        expect(screen.getByText(/interview challenges/i)).toBeInTheDocument();
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

});