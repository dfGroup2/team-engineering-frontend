import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import EditPersonalStory from '../Components/EditProfileComponents/EditPersonalStory';

describe(`Tests for EditPersonalStory`, () => {
	beforeEach(() => {
		render(
			<Router>
				<EditPersonalStory />
			</Router>
		);
	});

	test(`it should render a "personal story" heading`, () => {
		const element = screen.getByText(/personal story/i);
		expect(element).toBeInTheDocument();
	});
	test(`it should render a Degrees heading`, () => {
		const element = screen.getByText(/degrees/i);
		expect(element).toBeInTheDocument();
	});


});
