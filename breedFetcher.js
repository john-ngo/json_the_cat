const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    let description = null;
    let errorDesc = error;

    if (errorDesc === null) {
      const data = JSON.parse(body);

      if (data.length === 0) {
        errorDesc = "Breed not found";
      } else {
        description = data[0].description;
      }
    }

    callback(errorDesc, description);
  });
};

module.exports = { fetchBreedDescription };