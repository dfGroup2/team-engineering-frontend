import { render, screen } from '@testing-library/react';

import Header from '../Components/Header';

describe(`Header component tests`, () => {
	beforeEach(() => {
		render(<Header />);

	})

	test(`it should render the df logo`, () => {
		const element = screen.getByRole("img");
		expect(element).toBeInTheDocument();
	})

	test(`it should render the DFX title`, () => {
		const element = screen.getByText(/dfxtra/i);
		expect(element).toBeInTheDocument();
	})

	xtest(`it should render a "need help?" button`, () => {
		const element = screen.getByText(/need help?/i);

		expect(element).toBeInTheDocument();
	})
	xtest(`it should render a "talk to us" button`, () => {

		const element = screen.getByText(/need help?/i);

		expect(element).toBeInTheDocument();
	})
	xtest(`it should render a "menu" button`, () => {

		const element = screen.getByText(/need help?/i);

		expect(element).toBeInTheDocument();
	})

})