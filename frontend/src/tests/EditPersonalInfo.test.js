import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import EditPersonalInfoSection from '../Components/EditProfileComponents/EditPersonalInfoSection';

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

});