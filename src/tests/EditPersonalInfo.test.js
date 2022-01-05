import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import EditPersonalInfoSection from '../Components/EditProfileComponents/EditPersonalInfoSection';
import userEvent from '@testing-library/user-event';

describe(`EditPersonalInfoSection unit test`, () => {

    beforeEach(() => {
        render(
            <Router>
                <EditPersonalInfoSection />
            </Router>
        );
    });

    test(`it should render the personal information heading`, () => {
        const element = screen.getByText(/personal information/i);
        expect(element).toBeInTheDocument();
    });

    test(`it should render users name`, () => {
        const element = screen.getByText(/Name/i);
        expect(element).toBeInTheDocument();
    });

    test('it should render personal email', () => {
        const element = screen.getByText(/Personal email/i);
        expect(element).toBeInTheDocument();
    });

    test('it should render Digital Futures email', () => {
        const element = screen.getByText(/Digital Futures email/i);
        expect(element).toBeInTheDocument();
    });

    test('it should render github', () => {
        const element = screen.getByText(/github/i);
        expect(element).toBeInTheDocument();
    });

    test('it should render LinkedIn', () => {
        const element = screen.getByText(/LinkedIn/i);
        expect(element).toBeInTheDocument();
    });

    test('it should render Phone', () => {
        const element = screen.getByText(/Phone/i);
        expect(element).toBeInTheDocument();
    });

    test(`it should render an image`, () => {
        expect(screen.getByRole(/img/)).toBeInTheDocument();
    });

    describe(`form manipulation tests`, () => {
        test(`it should register changes to the name input field`, () => {
            const element = screen.getByPlaceholderText(/name/i);

            const testName = "testName";
            userEvent.type(element, testName);

            expect(element).toHaveDisplayValue(testName);

        })

        test(`it should register changes to the personal email input field`, () => {
            const element = screen.getByPlaceholderText(/personal email/i);

            const testPersonalEmail = "testPersonalEmail";
            userEvent.type(element, testPersonalEmail);

            expect(element).toHaveDisplayValue(testPersonalEmail);
        })

        test(`it should register changes to the df email input field`, () => {
            const element = screen.getByPlaceholderText(/df email/i);

            const testDfEmail = "testDfEmail";
            userEvent.type(element, testDfEmail);

            expect(element).toHaveDisplayValue(testDfEmail);
        })

        test(`it should register changes to the github input field`, () => {
            const element = screen.getByPlaceholderText(/github/i);

            const testGithub = "testGithub";
            userEvent.type(element, testGithub);

            expect(element).toHaveDisplayValue(testGithub);
        })


    })
});