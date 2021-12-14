import { render, screen } from '@testing-library/react';

import ProfileSection from '../Components/ProfileSection';

describe(`Tests for ProfileSection`, () => {
	beforeEach(() => {
		render(<ProfileSection />);
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