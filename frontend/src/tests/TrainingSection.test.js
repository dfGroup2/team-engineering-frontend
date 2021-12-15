import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import TrainingSection from '../Components/TrainingSection';

describe(`Test Suite for Training Section`, () => {

    beforeEach(() => {
        render(
            <TrainingSection />
        );
    })
    test(`it should render a "your training" heading`, () => {
        const element = screen.getByText(/your training/i);
        expect(element).toBeInTheDocument();
    })
});