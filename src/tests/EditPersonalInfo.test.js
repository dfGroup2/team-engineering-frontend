import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import EditPersonalInfoSection from '../Components/EditProfileComponents/EditPersonalInfoSection';
import userEvent from '@testing-library/user-event';
import { testGraduateUser } from './testData/sampleGraduateUser2';

describe(`EditPersonalInfoSection unit test`, () => {

    const mockUpdatedData = jest.fn();

    beforeEach(() => {
        render(
            <Router>
                <EditPersonalInfoSection graduateProfile={testGraduateUser.graduateProfile} dataForEdit={mockUpdatedData} />
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
            element.value = "";

            const testName = "testName";
            userEvent.type(element, testName);

            expect(element).toHaveDisplayValue(testName);
        });

        test(`it should register changes to the personal email input field`, () => {
            const element = screen.getByPlaceholderText(/personal email/i);
            element.value = "";

            const testPersonalEmail = "testPersonalEmail";
            userEvent.type(element, testPersonalEmail);

            expect(element).toHaveDisplayValue(testPersonalEmail);
        });

        test(`it should register changes to the df email input field`, () => {
            const element = screen.getByPlaceholderText(/df email/i);
            element.value = "";

            const testDfEmail = "testDfEmail";
            userEvent.type(element, testDfEmail);

            expect(element).toHaveDisplayValue(testDfEmail);
        });

        test(`it should register changes to the github input field`, () => {
            const element = screen.getByPlaceholderText(/github account/i);
            element.value = "";

            const testGithub = "testGithub";
            userEvent.type(element, testGithub);

            expect(element).toHaveDisplayValue(testGithub);
        });

        test(`it should register changes to the linkedin input field`, () => {
            const element = screen.getByPlaceholderText(/linkedin account/i);
            element.value = "";

            const testLinkedin = "testLinkedin";
            userEvent.type(element, testLinkedin);

            expect(element).toHaveDisplayValue(testLinkedin);
        });

        test(`it should register changes to the phone number input field`, () => {
            const element = screen.getByPlaceholderText(/Phone number/i);
            element.value = "";

            const testPhoneNumber = "123456789";
            userEvent.type(element, testPhoneNumber);

            expect(element).toHaveDisplayValue(testPhoneNumber);
        });
    });

    describe(`Displaying data from props test suite`, () => {

        test(`it should render the name data passed through the props`, () => {
            const element = screen.getByPlaceholderText(/name/i);
            expect(element).toHaveDisplayValue(testGraduateUser.graduateProfile.firstName + " " + testGraduateUser.graduateProfile.lastName);
        });

        test(`it should render the digital futures email data passed through the props`, () => {
            const element = screen.getByPlaceholderText(/df email/i);
            expect(element).toHaveDisplayValue(testGraduateUser.graduateProfile.DFEmail);
        });

        test(`it should render the personal email data passed through the props`, () => {
            const element = screen.getByPlaceholderText(/personal email/i);
            expect(element).toHaveDisplayValue(testGraduateUser.graduateProfile.personalEmail);
        });

        test(`it should render the github data passed through the props`, () => {
            const element = screen.getByPlaceholderText(/github account/i);
            expect(element).toHaveDisplayValue(testGraduateUser.graduateProfile.github);
        });

        test(`it should render the linkedIn data passed through the props`, () => {
            const element = screen.getByPlaceholderText(/linkedin account/i);
            expect(element).toHaveDisplayValue(testGraduateUser.graduateProfile.linkedIn);
        });

        test(`it should render the phone number data passed through the props`, () => {
            const element = screen.getByPlaceholderText(/phone number/i);
            expect(element).toHaveDisplayValue(testGraduateUser.graduateProfile.phoneNumber);
        });
    });
});