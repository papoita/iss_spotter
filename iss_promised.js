/** @format */

const request = require("request-promise-native");
/*
 * Requests user's ip address from https://www.ipify.org/
 * Input: None
 * Returns: Promise of request for ip data, returned as JSON string
 */
const fetchMyIP = function () {
	return request("https://api.ipify.org?format=json");
};
const fetchCoordsByIP = function (body) {
	const ip = JSON.parse(body).ip;
	return request(`https://api.ipify.org?format=json${ip}`);
};
const fetchISSFlyOverTimes = function (body) {
	const { latitude, longitude } = JSON.parse(body).data;
	const url = `https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`;
	return request(url);
};

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };
