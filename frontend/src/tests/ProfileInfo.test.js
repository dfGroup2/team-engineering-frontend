import { render, screen } from '@testing-library/react';

import ProfileInfo from '../Components/ProfileInfo';


describe(`ProfileInfo component tests`, () => {
    beforeEach(() => {
        render(<ProfileInfo />);

    });
    test(`it should render users name`, () => {
        const element = screen.getByText(/Name/i);
        expect(element).toBeInTheDocument();
    })
    test('it should render personal email', () => {
        const element = screen.getByText(/Personal email/i);
        expect(element).toBeInTheDocument();
    })
    test('it should render Digital Futures email', () => {
        const element = screen.getByText(/Digital Futures email/i);
        expect(element).toBeInTheDocument();
    })
    test('it should render github', () => {
        const element = screen.getByText(/github/i);
        expect(element).toBeInTheDocument();
    })
    test('it should render LinkedIn', () => {
        const element = screen.getByText(/LinkedIn/i);
        expect(element).toBeInTheDocument();
    })
    test('it should render Phone', () => {
        const element = screen.getByText(/Phone/i);
        expect(element).toBeInTheDocument();
    })
})