const { readMovieCatalog, writeMovieCatalog } = require('./fileHandler');

// Function to display the movie catalog
const displayMovieCatalog = () => {
  const catalog = readMovieCatalog();
  console.log('Movie Catalog:');
  catalog.forEach((movie) => {
    console.log(`${movie.title} (${movie.releaseYear}) - ${movie.director} (${movie.genre})`);
  });
};

// Function to add a new movie to the catalog
const addMovie = (movie) => {
  const catalog = readMovieCatalog();
  catalog.push(movie);
  writeMovieCatalog(catalog);
};

// Function to update movie details
const updateMovie = (index, updatedMovie) => {
  const catalog = readMovieCatalog();
  catalog[index] = updatedMovie;
  writeMovieCatalog(catalog);
};

// Function to delete a movie from the catalog
const deleteMovie = (index) => {
  const catalog = readMovieCatalog();
  catalog.splice(index, 1);
  writeMovieCatalog(catalog);
};

module.exports = {
  displayMovieCatalog,
  addMovie,
  updateMovie,
  deleteMovie,
};
