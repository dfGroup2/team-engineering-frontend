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


});
