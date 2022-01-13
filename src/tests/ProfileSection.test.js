import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProfileSection from '../Components/GradProfileComponents/ProfileSection';
import { testGraduateUser } from './testData/sampleGraduateUser2';

describe(`Tests for ProfileSection`, () => {

	const mockCapitaliseFirstLetter = jest.fn();

	beforeEach(() => {
		render(
			<Router>
				<ProfileSection graduateUserData={testGraduateUser} capitaliseFirstLetter={mockCapitaliseFirstLetter} />
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