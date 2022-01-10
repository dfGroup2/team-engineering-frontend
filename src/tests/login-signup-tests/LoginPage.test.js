import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginPage from '../../Components/LoginComponents/Login';
import userEvent from '@testing-library/user-event';

// jest.mock('axios', () => {

// })

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

describe('form submission test', () => {
	test('it should recieve status 200 and an object', () => {

		const { container } = render(
			<Router>
				<LoginPage />
			</Router>
		);
		const elementUsername = container.querySelector("input[name='username']");
		const elementPassword = container.querySelector("input[name='password']");
		userEvent.type(elementUsername, 'testUser');
		userEvent.type(elementPassword, 'password');
		const elementLogin = screen.getByDisplayValue('Login');
		userEvent.click(elementLogin);
		expect(e)
	})
});

