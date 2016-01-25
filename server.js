var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactlist', function(req, res){
    
	console.log("I received a get request!");
	
	person1 = {
        name : 'Tim',
        email : 'tim@email.com',
        number : '111-111-1111'
    };
    person2 = {
        name : 'Robby',
        email : 'robby@email.com',
        number : '111-211-1111'
    };
    person3 = {
        name : 'Hillary',
        email : 'hillary.norton@email.com',
        number : '111-311-1111'
    };
    person4 = {
        name : 'Hafsa',
        email : 'hafsa@email.com',
        number : '111-411-1111'
    };
    var contactlist = [person1, person2, person3, person4];
    res.json(contactlist);
});

app.listen(3000);
console.log("Server running on port 3000");