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
    


});
