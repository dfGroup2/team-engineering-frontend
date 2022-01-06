const testGraduateUser = {
    graduateProfile:
    {
        firstName: "Bilbo",
        lastName: "Baggins",
        personalEmail: "bbaggins@theshire.com",
        DFEmail: "bb1@digitalfutures.com",
        github: "https://github.com/",
        linkedIn: "https://www.linkedin.com/",
        phoneNumber: "01234567",
        profilePicture: "me.png",
        personalStory: "The Hobbit",
        gender: "Male",
        nationality: "New Zealand",
        personality: "ESFJ - Consul"
    },
    graduateTraining:
    {
        learningPath: `Software Engineering`,
        cohort: `Software Engineering 3`,
        trainer: `Ed Wright`,
        finishedDate: `Jan 11, 2022`,
        courseModules:
        {
            fundamentals: {
                javascriptProgramming: `pending`
            },
            softwareDesign: {
                bankChallenge: `pass`,
                newsSummaryChallenge: `pending`,
                rockPaperScissorsChallenge: `pending`,
                chitterChallenge: `todo`,
                testDrivenDevelopment: `failed`,
            },
            softwareDevelopment1: {
                thirdPartyIntegration: `pending`,
            },
            softwareDevelopment2: {
                businessServices: `pending`,
                fullStackApplication: `pending`,
            },
            teamEngineering: {
                javaChallenge: `pending`,
                agileTeamCollaboration: `pending`
            },
            professionalSkills: {
                interviewChallenges: `pending`
            }
        }
    },
    personalInfo:
    {
        badges: [`Java`, `Javascript`, `React`],
        scores: [`65`, `80`, `97`],
    
    },
    personalStory:
    {
        degree:
        {
            university: `UOL`,
            subject: `Comp Sci`,
            level: `BSc`,
            grade: `P`,
            date: { from: `2018-09-01`, to: `2019-09-01` },
            weight: `L`,
            priority: 1,
            description: `university degree`
        },
        schoolQualifications:
        {
            school: `high school`,
            examType: `GCSE`,
            subject: `IT`,
            grade: `Dist`,
            year: { from: `2011`, to: `2012` },
            weight: `m`,
            priority: 1,
            description: `high school qualification`
        },
        certificatesAndAwards:
        {
            type: ``,
            issuer: ``,
            award: ``,
            grade: ``,
            year: ``,
            weight: ``,
            priority: 1,
            description: ``
        },
        portfolio:
        {
            title: ``,
            url: ``,
            year: ``,
            weight: ``,
            priority: 1,
            description: ``
        },
        workExperience:
        {
            type: ``,
            employerOrOtherOrganisation: ``,
            position: ``,
            date: { from: ``, to: `` },
            weight: ``,
            priority: 1,
            description: ``
        }
    },
    news:
    {

    }
}

module.exports = { testGraduateUser };