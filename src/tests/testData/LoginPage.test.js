import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginPage from '../../Components/LoginComponents/Login';

describe(`Tests for LoginPage`, () => {
	beforeEach(() => {
		render(
			<Router>
				<LoginPage />
			</Router>
		);
	});

	test(`it should render a "Digital Futures" heading`, () => {
		const element = screen.getByText(/digital futures/i);
		expect(element).toBeInTheDocument();
    });
    test(`it should render login in to your account`, () => {
		const element = screen.getByDisplayValue(/login/i);
		expect(element).toBeInTheDocument();
    });
     test(`it should render username`, () => {
		const element = screen.getByText(/username/i);
		expect(element).toBeInTheDocument();
     });
    test(`it should render password`, () => {
		const element = screen.getByText(/password/i);
		expect(element).toBeInTheDocument();
	});
	

});
