if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
// MAIN
const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const flash = require('connect-flash');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const homeRoutes = require('./routes/home/home');
const loginRoutes = require('./routes/login/login')
const businessOwnerProfileRoutes = require('./routes/businessOwner/home');
const verificationRoutes = require('./routes/home/verificationRoutes');
const  businessOwnerRoutes = require('./routes/signUp/businessOwner');
const MongoStore = require("connect-mongo");

// const dbUrl = 'mongodb://localhost:27017/aseedo';     // For development
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/aseedo';


// CONNECTION TO THE DATABASE
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
  console.log("DATABASE CONNECTED!!");
}

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
// app.use(flash());

// app.configure(function() {
// app.use(express.cookieParser('keyboard cat'));
// app.use(express.session({ cookie: { maxAge: 60000 }}));
const secret = process.env.SERVER_SECRET;

app.use(session({
  secret,
  saveUninitialized: false,
  resave: false,
  store: MongoStore.create({
    mongoUrl: dbUrl,
    dbName: 'aseedo',
    ttl: 14 * 24 * 60 * 60,
    autoRemove: 'native',
  })
}));
app.use(flash());
// });


// =============================================
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});
// =============================================



app.use('/', homeRoutes);
app.use('/signup/businessowner', businessOwnerRoutes);
app.use('/profile/:id', businessOwnerProfileRoutes);
app.use(`/verify/${process.env.SERVER_SECRET}/user`, verificationRoutes);
app.use('*', (req, res) => {
  res.send("Page Not Found!!")
});

// CREATING A SERVER
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`SERVER STARTED AT PORT ${PORT}`);
})
