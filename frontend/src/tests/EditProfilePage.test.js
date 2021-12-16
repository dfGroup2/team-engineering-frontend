import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import EditProfilePage from '../Components/EditProfilePage';

describe(`Tests for EditProfilePage`, () => {
	beforeEach(() => {
		render(
			<Router>
				<EditProfilePage />
			</Router>
		);
	})
    test(`it should render a "your profile" heading`, () => {
		const element = screen.getByText(/your profile/i);
		expect(element).toBeInTheDocument();
	})
});
