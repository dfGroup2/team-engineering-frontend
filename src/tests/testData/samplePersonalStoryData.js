const testPersonalStory = {
    degree:
        [
            {
                university: `Southampton University`,
                subject: `Chemistry`,
                level: `BSc`,
                grade: `2:1`,
                date: { from: `2016-01-01`, to: `2018-01-01` },
                weight: `L`,
                priority: 10,
                description: `majored in science`
            },
            {
                university: `Lancaster`,
                subject: `Comp Sci`,
                level: `MSc`,
                grade: `Merit`,
                date: { from: `2019-01-01`, to: `2021-09-01` },
                weight: `L`,
                priority: 8,
                description: `university degree`
            }
        ],
    schoolQualifications:
        [
            {
                school: `St Winifred's`,
                examType: `a-level`,
                subject: `Maths`,
                grade: `A`,
                year: { from: `2015`, to: `` },
                weight: `M`,
                priority: 5,
                description: ``
            }
        ],
    certificatesAndAwards:
        [
            {
                type: `Cert`,
                issuer: `Oracle`,
                award: `Oracle-Java SE`,
                grade: `Distinction`,
                year: `2021-01-01`,
                weight: `L`,
                priority: 7,
                description: ``
            },
            {
                type: `Award`,
                issuer: `Southampton Uni Debate Club`,
                award: `MVP`,
                grade: ``,
                year: `2021-01-01`,
                weight: `M`,
                priority: 4,
                description: ``
            }
        ],
    portfolio:
        [
            {
                title: `How to Identify Opportunities`,
                url: `https://mysite/howt`,
                year: `2020-01-01`,
                weight: `L`,
                priority: 9,
                description: `A motivational talk I delivered on how to identify opportunities`
            }
        ],
    workExperience:
        [
            {
                type: `Experience`,
                employerOrOtherOrganisation: `Fred's Ice Cream`,
                position: `Ice Cream Maker`,
                date: { from: `2012-01-01`, to: `2013-01-01` },
                weight: `M`,
                priority: 2,
                description: ``
            },
            {
                type: `Position`,
                employerOrOtherOrganisation: `Southampton Uni Debate Club`,
                position: `Secretary`,
                date: { from: `2020-01-01`, to: `2021-01-01` },
                weight: `L`,
                priority: 6,
                description: `public speaking is one of my skills`
            }
        ]
};

module.exports = {
    testPersonalStory
};