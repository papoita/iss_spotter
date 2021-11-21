/** @format */

//const { fetchMyIP } = require("./iss");
const { fetchCoordsById } = require("./iss");

// fetchMyIP((error, ip) => {
// 	if (error) {
// 		console.log("It didn't work!", error);
// 		return;
// 	}

// 	console.log("It worked! Returned IP:", ip);
// });
fetchCoordsById("ip", (error, coordinates) => {
	//replace wih ip
	if (error) {
		console.log("It didn't work!", error);
		return;
	}

	console.log("It worked! Returned geolocation:", coordinates);
});
