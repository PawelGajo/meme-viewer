var request = require("request");

request({uri: "http://www.jbzd.com.pl"}, 
    function(error, response, body) {
    console.log(body);
    }
);