import { render, screen } from '@testing-library/react';

import InfoSection from '../Components/GradProfileComponents/InfoSection';
import { testGraduateUser } from './testData/sampleGraduateUser';
const {personalInfo} = testGraduateUser

describe(`InfoSection component tests`, () => {
    beforeEach(() => {
        render(<InfoSection infoData={personalInfo}/>);
    });

    describe('Render Test', () => {

        test(`it should render your information`, () => {
            const element = screen.getByText(/your information/i);
            expect(element).toBeInTheDocument();
        })
        test(`it should render badges`, () => {
            const element = screen.getByText(/badges/i);
            expect(element).toBeInTheDocument();
        })
        xtest(`it should render badge A`, () => {
            const element = screen.getByText(/badge A/i);
            expect(element).toBeInTheDocument();
        })
        xtest(`it should render badge A three times`, () => {
            const numberOfBadges = screen.getAllByText(/badge a/i).length;
            expect(numberOfBadges).toBe(3);
        })
        test(`it should render scores`, () => {
            const element = screen.getByText(/scores/i);
            expect(element).toBeInTheDocument();
        })
        test(`it should render aptitude`, () => {
            const element = screen.getByText(/aptitude/i);
            expect(element).toBeInTheDocument();
        })
        xtest(`it should render java`, () => {
            const element = screen.getByText(/java/i);
            expect(element).toBeInTheDocument();
        })

    })
    describe('Data tests', () => {

        test(`it should render badge data`, () => {
            const element = screen.getByText(personalInfo.badges[0]);
            expect(element).toBeInTheDocument();
        })
        test(`it should render badge data`, () => {
            const element = screen.getByText(personalInfo.badges[1]);
            expect(element).toBeInTheDocument();
        })
        test(`it should render badge data`, () => {
            const element = screen.getByText(personalInfo.badges[2]);
            expect(element).toBeInTheDocument();
        })
        test(`it should render badge data`, () => {
            const element = screen.getByText(personalInfo.badges[3]);
            expect(element).toBeInTheDocument();
        })
         test(`it should render 65%`, () => {
            const element = screen.getByText(personalInfo.scores[0]);
            expect(element).toBeInTheDocument();
         })
         test(`it should render 80%`, () => {
            const element = screen.getByText(personalInfo.scores[1]);
            expect(element).toBeInTheDocument();
         })
         test(`it should render 97%`, () => {
            const element = screen.getByText(personalInfo.scores[2]);
            expect(element).toBeInTheDocument();
        })
})

})
;