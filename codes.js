console.time("Start database");
console.log("Starting database");
var config = require("./config");
var massive = require("massive");
var async = require("async");
var gm = require("gm");
var db = massive.connectSync({connectionString : config('pg_url')}) 
console.timeEnd("Start database");
function createCode() {
	// http://stackoverflow.com/questions/1349404/generate-a-string-of-5-random-characters-in-javascript
	return (Math.random().toString(36)+'00000000000000000').slice(2, 5+2).toUpperCase()
}

function codeMaker(number, callback) {
	var code = createCode()
	db.codes.save({code: code}, function(err) {
		callback();
	});
	generateImageWithCode(code);
}

function generateImageWithCode(code) {
	gm("./art/back-master.png").fill('#FFFFFF')
	    .drawText(0, 1000, code, 'Center')
	    // specify a custom font if you want
	    .font('./art/CircularStd-Bold.otf')
	    // .font('Helvetica-Bold')
	    .fontSize( '350px' )
	    .write( "cards/" + code + ".png", function (err) {
	        if (err) {
	            throw err;
	        } 
	    });
}

function doneWithCodes() {
	console.log(config("numberOfCodes") + " codes generated and saved.");
}

// generates as many codes as in config.
async.times(config("numberOfCodes"), codeMaker, doneWithCodes);