/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 *
 * @format
 */
const request = require("request");
// const fetchMyIP = function (callback) {
// 	// use request to fetch IP address from JSON API
// 	request(`https://api.ipify.org/?format=json`, (error, response, body) => {
// 		if (error) {
// 			callback(error, null);
// 			return;
// 		}
// 		if (response.statusCode !== 200) {
// 			const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
// 			callback(Error(msg), null);
// 			return;
// 		}
// 		const data = JSON.parse(body);
// 		if (data) {
// 			callback(null, data.ip);
// 		} else {
// 			callback(null, `ip not found`);
// 		}
// 	});
// };

const fetchCoordsById = function (ip, callback) {
	request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
		if (error) {
			callback(error, null);
			return;
		}
		if (response.statusCode !== 200) {
			const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
			callback(Error(msg), null);
			return;
		}
		const { latitude, longitude } = JSON.parse(body);
		if (body) {
			callback(null, { latitude, longitude });
		} else {
			callback(null, `ip not found`);
		}
	});
};

//module.exports = { fetchMyIP };
module.exports = { fetchCoordsById };
