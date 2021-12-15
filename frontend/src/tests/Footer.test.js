import { render } from '@testing-library/react';
import Footer from '../Components/Footer';

describe(`Footer component test suite`, () => {

    test(`it should match the snapshot`, () => {
        expect(render(<Footer />)).toMatchSnapshot();
    });
});