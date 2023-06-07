const inquirer = require('inquirer');
const { displayMovieCatalog, addMovie, updateMovie, deleteMovie } = require('./movieManager');
const { fetchMovies } = require('./apiRequest');

// Function to prompt the user for the movie details
const promptMovieDetails = async () => {
  const questions = [
    { type: 'input', name: 'title', message: 'Enter the movie title:' },
    { type: 'input', name: 'director', message: 'Enter the movie director:' },
    { type: 'input', name: 'releaseYear', message: 'Enter the release year:' },
    { type: 'input', name: 'genre', message: 'Enter the movie genre:' },
  ];

  return await inquirer.prompt(questions);
};

// Function to handle user input and perform operations
const startApp = () => {
  const options = [
    'Display Movie Catalog',
    'Add New Movie',
    'Update Movie Details',
    'Delete Movie',
    'Fetch Movie Data',
    'Exit',
  ];

  inquirer
    .prompt({
      type: 'list',
      name: 'option',
      message: 'Select an option:',
      choices: options,
    })
    .then((answers) => {
      switch (answers.option) {
        case options[0]:
          displayMovieCatalog();
          startApp();
          break;
        case options[1]:
          promptMovieDetails().then((movie) => {
            addMovie(movie);
            startApp();
          });
          break;
        case options[2]:
          // Implement update movie details functionality
          // You can prompt the user to select a movie from the catalog and then update its details
          break;
        case options[3]:
          // Implement delete movie functionality
          // You can prompt the user to select a movie from the catalog and then delete it
          break;
        case options[4]:
          fetchMovies();
          startApp();
          break;
        case options[5]:
          console.log('Exiting application...');
          break;
        default:
          console.log('Invalid option selected.');
          startApp();
          break;
      }
    });
};

module.exports = {
  startApp,
};
