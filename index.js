var express = require('express')
var app = express()
var knex = require('knex')
var bodyParser = require('body-parser');

var path = require('path');

var cars = require('./todo')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
  res.redirect('/home')
})



app.get('/home', function(req, res) {
  cars.getAll()
    .then(function(cars){
      res.render('index', {cars: cars})
    })
  // res.render('index', myName)
})

app.get('/cars/id:', function(req, res){
  cars.getAll()
  .then(function(id){
    res.render('carShow')
  })
})

app.get('/search-car', function(req, res) {
  cars.searching()
  // document.getElementById('search')
    .then(function (data) {
          console.log(data)
      res.render('search-car', {data: data})
    })
    .catch(function (err){
      console.log(err)
    })
});

// console.log(cars.getAll())
app.listen(3000)
module.express = app
