import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import EditProfilePage from '../Components/EditProfileComponents/EditProfilePage';

xdescribe(`Tests for EditProfilePage`, () => {
	beforeEach(() => {
		render(
			<Router>
				<EditProfilePage />
			</Router>
		);
	});

	test(`it should render a "your profile" heading`, () => {
		const element = screen.getByText(/your profile/i);
		expect(element).toBeInTheDocument();
	});

	test(`it should render profile completion`, () => {
		const element = screen.getByText(/profile completion/i);
		expect(element).toBeInTheDocument();
	});

	test(`it should render a submit button`, () => {
		const element = screen.getByDisplayValue(/submit draft/i);
		expect(element).toBeInTheDocument();
	});

	test(`it should render a reset button`, () => {
		const element = screen.getByDisplayValue(/reset draft/i);
		expect(element).toBeInTheDocument();
	});
});
