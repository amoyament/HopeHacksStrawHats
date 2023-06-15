require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const session = require('express-session')
const mysql = require("mysql");

/*
const userRoutes = require('./routes/userRoutes')
const lossGainRoutes = require('./routes/lossGainRoutes')
const fireRoutes = require('./routes/fireRoutes')
const bioRoutes = require('./routes/bioRoutes')
*/


const app = express()
let PORT = process.env.PORT || 300
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(morgan('tiny'))
app.use(methodOverride('_method'))
app.use(
    session({
        secret: "ajfeirf90aeu9eroejfoefj",
        resave: false,
        saveUninitialized: false
    })
)

app.get('/', (req, res)=>{
    res.render('index')
})

/*
app.use('/user', userRoutes)
app.use('/loss-gain', lossGainRoutes)
app.use('/fire', fireRoutes)
app.use('/bio', bioRoutes)
*/
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD,
    database: "hope",
  });
connection.connect(function (err) {
    if (err) {
      return console.error("error: " + err.message);
    }
  
    let createUser = `CREATE TABLE IF NOT EXISTS users (
        id INT PRIMARY KEY AUTO_INCREMENT,
        firstName VARCHAR(255) NOT NULL,
        lastName VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        completed TINYINT(1) NOT NULL DEFAULT 0
    );`;
    connection.query(createUser, function (err, results, fields) {
      if (err) {
        console.log(err.message);
      }
    });
  
    console.log("Connected to the MySQL server.");
  });
  
