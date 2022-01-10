import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import EditPersonalStory from '../Components/EditProfileComponents/EditPersonalStory';
import PersonalStoryModal from '../Components/EditProfileComponents/PersonalStoryModal';
jest.mock('../Components/EditProfileComponents/PersonalStoryModal', () => {
	return function mockPersonalStoryModal() {
		return <th>mockPersonalStoryModal</th>
	}
});

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
	test(`it should render a school qualifications heading`, () => {
		const element = screen.getByText(/school qualifications/i);
		expect(element).toBeInTheDocument();
	});




});

describe(`Form Interaction tests`, () => {
	test('a button brings up the modal', () => {
		const { container } = render(
			<Router>
				<EditPersonalStory />
			</Router>
		);
		const element = container.querySelector("button[name='addDegree']");
		userEvent.click(element);
		const modal = screen.getByText(/mockPersonalStoryModal/i);
		expect(modal).toBeInTheDocument();


	})
});


