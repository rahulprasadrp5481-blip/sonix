import covers from './covers';

const songs = [
    {
        id: 'baarish-ke-baad',
        title: 'Baarish ke baad',
        artist: 'Meera Sen',
        cover: covers.baarish,
        moods: ['Rainy day'],
    },
    {
        id: 'old-delhi-lights',
        title: 'Old Delhi lights',
        artist: 'The Monsoon Club',
        cover: covers.delhi,
        moods: ['Old songs','Late night'],
    },
    {
        id: 'rail-ki-khidki',
        title: 'Rail ki khidki',
        artist: 'Nightbus',
        cover: covers.train,
        moods: ['Old songs','Late night'],
    },
    {
        id: 'paper-moons',
        title: 'Paper moons',
        artist: 'Tara & the Tides',
        cover: covers.kite,
        moods: ['Late night'],
    },
    {
        id: 'letters-from-the-past',
        title: 'Letters from the past',
        artist: 'The Monsoon Club',
        cover: covers.classics,
        moods: ['Old songs'],
        isNew: true,
    },
    {
        id: 'deep-work',
        title: 'Deep work',
        artist: 'Tara & the Tides',
        cover: covers.focus,
        moods: ['Focus'],
    },
    {
        id: 'subha-ki-dhoop',
        title: 'Subha ki dhoop',
        artist: 'Meera Sen',
        cover: covers.morning,
        moods: ['Focus'],
    },
    {
        id: 'chai-on-the-terrace',
        title: 'Chai on the terrace',
        artist: 'Lal Batti',
        cover: covers.chai,
        moods: ['Old songs'],
        isNew: true,
    },
    {
        id: 'last-bus',
        title: 'Last bus',
        artist: 'Nightbus',
        cover: covers.nightdrive,
        moods: ['Late night'],
        isNew: true,
    },
    {
        id: 'monsoon-letters',
        title: 'Monsoon letters',
        artist: 'Kabir Kaul',
        cover: covers.letters,
        moods: ['Rainy day'],
        isNew: true,
    }
];

export default songs;