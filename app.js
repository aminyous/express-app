
var express = require('express')
var app = express()
// var path = require('path');

// app.use(express.static(__dirname+''))




app.get('/', function (req, res) {  
res.sendFile(__dirname + '/public/index.html');

});


app.get('/:a', function (req, res) {  
var p = req.params.a;
console.log(req.params);
res.sendFile(__dirname + '/public/'+p+'.html');
});


// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/'));
// });




// app.get('/contact', function (req, res) {  
// res.sendFile(__dirname + '/public/contact.html');
// });
// app.get('/portfolio', function (req, res) {  
// res.sendFile(__dirname + '/public/portfolio.html');
// });
// app.get('/calendar', function (req, res) {  
// res.sendFile(__dirname + '/public/calendar.html');
// });
// app.get('/shop', function (req, res) {  
// res.sendFile(__dirname + '/public/shop.html');
// });
// app.get('/map', function (req, res) {  
// res.sendFile(__dirname + '/public/map.html');
// });

// CTRL+K / Comment
// CTRL+U UNCOMMENT


 
app.listen(5000, ()=>{
    console.log('Server Up on port  5000');
});


