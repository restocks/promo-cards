console.time("Start database");
console.log("Starting database");
var config = require("./config");
var massive = require("massive");
var async = require("async");
var db = massive.connectSync({connectionString : config('pg_url')}); 
console.timeEnd("Start database");
function createCode() {
	// http://stackoverflow.com/questions/1349404/generate-a-string-of-5-random-characters-in-javascript
	return (Math.random().toString(36)+'00000000000000000').slice(2, 5+2).toUpperCase()
}

function generateAndSaveCode(number, callback) {
	db.codes.save({code: createCode()}, function(err) {
		callback();
	});
}

function doneWithCodes() {
	console.log(config("numberOfCodes") + " codes generated and saved.");
}

// generates as many codes 
async.times(config("numberOfCodes"), generateAndSaveCode, doneWithCodes);