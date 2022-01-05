import { render, screen } from '@testing-library/react';

import ProfileInfo from '../Components/GradProfileComponents/ProfileInfo';
import { testProfile2 } from './testData/sampleProfileInfo';

describe(`ProfileInfo component tests`, () => {
    beforeEach(() => {
        render(<ProfileInfo profileInfo={testProfile2} />);
    });

    describe('Render Test', () => {

        test(`it should render users name`, () => {
            const element = screen.getByText(/Name/i);
            expect(element).toBeInTheDocument();
        });

        test('it should render personal email', () => {
            const element = screen.getByText(/Personal email/i);
            expect(element).toBeInTheDocument();
        });

        test('it should render Digital Futures email', () => {
            const element = screen.getByText(/Digital Futures email/i);
            expect(element).toBeInTheDocument();
        });

        test('it should render github', () => {
            const element = screen.getByText(/github/i);
            expect(element).toBeInTheDocument();
        });

        test('it should render LinkedIn', () => {
            const element = screen.getByText(/LinkedIn/i);
            expect(element).toBeInTheDocument();
        });

        test('it should render Phone', () => {
            const element = screen.getByText(/Phone/i);
            expect(element).toBeInTheDocument();
        });

        test(`it should render the data passed through the props`, () => {
            //render(<ProfileInfo profileInfo={testProfile2} />);

            expect(screen.getByText(/bilbo baggins/i)).toBeInTheDocument();
            expect(screen.getByText(/bbaggins@theshire.com/i)).toBeInTheDocument();
            expect(screen.getByText(/bb1@digitalfutures.com/i)).toBeInTheDocument();
            expect(screen.getAllByText(/https:/i).length).toBe(2);
            expect(screen.getByText(/01234567/i)).toBeInTheDocument();
        });
    });
});