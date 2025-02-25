import { UserDetail } from "../models/UserModels";

export const mockUserDetailData: UserDetail [] = [
    {
        email: 'tony@stark.com',
        password: 'tony123',
        personalDetail: {
            name: 'Tony Stark',
            email: 'tony@stark.com',
            id: 1,
            role: 'Genius Billionaire',
            age: 48,
            occupation: 'CEO of Stark Industries',
            imgUrl: 'tony.jpg',
            alias: '(Iron-Man)',
            gender: 'Male',
            nationality: 'American',
            weak: 'Relies heavily on technology.',
            gear: 'Iron Man Suits'
        }
    },
    {
        email: 'peter@parker.com',
        password: 'peter123',
        personalDetail: {
            name: 'Peter Parker',
            email: 'peter@parker.com',
            id: 2,
            role: 'High School Student',
            age: 17,
            occupation: 'Student',
            imgUrl: 'peter.jpg',
            alias: '(Spider-Man)',
            gender: 'Male',
            nationality: 'American',
            weak: 'Inexperience and emotional vulnerability.',
            gear: 'Web-shooters, Spider Suit'
        }
    },
    {
        email: 'black@widow.com',
        password: 'black123',
        personalDetail: {
            name: 'Natasha Romanoff',
            email: 'black@widow.com',
            id: 3,
            role: 'Spy, Assassin, Avenger',
            age:39,
            occupation: 'Hand-to Hand Combat Expert',
            imgUrl: 'black.jpg',
            alias: '(Black Widow)',
            gender: 'Female',
            nationality: 'Russian',
            weak: 'No superhuman abilitis, relies on skill and training.',
            gear: 'Stealth Suit'
        }
    },
    {
        email: 'thor@odin.com',
        password: 'thor123',
        personalDetail: {
            name: 'Thor Odinson',
            email: 'thor@odin.com',
            id: 4,
            role: 'God of Thunder',
            age: 1500,
            occupation: 'King of Asgard',
            imgUrl: 'thor.jpg',
            alias: '(Thor)',
            gender: 'Male',
            nationality: 'Asgardian',
            weak: 'Overconfidence in battle',
            gear: 'Mjolnir, Stormbreaker'
        }
    },
    {
        email: 'steve@rogers.com',
        password: 'steve123',
        personalDetail: {
            name: 'Steve Rogers',
            email: 'steve@rogers.com',
            id: 5,
            role: 'Leader of the Avengers',
            age: 105,
            occupation: 'Soldier',
            imgUrl: 'steve.jpg',
            alias: '(Captain America)',
            gender: 'Male',
            nationality: 'American',
            weak: 'His strong moral code can be explioted.',
            gear: 'Vibranium Shield'
        }
    }

]