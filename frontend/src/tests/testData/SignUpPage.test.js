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
    test(`it should render create your account`, () => {
		const element = screen.getByText(/create your account/i);
		expect(element).toBeInTheDocument();
    });

    


});
