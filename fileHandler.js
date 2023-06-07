const fs = require('fs');

const filePath = 'movie_catalog.json';

// Function to read movie catalog data from the JSON file
const readMovieCatalog = () => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading movie catalog:', error);
    return [];
  }
};

// Function to write movie catalog data to the JSON file
const writeMovieCatalog = (catalog) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(catalog, null, 2));
    console.log('Movie catalog updated successfully!');
  } catch (error) {
    console.error('Error writing movie catalog:', error);
  }
};

module.exports = {
  readMovieCatalog,
  writeMovieCatalog,
};
