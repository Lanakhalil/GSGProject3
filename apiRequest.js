const { writeMovieCatalog } = require('./fileHandler');

// Simulated movie data
const simulatedMovieData = [
  { title: 'Movie 1', director: 'Director 1', releaseYear: 2021, genre: 'Action' },
  { title: 'Movie 2', director: 'Director 2', releaseYear: 2022, genre: 'Comedy' },
  { title: 'Movie 3', director: 'Director 3', releaseYear: 2023, genre: 'Drama' },
  // Add more movies as needed
];

// Function to simulate fetching movie data
const fetchMovies = () => {
  // Simulate API request delay
  setTimeout(() => {
    const catalog = simulatedMovieData;
    writeMovieCatalog(catalog);
  }, 2000); // Simulated delay of 2 seconds
};

module.exports = {
  fetchMovies,
};
