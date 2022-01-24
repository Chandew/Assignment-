var os = require('os');
var fs = require('fs');
var http = require('http');
const { contentType } = require('express/lib/response');

console.log(os.platform());
console.log(os.arch());

fs.writeFileSync('test.txt', "Hello world again");

const students = [{
    rollNo:1,
    name: 'John',
    city: 'Mumbai'
},{
    rollNo:2,
    name: 'Don',
    city: 'Delhi'
},{
    rollNo:3,
    name: 'Lon',
    city: 'Pune'
}];
const restaurants = [{
    Id: 1,
    name: 'KFC',
    city: 'Mumbai'
},{
    Id:2,
    name: 'Burger King',
    city: 'Delhi'
},{
    Id:3,
    name: 'Domino Pizza',
    city: 'Pune'
}];

const cities = [{
    name: 'New Delhi',
    state: 'Delhi'
},{
    name: 'Mumbai',
    state: 'Maharashtra'
},{
    name: 'Imphal',
    state: 'Manipur'
}];

http.createServer((req, res) => {
    if (req.url == '/students' && req.method == 'GET') {
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify(students));

    }if(req.url == '/cities' && req.method == 'GET') {
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify(cities));

    }if(req.url == '/restaurants' && req.method == 'GET'){
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify(restaurants));
    }
    else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Hello world! I am trying to be a better man');
        res.end();
    }

}).listen(4567);

/* http status code
200 - success
400 - unauthorised access
404 - not found resource
500 - internal server error


    API verbs/request types
    GET - GET DATA FROM SERVER
    POST - FN WANTS TO SAVE DATA INTO THE DB
    DELETE - FN WANTS TO DELETE FROM DB
    PUT - CLIENTS WANTS TO UPDATE FROM DB


    CRUD OPERATIONS

    C - CREATE(POST)
    R - READ(GET)
    U - UPDATE(PUT)
    D - DELETE(DELETE)

*/
