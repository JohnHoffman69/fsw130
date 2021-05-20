const store = require('./redux/index.js');
const {addMovie, removeMovie, getMovies} = require('./redux/movies.js');
const {addTvShow, removeTvShow, getShows} = require('./redux/tvShows.js');

console.log('Adding Iron Man (Movie)');
store.dispatch(addMovie('Iron Man'));

console.log('Removing Thunder Force (Movie)')
store.dispatch(removeMovie('Thunder Force'));

console.log('The King (TV Show)');
store.dispatch(addTvShow('The King'));

console.log('Removing Beyond Evil (TV Show)');
store.dispatch(removeTvShow('Beyond Evil'));

console.log('Fetching ALL shows and movies...');
store.dispatch(getShows());
store.dispatch(getMovies());