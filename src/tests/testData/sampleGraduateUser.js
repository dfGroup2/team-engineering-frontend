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
                "javascript programming": `pending`
            },
            "software design": {
                "bank challenge": `pass`,
                "news summary challenge": `pending`,
                "rock paper scissors challenge": `pending`,
                "chitter challenge": `todo`,
                "test-driven development": `failed`,
            },
            "software development 1": {
                "3rd party integration": `pending`,
            },
            "software development 2": {
                "business services": `pending`,
                "full-stack application": `pending`,
            },
            "team engineering": {
                "java challenge": `pending`,
                "agile team collaboration": `pending`
            },
            "professional skills": {
                "interview challenges": `pending`
            }
        }
    },
    personalInfo:
    {
        badges: [`Badge A`, `Badge B`, `Badge C`],
        scores: [`XX`, `XX`, `XX`],
        videoLink: ``
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