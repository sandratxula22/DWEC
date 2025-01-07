var moviesSmall = [
    { title: 'Movie 1' },
    { title: 'Movie 2' },
    { title: 'Movie 3' },
    { title: 'Movie 4' },
    { title: 'Movie 5' },
];
var moviesFull = [
    {
        title: 'Movie 1',
        director: { name: 'Ridley Scott' },
        actors: [{ name: 'Actor one' }, { name: 'Actor two' }],
    },
    {
        title: 'Movie 2',
        director: { name: 'Ridley Scott' },
        actors: [{ name: 'Actor one' }, { name: 'Actor two' }],
    },
    {
        title: 'Movie 3',
        director: { name: 'Ridley Scott' },
        actors: [{ name: 'Actor one' }, { name: 'Actor two' }],
    },
    {
        title: 'Movie 4',
        director: { name: 'Ridley Scott' },
        actors: [{ name: 'Actor one' }],
    },
    {
        title: 'Movie 5',
        director: { name: 'Ridley Scott' },
        actors: [{ name: 'Actor one' }],
    },
];
function getDirector(movie) {
    var _a, _b;
    return (_b = (_a = movie.director) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : 'Unknown director';
}
function getActors(movie) {
    var _a;
    return (_a = movie.actors) !== null && _a !== void 0 ? _a : 'Unknown actors';
}
function getLeadingActor(movie) {
    var _a, _b, _c;
    return (_c = (_b = (_a = movie.actors) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.name) !== null && _c !== void 0 ? _c : 'Unknown actor';
}
function getSecondaryActor(movie) {
    var _a, _b, _c;
    return (_c = (_b = (_a = movie.actors) === null || _a === void 0 ? void 0 : _a[1]) === null || _b === void 0 ? void 0 : _b.name) !== null && _c !== void 0 ? _c : 'Unknown actor';
}
function logMovie(movie) {
    console.log('Director:', getDirector(movie));
    console.log('Actors:', getActors(movie));
    console.log('Lead actor', getLeadingActor(movie));
    console.log('Second actor', getSecondaryActor(movie));
}
function logSmallMovies(movie) {
    logMovie(movie);
}
function logFullMovies(movie) {
    logMovie(movie);
}
moviesSmall.forEach(function (movie) {
    console.group('Small movies');
    logSmallMovies(movie);
    console.groupEnd();
});
moviesFull.forEach(function (movie) {
    console.group('Full movies');
    logFullMovies(movie);
    console.groupEnd();
});
