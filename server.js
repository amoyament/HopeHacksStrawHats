require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const session = require("express-session");
const mysql = require("mysql");
const userRoutes = require("./routes/userRoutes");
const lossGainRoutes = require("./routes/lossGainRoutes");
const contactRoutes = require("./routes/contactRoutes");
const airRoutes = require("./routes/airRoutes");
const adminRoutes = require("./routes/adminRoutes.js");

//mount middle ware
const app = express();
app.set("view engine", "ejs");
let PORT = process.env.PORT || 300;
//static files
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("tiny"));
//in order to perform request beside post and get we must use 
//method override
app.use(methodOverride("_method"));
//configure session settings
app.use(
  session({
    secret: "ajfeirf90aeu9eroejfoefj",
    resave: false,
    saveUninitialized: false,
  })
);

// local variables that can be accessed within ejs temlates
//used to store user's name and wehter or not a user is logged in
app.use((req, res, next) => {
  res.locals.user = req.session.user ? 1 : 0;
  res.locals.name = req.session.name ? req.session.name : 0;
  next();
});

//render homepage
app.get("/", (req, res) => {
  res.render("index");
});

//routes
app.use('/user', userRoutes)
app.use('/loss-gain', lossGainRoutes)
app.use('/contact', contactRoutes)
app.use('/air', airRoutes)
app.get("/map", (req,res)=>{
  res.render("map")
})

//user signout
//destroy session
app.get("/signout", (req, res)=>{
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });

})
///admin route
app.use("/admin", adminRoutes)

const connection = mysql.createConnection({
  host: "127.0.0.1",
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
        userName VARCHAR(255) NOT NULL,
        UNIQUE(email)
    );`;
  connection.query(createUser, function (err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });

  console.log("Connected to the MySQL server.");
  app.listen(PORT, () => console.log("Server is running on port " + PORT));
});


//404 page not found handler
app.use((req, res, next) => {
  res.render("404.ejs");
});

