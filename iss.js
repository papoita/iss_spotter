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
const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request(`https://api.ipify.org/?format=json`, (error, response, body) => {
    if (error) {
      callback(error, response.statusCode);
      return;
    }
    const data = JSON.parse(body);
    if (data) {
      callback(null, data.ip);
    } else {
      callback(null, `ip not found`);
    }
  });
};

module.exports = { fetchMyIP };
