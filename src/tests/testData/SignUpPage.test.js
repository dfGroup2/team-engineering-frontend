import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SignUp from '../../Components/SignUpComponent/SignUp';

describe(`Tests for SignUp Page`, () => {
	beforeEach(() => {
		render(
			<Router>
				<SignUp />
			</Router>
		);
	});

	test(`it should render a "Digital Futures" heading`, () => {
		const element = screen.getByText(/digital futures/i);
		expect(element).toBeInTheDocument();
	});

	test(`it should render signup for an account`, () => {
		const element = screen.getByText(/sign up for an account/i);
		expect(element).toBeInTheDocument();
	});

	test(`it should render Email`, () => {
		const element = screen.getByText(/Email/i);
		expect(element).toBeInTheDocument();
	});

	test(`it should render First name`, () => {
		const element = screen.getByText(/First name/i);
		expect(element).toBeInTheDocument();
	});

	test(`it should render Last name`, () => {
		const element = screen.getByText(/Last name/i);
		expect(element).toBeInTheDocument();
	});

	test(`it should render Company`, () => {
		const element = screen.getByText(/Company/i);
		expect(element).toBeInTheDocument();
	});

	test(`it should render SignUp button`, () => {
		const element = screen.getByDisplayValue(/Sign Up/i);
		expect(element).toBeInTheDocument();
	});

	test(`it should render an image`, () => {
		const { container } = render(
			<Router>
				<SignUp />
			</Router>
		)
		const element = container.querySelector('.dfximage')
		expect(element).toBeTruthy();
	});
});
