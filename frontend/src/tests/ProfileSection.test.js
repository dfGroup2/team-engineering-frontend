import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProfileSection from '../Components/GradProfileComponents/ProfileSection';

describe(`Tests for ProfileSection`, () => {
	beforeEach(() => {
		render(
			<Router>
				<ProfileSection />
			</Router>
		);
	})
	test(`it should render a "your profile" heading`, () => {
		const element = screen.getByText(/your profile/i);
		expect(element).toBeInTheDocument();
	})

	test(`it should render an edit link`, () => {
		const element = screen.getByText(/edit/i);
		expect(element).toBeInTheDocument();
	})
})