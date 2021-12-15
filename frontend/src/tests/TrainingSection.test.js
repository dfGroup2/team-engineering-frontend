import { render, screen } from '@testing-library/react';
import TrainingSection from '../Components/TrainingSection';

describe(`Test Suite for Training Section`, () => {

    beforeEach(() => {
        render(
            <TrainingSection />
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

});