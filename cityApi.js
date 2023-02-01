// This code would have worked by simply copying the code snippet and editing the datat I wanted to see. However, I decided to convert it to async/await

async function getCityInfo() {
  try {
    // try-catch block to handle errors
    const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities/Q5465";
    // define the options object for the API request
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "fe28905c1cmsh047ba1d12355975p110bb3jsn06519d3d6e72",
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
      },
    };
    // make the API request and wait for the response
    const res = await fetch(url, options);

    // convert the text received to an object using .json
    const json = await res.json();

    // log the relevant city data
    const name = json.data.name;
    const population = json.data.population;
    const elevation = json.data.elevationMeters;
    console.log("City Name: ", name);
    console.log("Population: ", population);
    console.log("Elevation: ", elevation);
    // log the error, if any
  } catch (error) {
    console.error("Error:" + error);
  }
}

getCityInfo();

// Similar code to the one above therefore I will not comment on this one
async function getCityWeather() {
  try {
    const url =
      "https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=18.4&lat=-33.9";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "fe28905c1cmsh047ba1d12355975p110bb3jsn06519d3d6e72",
        "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
      },
    };
    const res = await fetch(url, options);
    const json = await res.json();
    const temperature = json.data[0].temp;
    console.log("Current Temperature: ", temperature);
  } catch (error) {
    console.error("Error:" + error);
  }
}

getCityWeather();
