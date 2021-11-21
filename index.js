/** @format */

//const { fetchMyIP } = require("./iss");
// const { fetchCoordsById } = require("./iss");
const { fetchISSFlyOverTimes } = require("./iss");

// fetchMyIP((error, ip) => {
// 	if (error) {
// 		console.log("It didn't work!", error);
// 		return;
// 	}

// 	console.log("It worked! Returned IP:", ip);
// });

// fetchCoordsById("ip", (error, coordinates) => {
// 	//replace wih ip
// 	if (error) {
// 		console.log("It didn't work!", error);
// 		return;
// 	}

// 	console.log("It worked! Returned geolocation:", coordinates);
// });
const exampleCoords = { latitude: "49.27670", longitude: "-123.13000" };
fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
  //replace wih ip
  if (error) {
    console.log("Invalid coordinates", error);
    return;
  }

  console.log("It worked! Returned flyover times:", passTimes);
});
