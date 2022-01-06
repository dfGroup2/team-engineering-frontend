import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PersonalStoryModal from '../Components/EditProfileComponents/PersonalStoryModal';
import userEvent from '@testing-library/user-event';

xdescribe(`PersonalStoryModal test suite`, () => {
    beforeEach(() => {
        render(
            <Router>
                <PersonalStoryModal />
            </Router>
        );
    });
    describe('render tests', () => {

        test('it should render a form', () => {
            const element = screen.getByRole('form');
            expect(element).toBeInTheDocument();
        })
    })



});